import { Typography } from "@mui/material";
import React from "react";
import MyTextField from "../CustomComponents/MyTextField";

function TaskDescription() {
  return (
    <>
      <Typography>
        <strong>Task Description:</strong>
      </Typography>
      <MyTextField
        storageKey={"new_task_description"}
        multiline
        id="task_description"
        cols="80"
        rows="10"
        style={{ width: "100%", marginTop: "16px" }}
      ></MyTextField>
    </>
  );
}

export default TaskDescription;