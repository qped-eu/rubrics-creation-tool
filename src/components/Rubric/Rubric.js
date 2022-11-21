import React from "react";
import "../style.css";
import FeatureTable from "./FeatureTable";
import FeedbackGenerator from "./FeedbackGenerator";
import GradingInfo from "./GradingInfo";
import Grid from "@mui/material/Unstable_Grid2";
import Snackbar from "@mui/material/Snackbar";
import Points from "./Points";
import TaskManager from "./TaskManager";

function Rubric() {
  return (
    <Grid container spacing={2} style={{ margin: "8px" }}>
      <TaskManager />
      <Grid xs={12}>
        <GradingInfo />
      </Grid>
      <Grid xs={12}>
        <FeatureTable />
      </Grid>
      <Grid xs={12}>
        <Points />
      </Grid>
      <FeedbackGenerator />
    </Grid>
  );
}

export default Rubric;
