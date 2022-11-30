import {
  Box,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import _ from "lodash";
import { useState } from "react";

function Deliverables() {
  const [value, setValue] = useState([]);
  const options = [
    "IO1 – TILEd slides",
    "IO1 - TILEd assignment",
    "IO2 – PG API",
    "IO2 – PG IPI",
    "O2 – PG Implementation",
    "IO3 – syntax, semantics",
    "IO3 – style",
    "IO3 – testing",
    "IO3 – class design",
  ];
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const handleChange = ({ target: { value } }) => {
    setValue(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id="demo-multiple-deliverables-label">
        Deliverables
      </InputLabel>
      <Select
        labelId="demo-multiple-deliverables-label"
        id="demo-multiple-deliverables"
        multiple
        value={value}
        onChange={handleChange}
        input={
          <OutlinedInput
            id="select-multiple-deliverables"
            label="Deliverables"
          />
        }
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((val) => (
              <Chip key={val} label={val} />
            ))}
          </Box>
        )}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
              width: 250,
            },
          },
        }}
      >
        {_.map(options, (option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Deliverables;
