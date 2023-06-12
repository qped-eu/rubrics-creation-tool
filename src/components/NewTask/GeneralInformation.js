import React from "react";
import { Grid, Divider } from "@mui/material";
import Course from "./Course";
import Differentiation from "./Differentiation";
import Deliverables from "./Deliverables";
import MyTextField from "../CustomComponents/MyTextField";
import Title from "./Title";
import TaskDescription from "./TaskDescription";
import _ from "lodash";
import { useReadLocalStorage } from "usehooks-ts";

function GeneralInformation(props) {
  const max_points = useReadLocalStorage("new_task_maxPoints") ?? "0";
  const week = useReadLocalStorage("new_task_week") ?? "1";
  const name = useReadLocalStorage("new_task_name") ?? "";
  const allTasks = useReadLocalStorage("all_tasks") ?? [];
  let nameProps = {
    error: false,
    label: "",
  };
let max_pointsProps = {
error: false,
label: "",
};
let weekProps = {
error: false,
label: "",
};

  if (name === "") {
    nameProps.error = true;
    nameProps.label = "Name is empty";
  } else if (_.map(allTasks, (x) => x.name).includes(name)) {
    nameProps.error = true;
    nameProps.label = "Name is not unique";
  }

if (max_points === "") {
    max_pointsProps.error = true;
    max_pointsProps.label = "Max Points is empty";
  } 
if (max_points === "0") {
    max_pointsProps.error = true;
    max_pointsProps.label = "Max Points can't be 0";
  } 

if (week === "") {
    weekProps.error = true;
    weekProps.label = "Week is empty";
  }
if (week === "0") {
    weekProps.error = true;
    weekProps.label = "Week can't be 0";
  }

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
          {...nameProps}
          defaultValue={""}
          storageKey={"new_task_name"}
          placeholder={"enter unique name"}
          id="task_name"
        />
      </Grid>
      <Grid item xs={4}>
        <MyTextField
          {...weekProps}
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
          {...max_pointsProps}
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
        <Divider orientation="horizontal" flexItem />
      </Grid>
      <Grid item xs={12}>
        <TaskDescription />
      </Grid>
    </Grid>
  );
}

export default GeneralInformation;
