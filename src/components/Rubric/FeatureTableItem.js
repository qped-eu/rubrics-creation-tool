import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  TableCell,
  TableRow,
  Rating,
} from "@mui/material";
import { Box } from "@mui/system";
import ConditonalTooltip from "./ConditionalTooltip";
import _ from "lodash";
import { computePoints } from "./utils";
import IconContainer, { customIcons } from "./IconContainer";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";

const FeatureTableItem = ({ defaultFeature, points, setPoints }) => {
  const [feature, setFeature] = useLocalStorage(
    `rubric_feature_${defaultFeature.key}`,
    defaultFeature
  );

  const showTooltips = useReadLocalStorage("rubric_showTooltips");

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
              label={
                <ConditonalTooltip
                  show={showTooltips}
                  tooltipText={f.desc_long}
                >
                  {f.desc}
                </ConditonalTooltip>
              }
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

export default FeatureTableItem;
