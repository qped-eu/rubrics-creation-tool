import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { getFromLocalStorage } from "../../utils";

function FeedbackGenerator({ selectedTask, setError }) {
  function handleTextChange() {}

  function handleFeedbackButtonClick() {
    const grader = getFromLocalStorage("grader");
    const courseYear = getFromLocalStorage("courseYear");
    const courseRun = getFromLocalStorage("courseRun");

    if (!courseRun || courseRun.length === 0) {
      setError("Please enter the current run of the course.");
    }

    if (!courseYear || courseYear.length === 0) {
      setError("Please enter the start year of the course.");
    }

    if (!grader || grader.length === 0) {
      setError("Please enter your name in the grader field.");
    }

    if (!selectedTask) {
      setError("Please select a task before trying to generate feedback.");
    }
  }

  function handleNextStudentButtonClick() {}

  function handleExportButtonClick() {
    if (!selectedTask) {
      setError("Please select a task before trying to export one.");
    }

    // Exportieren als JSON oder CSV
  }

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
