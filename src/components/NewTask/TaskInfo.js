import React from "react";
import Course from "./Course";
import MaxPoints from "./MaxPoints";
import Name from "./Name";
import Week from "./Week";
import Deliverables from "./Deliverables";
import Topic from "./Topic";
import Differentiation from "./Differentiation";
import AdditionalComments from "./AdditionalComments";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";

function TaskInfo() {
  return (
    <Grid container spacing={2}>
      <Grid xs={4}>
        <Typography variant="h6">Course</Typography>
      </Grid>
      <Grid xs={4}>
        <Typography variant="h6">Name of the task</Typography>
      </Grid>
      <Grid xs={4}>
        <Typography variant="h6">Week of task</Typography>
      </Grid>
      <Grid xs={4}>
        <Course />
      </Grid>
      <Grid xs={4}>
        <Name />
      </Grid>
      <Grid xs={4}>
        <Week />
      </Grid>
      <Grid xs={4}>
        <Typography variant="h6">Max Points</Typography>
      </Grid>
      <Grid xs={4}>
        <Typography variant="h6">
          Differentiation of background (TU/e)
        </Typography>
      </Grid>
      <Grid xs={4}>
        <Typography variant="h6">QPED deliverables</Typography>
      </Grid>
      <Grid xs={4}>
        <MaxPoints />
      </Grid>
      <Grid xs={4}>
        <Differentiation />
      </Grid>
      <Grid xs={4}>
        <Deliverables />
      </Grid>
      <Grid xs={12}>
        <Topic />
      </Grid>
      <Grid xs={12}>
        <AdditionalComments />
      </Grid>
    </Grid>
  );
}

export default TaskInfo;
