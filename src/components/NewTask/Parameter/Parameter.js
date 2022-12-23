import { Typography, Box } from "@mui/material";
import _ from "lodash";
import React from "react";

function Parameter(props) {
  const { title, value, sx } = props;
  if (!_.isArray(value)) {
    return (
      <Typography sx={sx}>
        <strong>{`${title}: `}</strong>
        {value}
      </Typography>
    );
  }
  return (
    <Box sx={sx}>
      <Typography key={title}>
        <strong>{`${title}:`}</strong>
      </Typography>
      {_.map(value, (v, i) => (
        <Typography key={`${title}-${i}`}>{`- ${v}`}</Typography>
      ))}
    </Box>
  );
}

export default Parameter;
