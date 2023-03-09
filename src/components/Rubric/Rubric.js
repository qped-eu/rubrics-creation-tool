import React, { useState } from "react";
import "../style.css";
import FeatureTable from "./FeatureTable";
import FeedbackGenerator from "./FeedbackGenerator";
import GradingInfo from "./GradingInfo";
import Grid from "@mui/material/Unstable_Grid2";
import Snackbar from "@mui/material/Snackbar";
import { useReadLocalStorage } from "usehooks-ts";
import _ from "lodash";
import { useLoaderData } from "react-router-dom";

function Rubric() {
  const [error, setError] = useState(null);
  const allTasks = useReadLocalStorage("all_tasks");
  const taskName = useLoaderData();
  const selectedTask = _.find(allTasks, (task) => task.name === taskName);
  return (
    <Grid container spacing={2} style={{ margin: "8px" }}>
      <GradingInfo />
      <FeatureTable selectedTask={selectedTask} />
      <FeedbackGenerator selectedTask={selectedTask} setError={setError} />
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
        message={error}
      />
    </Grid>
  );
}

export default Rubric;
