import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import _ from "lodash";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { useLocalStorage } from "../../hooks";

function TaskManager() {
  const [allTasks, setAllTasks] = useLocalStorage("all_tasks", []);
  const [selectedTaskIdx, setSelectedTaskIdx] = useState(0);
  const handleSelectTask = (idx) => () => setSelectedTaskIdx(idx);

  const handleFiles = (acceptedFiles) => {
    let newAllTasks = _.clone(allTasks);
    _.forEach(acceptedFiles, (file) => {
      const reader = new FileReader();
      reader.onerror = () => console.log("Failed to read File");
      reader.onload = () => {
        var dataURL = reader.result;
        var task = JSON.parse(dataURL);
        newAllTasks.push(task);
      };
      reader.readAsText(file);
      setAllTasks(newAllTasks);
    });
  };

  return (
    <>
      <Grid xs={6}>
        <Typography variant="h4">Select Task</Typography>
        <div id="task_select" className="buttons" style={{ width: "90%" }}>
          <div id="selected_task">
            {allTasks.length === 0
              ? "No tasks added"
              : allTasks?.[selectedTaskIdx]?.name}
          </div>
          <ul id="task_list">
            {_.map(allTasks, (task, idx) => (
              <li key={task} onClick={handleSelectTask(idx)}>
                {task.name}
              </li>
            ))}
          </ul>
        </div>
      </Grid>
      <Grid xs={6}>
        <Typography variant="h4">Upload new Task</Typography>
        <div className="buttons" style={{ width: "90%" }}>
          Create a new task by uploading corresponding file.
          <Dropzone onDrop={handleFiles}>
            {({ getRootProps, getInputProps }) => (
              <div id="fileDragOverField" {...getRootProps()}>
                <input {...getInputProps()} type="file" id="input_file" />
                <label>
                  <strong style={{ cursor: "pointer" }}>Choose a file</strong>{" "}
                  or drag it here
                </label>
              </div>
            )}
          </Dropzone>
        </div>
      </Grid>
    </>
  );
}

export default TaskManager;
