import React from "react";

function Name() {
  return (
    <>
      <h2>Name of the task</h2>
      <input type="text" id="task_name_text" />
      <p>
        <i>must be unique</i>
      </p>
    </>
  );
}

export default Name;
