import {
  Checkbox,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import _ from "lodash";
import { useState } from "react";
import features from "../../../resources/features.json";

const FeatureTableItem = (props) => {
  const { feature, handleClick, handleWeightChange } = props;
  const [weight, setWeight] = useState(feature.weight ?? "1");
  return (
    <TableRow>
      <TableCell>
        <Checkbox checked={feature.checked} onClick={handleClick(feature)} />
      </TableCell>
      <TableCell>
        <Typography sx={{ width: "100%" }}>
          {_.chain(features)
            .filter((f) => f.key === feature.key)
            .map((f) => f.name)
            .head()
            .value()}
        </Typography>
      </TableCell>
      <TableCell>
        <TextField
          value={weight}
          sx={{ width: "100%" }}
          size={"small"}
          type={"number"}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*", min: "1" }}
          onChange={(e) => {
            handleWeightChange(feature, e.target.value);
            setWeight(e.target.value);
          }}
        />
      </TableCell>
    </TableRow>
  );
};

export default FeatureTableItem;
