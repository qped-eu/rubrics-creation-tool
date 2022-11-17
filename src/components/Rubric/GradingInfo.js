import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

function GradingInfo() {
  function handleGraderChange() {}
  function handleCourseYearChange() {}
  function handleCourseRunChange() {}

  const sxStyle = { verticalAlign: "top" };

  return (
    <Grid
      container
      sx={{ border: "1px solid #ddd", backgroundColor: "#f2f2f2" }}
    >
      <Grid xs={4} style={sxStyle}>
        <h2>Grader</h2>
        <input type="text" id="grader_text" onInput={handleGraderChange} />
      </Grid>
      <Grid xs={4} style={sxStyle}>
        <h2>Course year</h2>
        <input
          type="text"
          id="course_year_text"
          onInput={handleCourseYearChange}
        />
        <br />
        <p>
          <i>
            Enter the year in which
            <br />
            the course started with
            <br />
            four digits (e.g., 2022).
          </i>
        </p>
      </Grid>
      <Grid xs={4} style={sxStyle}>
        <h2>Course run</h2>
        <input
          type="text"
          id="course_run_text"
          onInput={handleCourseRunChange}
        />
        <br />
        <p>
          <i>
            If the course runs multiple
            <br />
            times per year, enter the
            <br />
            number of the run.
            <br />
            Otherwise enter 1.
          </i>
        </p>
      </Grid>
    </Grid>
  );
}

export default GradingInfo;
