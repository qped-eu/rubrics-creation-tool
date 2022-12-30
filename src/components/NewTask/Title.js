import { Typography } from "@mui/material";

function Title(props) {
  return (
    <Typography variant="h6">
      <strong>{props.children}</strong>
    </Typography>
  );
}

export default Title;
