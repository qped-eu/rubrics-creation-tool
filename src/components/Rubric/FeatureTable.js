import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import FeatureTableItem from "./FeatureTableItem";
import _ from "lodash";
import features from "../../resources/features.json";
import { computeScore } from "./utils";
import { useLocalStorage } from "usehooks-ts";
import TooltipsControl from "./TooltipsControl";

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

  const [featurePoints, setFeaturePoints] = useLocalStorage(
    "rubric_featurePoints",
    _.map(activeFeatures, (f) => 2)
  );

  const setPoints = (idx) => (value) => {
    let newFeaturePoints = _.clone(featurePoints);
    newFeaturePoints[idx] = value;
    setFeaturePoints(newFeaturePoints);
  };

  const totalPointsCalculated = computeScore(featureWeights, featurePoints);

  const [totalPoints, setTotalPoints] = useLocalStorage(
    "rubric_totalPoints",
    ""
  );

  console.log("activeFeatures:", activeFeatures);

  return (
    <Box sx={{ width: "100%" }}>
      <TooltipsControl />
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
          <TextField
            label="Final points"
            value={totalPoints}
            onChange={(e) => setTotalPoints(e.target.value)}
            type="number"
            inputProps={{ min: "0,0" }}
          />
          <Button
            sx={{ verticalAlign: "bottom" }}
            onClick={() => {
              setTotalPoints(totalPointsCalculated);
            }}
            className="buttons"
          >
            Apply Computed
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ mt: "revert" }}>
            {"Calculated Points: "}
            <strong>{totalPointsCalculated}</strong>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ mt: "revert" }}>
            {"Maximum Points: "}
            <strong>{selectedTask.maxPoints}</strong>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FeatureTable;
