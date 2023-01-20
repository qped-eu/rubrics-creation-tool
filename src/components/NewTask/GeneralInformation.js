import React from "react";
import { Grid, Divider } from "@mui/material";
import Course from "./Course";
import Differentiation from "./Differentiation";
import Deliverables from "./Deliverables";
import MyTextField from "./MyTextField";
import Title from "./Title";
import TaskDescription from "./TaskDescription";

function GeneralInformation(props) {
  return (
    <Grid container spacing={2} sx={props.sx}>
      <Grid item xs={4}>
        <Title>Course</Title>
      </Grid>
      <Grid item xs={4}>
        <Title>Name of the task</Title>
      </Grid>
      <Grid item xs={4}>
        <Title>Week of task</Title>
      </Grid>
      <Grid item xs={4}>
        <Course />
      </Grid>
      <Grid item xs={4}>
        <MyTextField
          defaultValue={""}
          storageKey={"new_task_name"}
          placeholder={"enter unique name"}
          id="task_name"
        />
      </Grid>
      <Grid item xs={4}>
        <MyTextField
          defaultValue={"1"}
          storageKey={"new_task_week"}
          type="number"
          id="week_of_task"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*", min: "1" }}
        />
      </Grid>
      <Grid item xs={4}>
        <Title>Max Points</Title>
      </Grid>
      <Grid item xs={4}>
        <Title>Differentiation of background (TU/e)</Title>
      </Grid>
      <Grid item xs={4}>
        <Title>QPED deliverables</Title>
      </Grid>
      <Grid item xs={4}>
        <MyTextField
          defaultValue={"0"}
          storageKey={"new_task_maxPoints"}
          type="number"
          id="max_points"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*", min: "0" }}
        />
      </Grid>
      <Grid item xs={4}>
        <Differentiation />
      </Grid>
      <Grid item xs={4}>
        <Deliverables />
      </Grid>
      <Grid item xs={12}> 
        <Divider orientation="horizontal" flexItem/>
      </Grid>
      <Grid item xs={12}>
        <TaskDescription />
      </Grid>
    </Grid>
  );
}

export default GeneralInformation;
