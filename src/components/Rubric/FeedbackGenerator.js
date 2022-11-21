import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

function FeedbackGenerator() {
  function handleTextChange() {}

  function handleFeedbackButtonClick() {}

  function handleNextStudentButtonClick() {}

  function handleExportButtonClick() {}

  function handleTextAreaClick(feedback) {
    return () => {};
  }

  const pointerStyle = {
    cursor: "pointer",
  };

  const clearPointerStyle = {
    ...pointerStyle,
    clear: "both",
  };

  return (
    <>
      <Grid xs={12}>
        <div
          style={clearPointerStyle}
          onClick={handleFeedbackButtonClick}
          className="buttons"
        >
          Generate Feedback
        </div>
      </Grid>
      <Grid xs={6}>
        <div
          style={pointerStyle}
          onClick={handleNextStudentButtonClick}
          className="buttons"
        >
          Next Student
        </div>
      </Grid>
      <Grid xs={6}>
        <div
          style={pointerStyle}
          onClick={handleExportButtonClick}
          className="buttons"
        >
          Export all feedback for chosen task
        </div>
        Choose a format for exporting (default is JSON):
        <br />
        <select id="export_format">
          <option value="json">JSON-Format</option>
          <option value="csv">CSV-Format</option>
        </select>
      </Grid>
      <Grid xs={6}>
        <h2>Additional Comment</h2>
        <textarea
          id="comment_text"
          cols="80"
          rows="10"
          onChange={handleTextChange}
        ></textarea>
      </Grid>
      <Grid xs={6}>
        <h2>Generated Feedback</h2>
        <textarea
          id="feedback_text"
          cols="80"
          rows="10"
          onClick={handleTextAreaClick("feedback")}
          readOnly=""
        ></textarea>
      </Grid>
    </>
  );
}

export default FeedbackGenerator;
