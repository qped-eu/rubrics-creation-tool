import { MenuItem, Select, Typography } from "@mui/material";
import _ from "lodash";
import React, { useState } from "react";

function Course() {
  const options = [
    "NHL - Java 1",
    "NHL - Python",
    "OUNL - IB0902",
    "OUNL – IB1502",
    "UMR - OOP",
    "UOC - DS",
    "TU/e - 2IP90",
    "TU/e - 2IPC0",
  ];

  const [value, setValue] = useState(options[0]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <>
      <Typography variant="h4">Course</Typography>
      <Select
        value={value}
        sx={{ mt: 2 }}
        inputProps={{ "aria-label": "Without label" }}
        onChange={handleChange}
      >
        {_.map(options, (option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </Select>
    </>
  );
}

export default Course;
