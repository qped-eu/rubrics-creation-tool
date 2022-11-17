import React, { useState } from "react";
import "../style.css";
import TaskFeatures from "./TaskFeatures";
import TaskGenerator from "./TaskGenerator";
import TaskInfo from "./TaskInfo";
import Grid from "@mui/material/Unstable_Grid2";
import Snackbar from "@mui/material/Snackbar";

function NewTask() {
  const [open, setOpen] = useState(false);
  function handleClose() {}

  return (
    <Grid container spacing={2} sx={{ m: "8px" }}>
      <Grid xs={7}>
        <TaskInfo />
      </Grid>
      <Grid xs={5}>
        <TaskFeatures />
      </Grid>
      <br />
      <Grid xs={12}>
        <TaskGenerator />
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Snackbar says hello"
      />
    </Grid>
  );
}

export default NewTask;
