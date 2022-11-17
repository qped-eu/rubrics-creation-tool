import React from "react";

function TaskGenerator() {
  function handleGenerationClick() {}

  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={handleGenerationClick}
      className="buttons"
    >
      Generate task
    </div>
  );
}

export default TaskGenerator;
