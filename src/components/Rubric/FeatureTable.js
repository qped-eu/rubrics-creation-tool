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
import TooltipsControl from "./TooltipsControl";
import MyTextField from "./../CustomComponents/MyTextField";
import { computePoints } from "./utils";
import { useLocalStorage } from "usehooks-ts";

function FeatureTable({
  featurePoints,
  setPoints,
  setTotalPoints,
  totalPointsCalculated,
  maxPoints,
}) {
  const [features, setFeatures] = useLocalStorage("rubric_features", []);

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
          {_.map(features, (feature, idx) => {
            const setFeature = (f) =>
              setFeatures((oldFeatures) => {
                var index = _.findIndex(
                  oldFeatures,
                  (f) => f.key === feature.key
                );
                if (index === -1) {
                  return [...oldFeatures, f];
                }
                return [
                  ...oldFeatures.slice(0, index),
                  f,
                  ...oldFeatures.slice(index + 1),
                ];
              });

            console.log("Feature looks like", feature);

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
                    item.mutex_key === mutexKey
                      ? { ...item, checked: false }
                      : item
                );
              }

              newFeatureState.points = Math.max(
                Math.min(computePoints(feature), 4),
                1
              );

              setFeature(newFeatureState);
            };

            if (!feature) {
              return null;
            }

            return (
              <FeatureTableItem
                key={`${feature.key}-${idx}`}
                points={featurePoints[idx]}
                setPoints={setPoints(idx)}
                feature={feature}
                onFeatureClick={onFeatureClick}
              />
            );
          })}
        </TableBody>
      </Table>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <MyTextField
            label="Final points"
            storageKey={"rubric_finalPoints"}
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
            <strong>{maxPoints}</strong>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FeatureTable;
