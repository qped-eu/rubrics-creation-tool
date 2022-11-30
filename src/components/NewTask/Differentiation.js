import { MenuItem, Select } from "@mui/material";
import _ from "lodash";
import React, { useState } from "react";

function Differentiation() {
  const options = ["Extra support", "Regular", "Challenging"];
  const [value, setValue] = useState(1);
  return (
    <Select value={value} id="differentiation_of_background_text">
      {_.map(options, (opt, idx) => (
        <MenuItem value={idx}>{opt}</MenuItem>
      ))}
    </Select>
  );
}

export default Differentiation;
