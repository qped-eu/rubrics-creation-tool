import {
  SentimentDissatisfied,
  SentimentSatisfiedAlt,
  SentimentVeryDissatisfied,
  SentimentVerySatisfied,
} from "@mui/icons-material";
import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Rating,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import _ from "lodash";
import { useState } from "react";
import features from "../../resources/features.json";

// Extrapolate Points based on the total weighted score
function computeExtrapolatedPoints(score, maxPoints) {
  let percentile = score / 3;
  return Math.round(maxPoints * percentile * 2) / 2;
}

// Compute the total weighted score
// Warning: The score of each feature
// could have been changed manually
function computeWeightedScore(featureWeights, featurePoints) {
  let score = 0;
  let totalWeight = 0;
  for (let i = 0; i < featureWeights.length && i < featurePoints.length; i++) {
    score += featurePoints[i] * featureWeights[i];
    if (typeof featureWeights[i] === "string") {
      totalWeight += Number(featureWeights[i]);
    } else {
      totalWeight += featureWeights[i];
    }
  }
  console.log(
    "Total score:",
    score,
    "total weight:",
    totalWeight,
    "score/totalWeight:",
    score / totalWeight
  );
  score /= totalWeight;
  return score;
}

// Compute the total score
function computeScore(featureWeights, featurePoints) {
  let score = computeWeightedScore(featureWeights, featurePoints);
  let extrapolatedPoints = computeExtrapolatedPoints(score, 12);
  //console.log("Score:", score, "Extrapolated:", extrapolatedPoints);
  return extrapolatedPoints;
}

// Compute Points per feature: Ranging from 1 to 4
// Every time a checkbox changes
// the score needs to be computed again.
function computePoints(feature) {
  const fail_examples = feature.examples[0];
  const pass_examples = feature.examples[1];
  let failExampleCount = fail_examples.length;
  let passExampleCount = pass_examples.length;

  let failExamplesSelected = _.filter(fail_examples, (x) => x.checked).length;
  let passExamplesSelected = _.filter(pass_examples, (x) => x.checked).length;

  let failRatio = failExamplesSelected / failExampleCount;
  if (isNaN(failRatio)) {
    failRatio = 0;
  }

  let passRatio = passExamplesSelected / passExampleCount;
  if (isNaN(passRatio)) {
    passRatio = 0;
  }

  return Math.round((passRatio - failRatio + 1) * 2);
}

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfied color="error" />,
    emptyIcon: <SentimentVeryDissatisfied color="disabled" />,
    label: "Fully Failed",
  },
  2: {
    icon: <SentimentDissatisfied color="warning" />,
    emptyIcon: <SentimentDissatisfied color="disabled" />,
    label: "Partly Failed",
  },
  3: {
    icon: <SentimentSatisfiedAlt color="warning" />,
    emptyIcon: <SentimentSatisfiedAlt color="disabled" />,
    label: "Partly Satisfied",
  },
  4: {
    icon: <SentimentVerySatisfied color="success" />,
    emptyIcon: <SentimentVerySatisfied color="disabled" />,
    label: "Fully Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  if (other.className.includes("MuiRating-iconEmpty")) {
    return <span {...other}>{customIcons[value].emptyIcon}</span>;
  } else {
    return <span {...other}>{customIcons[value].icon}</span>;
  }
}

const FeatureTableItem = ({ defaultFeature, points, setPoints }) => {
  const [feature, setFeature] = useState(defaultFeature);

  const onFeatureClick = (exampleIdx, featureKey, mutexKey) => {
    const oppositeExampleIdx = (exampleIdx + 1) % 2;
    let newFeatureState = _.cloneDeep(feature);
    let oldItem;
    newFeatureState.examples[exampleIdx] = _.map(
      feature.examples[exampleIdx],
      (item) => {
        if (item.key === featureKey) {
          oldItem = _.clone(item);
          return { ...item, checked: !item.checked };
        } else {
          return item;
        }
      }
    );
    if (oldItem && !oldItem.checked) {
      newFeatureState.examples[oppositeExampleIdx] = _.map(
        feature.examples[oppositeExampleIdx],
        (item) =>
          item.mutex_key === mutexKey ? { ...item, checked: false } : item
      );
    }

    setFeature(newFeatureState);
    setPoints(Math.max(Math.min(computePoints(feature), 4), 1));
  };
  console.log("POINTS:", points);
  return (
    <TableRow>
      <TableCell>{feature.name}</TableCell>
      <TableCell sx={{ verticalAlign: "top" }}>
        <FormGroup>
          {_.map(feature.examples[0], (f, idx) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={f.checked}
                  onClick={() => onFeatureClick(0, f.key, f.mutex_key)}
                />
              }
              label={f.desc}
              key={idx}
            />
          ))}
        </FormGroup>
        {/*<ExampleList
          examples={feature.examples[0]}
          onFeatureClick={onFeatureClick(0)}
            />*/}
      </TableCell>
      <TableCell>
        <Rating
          sx={{
            "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
              color: "disabled",
            },
          }}
          name="text-feedback"
          max={4}
          value={points}
          precision={1}
          IconContainerComponent={IconContainer}
          highlightSelectedOnly
          onChange={(event, newValue) => {
            if (!!newValue) {
              setPoints(newValue);
            }
          }}
        />
        <Box>{customIcons[points].label}</Box>
      </TableCell>
      <TableCell sx={{ verticalAlign: "top" }}>
        <FormGroup>
          {_.map(feature.examples[1], (f, idx) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={f.checked}
                  onClick={() => onFeatureClick(1, f.key, f.mutex_key)}
                />
              }
              label={f.desc}
              key={idx}
            />
          ))}
        </FormGroup>
      </TableCell>
    </TableRow>
  );
};

function FeatureTable({ selectedTask }) {
  const featureKeys = _.chain(selectedTask.activeFeatures)
    .filter((f) => f.checked)
    .map((f) => f.key)
    .value();

  const featureWeights = _.chain(selectedTask.activeFeatures)
    .filter((f) => f.checked)
    .map((f) => f.weight)
    .value();

  const activeFeatures = _.chain(features)
    .filter((f) => featureKeys.includes(f.key))
    .map(({ fail_examples, pass_examples, ...f }) => ({
      ...f,
      examples: [
        _.map(fail_examples, (item) => ({ ...item, checked: false })),
        _.map(pass_examples, (item) => ({ ...item, checked: false })),
      ],
    }))
    .value();

  const [featurePoints, setFeaturePoints] = useState(
    _.map(activeFeatures, (f) => 2)
  );
  const setPoints = (idx) => (value) => {
    let newFeaturePoints = _.clone(featurePoints);
    newFeaturePoints[idx] = value;
    setFeaturePoints(newFeaturePoints);
  };

  const totalPointsCalculated = computeScore(featureWeights, featurePoints);

  const [totalPoints, setTotalPoints] = useState("");

  /*useEffect(() => {
    let score = computeScore(featureWeights, featurePoints);
    console.log("Calculated new Score:", score);
    setTotalPoints(score);
  }, [featureWeights, featurePoints]);*/

  console.log("activeFeatures:", activeFeatures);

  return (
    <Box>
      <Table size={"small"} sx={{ tableLayout: "auto", width: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Feature</strong>
            </TableCell>
            <TableCell>
              <strong>Negative Examples</strong>
            </TableCell>
            <TableCell>
              <strong>Rating</strong>
            </TableCell>
            <TableCell>
              <strong>Positive Examples</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody id="rubrics_table">
          {_.map(activeFeatures, (feature, idx) => (
            <FeatureTableItem
              key={`${feature.key}-${idx}`}
              defaultFeature={feature}
              points={featurePoints[idx]}
              setPoints={setPoints(idx)}
            />
          ))}
        </TableBody>
      </Table>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography sx={{ mt: "revert" }}>
            {"Calculated Points: " + totalPointsCalculated}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Final points"
            value={totalPoints}
            onChange={(e) => setTotalPoints(e.target.value)}
            type="number"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*", min: "0" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default FeatureTable;
