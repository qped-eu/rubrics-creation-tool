import React from "react";
import "../style.css";
import FeatureTable from "./FeatureTable";
import FeedbackGenerator from "./FeedbackGenerator";
import GradingInfo from "./GradingInfo";
import SelectTask from "./SelectTask";
import UploadTask from "./UploadTask";
import Grid from "@mui/material/Unstable_Grid2";
import Snackbar from "@mui/material/Snackbar";
import Points from "./Points";

function Rubric() {
  return (
    <Grid container spacing={2} style={{ margin: "8px" }}>
      <Grid xs={6}>
        <SelectTask />
      </Grid>
      <Grid xs={6}>
        <UploadTask />
      </Grid>
      <Grid xs={12}>
        <GradingInfo />
      </Grid>
      <Grid xs={12}>
        <FeatureTable />
      </Grid>
      <Grid xs={12}>
        <Points />
      </Grid>
      <Grid xs={12}>
        <FeedbackGenerator />
      </Grid>
    </Grid>
  );
}

export default Rubric;
