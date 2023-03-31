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
import IconContainer, { customIcons } from "./IconContainer";
import { useReadLocalStorage } from "usehooks-ts";

const FeatureTableItem = ({ points, setPoints, feature, onFeatureClick }) => {
  const showTooltips = useReadLocalStorage("rubric_showTooltips");

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
        <Box>
          {customIcons[points]?.label ?? `Could not find label for ${points}`}
        </Box>
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
      </TableCell>
    </TableRow>
  );
};

export default FeatureTableItem;
