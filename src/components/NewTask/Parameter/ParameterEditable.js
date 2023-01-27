import { Stack } from "@mui/system";
import { IconButton, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { Check } from "@mui/icons-material";

function ParameterEditable(props) {
  const { title, value, sx, mode, handleUpdateValue } = props;
  const [newValue, setNewValue] = useState(value);
  const handleChange = ({ target: { value } }) => setNewValue(value);
  if (mode === "edit") {
    return (
      <Stack>
        <Typography sx={sx}>
          <strong>{`${title}: `}</strong>
        </Typography>
        <Stack direction={"row"}>
          <TextField value={newValue} onChange={handleChange} />
          <IconButton onClick={handleUpdateValue(newValue)}>
            <Check />
          </IconButton>
        </Stack>
      </Stack>
    );
  }
  return (
    <Typography sx={sx}>
      <strong>{`${title}: `}</strong>
      {value}
    </Typography>
  );
}

export default ParameterEditable;
