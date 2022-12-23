import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import _ from "lodash";
import FeatureTableItem from "./FeatureTableItem";

const FeatureTable = ({
  sx,
  title,
  features,
  handleToggle,
  handleToggleAll,
  handleWeightChange,
}) => {
  const allChecked = _.reduce(
    features,
    (acc, feature) => acc && feature.checked,
    true
  );
  return (
    <Table size={"small"} sx={{ tableLayout: "auto", width: "100%", ...sx }}>
      <TableHead>
        <TableRow>
          <TableCell>
            <Checkbox
              checked={allChecked}
              onClick={handleToggleAll(!allChecked)}
            />
          </TableCell>
          <TableCell colSpan={2}>
            <strong>{title}</strong>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ width: "15%" }}>Include</TableCell>
          <TableCell sx={{ width: "55%" }}>Feature</TableCell>
          <TableCell sx={{ width: "30%", minWidth: "60px" }}>Weight</TableCell>
        </TableRow>
      </TableHead>
      <TableBody id="rubrics_table">
        {_.map(features, (feature, idx) => (
          <FeatureTableItem
            key={`${feature.key}-${idx}`}
            feature={feature}
            handleClick={handleToggle}
            handleWeightChange={handleWeightChange}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default FeatureTable;
