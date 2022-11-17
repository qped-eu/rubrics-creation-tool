import React from "react";

function Topic() {
  return (
    <>
      <h2>Main Topic (IO-1 Blueprint)</h2>{" "}
      <input type="text" id="task_blueprint_text" style={{ display: "none" }} />
      <div>TODO: LIBRARY FOR CHOOSING TOPIC</div>
      <p>
        Scroll to view all concepts. You can browse throuugh the sub concepts
        hierarchically.
      </p>
      <p>
        Start typing in the search field to search the concepts. This will only
        show tags containing the search term incluing all super concepts.
      </p>
    </>
  );
}

export default Topic;
