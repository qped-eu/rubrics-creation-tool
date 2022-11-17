import React from "react";

function UploadTask() {
  function handleFiles() {
    console.log("Handling files");
  }

  return (
    <>
      <h2>Upload new Task</h2>
      <div className="buttons" style={{ width: "90%" }}>
        Create a new task by uploading corresponding file.
        <div id="fileDragOverField">
          <input type="file" id="input_file" onChange={handleFiles} />
          <label /*for="input_file"*/>
            <strong style={{ cursor: "pointer" }}>Choose a file</strong> or drag
            it here
          </label>
        </div>
      </div>
    </>
  );
}

export default UploadTask;
