import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useLocalStorage } from "usehooks-ts";
import { TextField, Typography } from "@mui/material";

function GradingInfo() {
  const [grader, setGrader] = useLocalStorage("grader", "");
  const [courseYear, setCourseYear] = useLocalStorage("courseYear", "");
  const [courseRun, setCourseRun] = useLocalStorage("courseRun", "");

  const handleGraderChange = (event) => setGrader(event.target.value);
  const handleCourseYearChange = (event) => setCourseYear(event.target.value);
  const handleCourseRunChange = (event) => setCourseRun(event.target.value);

  const sxStyle = {
    verticalAlign: "top",
  };

  return (
    <Grid
      item
      xs={12}
      sx={{ border: "1px solid #ddd", backgroundColor: "#f2f2f2" }}
    >
      <Grid container>
        <Grid item xs={4} style={sxStyle}>
          <Typography variant="h4">Grader</Typography>
          <TextField value={grader} onInput={handleGraderChange} />
        </Grid>
        <Grid item xs={4} style={sxStyle}>
          <Typography variant="h4">Course year</Typography>
          <TextField value={courseYear} onInput={handleCourseYearChange} />
          <Typography>
            <br />
            <i>
              Enter the year in which
              <br />
              the course started with
              <br />
              four digits (e.g., 2022).
            </i>
          </Typography>
        </Grid>
        <Grid item xs={4} style={sxStyle}>
          <Typography variant="h4">Course run</Typography>
          <TextField value={courseRun} onInput={handleCourseRunChange} />
          <Typography>
            <br />
            <i>
              If the course runs multiple
              <br />
              times per year, enter the
              <br />
              number of the run.
              <br />
              Otherwise enter 1.
            </i>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GradingInfo;
