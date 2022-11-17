import React from "react";
import _ from "lodash";

function SelectTask() {
  const tasks = ["test_task"];
  const selectedTask = 0;

  function setTask(index) {
    console.log("Settings task", index);
  }

  return (
    <>
      <h2>Select Task</h2>
      <div id="task_select" className="buttons" style={{ width: "90%" }}>
        <div id="selected_task">{tasks[selectedTask]}</div>
        <ul id="task_list">
          {_.map(tasks, (task, idx) => (
            <li key={task} onClick={() => setTask(idx)}>
              {task}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SelectTask;
