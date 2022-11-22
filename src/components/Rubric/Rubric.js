import React, { useState } from "react";
import "../style.css";
import FeatureTable from "./FeatureTable";
import FeedbackGenerator from "./FeedbackGenerator";
import GradingInfo from "./GradingInfo";
import Grid from "@mui/material/Unstable_Grid2";
import Snackbar from "@mui/material/Snackbar";
import TaskManager from "./TaskManager";
import { useLocalStorage } from "../../hooks";
import _ from "lodash";

function Rubric() {
  const [error, setError] = useState(null);
  const [allTasks, setAllTasks] = useLocalStorage("all_tasks", []);
  const [selectedTaskIdx, setSelectedTaskIdx] = useState(0);
  const handleSelectTask = (idx) => () => setSelectedTaskIdx(idx);

  const handleFiles = (acceptedFiles) => {
    _.forEach(acceptedFiles, (file) => {
      const reader = new FileReader();
      reader.onerror = () => setError("Failed to read File");
      reader.onload = () => {
        let newAllTasks = _.clone(allTasks);
        var dataURL = reader.result;
        var task = JSON.parse(dataURL);
        newAllTasks.push(task);
        setAllTasks(newAllTasks);
      };
      reader.readAsText(file);
    });
  };
  return (
    <Grid container spacing={2} style={{ margin: "8px" }}>
      <TaskManager
        allTasks={allTasks}
        selectedTaskIdx={selectedTaskIdx}
        handleSelectTask={handleSelectTask}
        handleFiles={handleFiles}
      />
      <GradingInfo />
      <FeatureTable />
      <FeedbackGenerator
        selectedTask={allTasks?.[selectedTaskIdx]}
        setError={setError}
      />
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
