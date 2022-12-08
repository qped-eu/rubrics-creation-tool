import React from "react";
import Dropzone from "react-dropzone";
import _ from "lodash";
import { useLocalStorage } from "usehooks-ts";

function TaskUpload({ setError }) {
  const [allTasks, setAllTasks] = useLocalStorage("all_tasks", []);
  const handleFiles = (acceptedFiles) => {
    _.forEach(acceptedFiles, (file) => {
      const reader = new FileReader();
      reader.onerror = () => setError("Failed to read File");
      reader.onload = () => {
        let newAllTasks = _.clone(allTasks);
        var dataURL = reader.result;
        var task = JSON.parse(dataURL);
        if (_.map(allTasks, (task) => task.name).includes(task.name)) {
          setError("A task with the same name has already been uploaded.");
        } else {
          newAllTasks.push(task);
          setAllTasks(newAllTasks);
        }
      };
      reader.readAsText(file);
    });
  };

  return (
    <div
      className="buttons"
      style={{ width: "90%", backgroundColor: "transparent" }}
    >
      <Dropzone onDrop={handleFiles}>
        {({ getRootProps, getInputProps }) => (
          <div id="fileDragOverField" {...getRootProps()}>
            <input {...getInputProps()} type="file" id="input_file" />
            <label>
              <strong style={{ cursor: "pointer" }}>Choose a file</strong> or
              drag it here
            </label>
          </div>
        )}
      </Dropzone>
    </div>
  );
}

export default TaskUpload;
