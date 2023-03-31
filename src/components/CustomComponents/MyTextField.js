import { TextField } from "@mui/material";
import React from "react";
import { useLocalStorage } from "usehooks-ts";

function MyTextField(props) {
  const { storageKey, defaultValue, ...textFieldProps } = props;
  const [value, setValue] = useLocalStorage(storageKey, defaultValue ?? "");
  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };
  return (
    <TextField value={value} onChange={handleChange} {...textFieldProps} />
  );
}

export default MyTextField;
