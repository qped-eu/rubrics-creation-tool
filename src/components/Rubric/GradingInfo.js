import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useLocalStorage } from "usehooks-ts";
import { Typography } from "@mui/material";
import MyTextField from "../CustomComponents/MyTextField";

function GradingInfo() {
  // const [grader, setGrader] = useLocalStorage("grader", "");
  // const [courseYear, setCourseYear] = useLocalStorage("courseYear", "");
  // const [courseRun, setCourseRun] = useLocalStorage("courseRun", "");

  // const handleGraderChange = (event) => setGrader(event.target.value);
  // const handleCourseYearChange = (event) => setCourseYear(event.target.value);
  // const handleCourseRunChange = (event) => setCourseRun(event.target.value);

  const sxStyle = {
    verticalAlign: "top",
  };

  return (
    <Grid
      item
      xs={12}
      sx={{
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
      }}
    >
      <Grid container>
        <Grid item xs={4} style={sxStyle}>
          <Typography variant="h4">Grader</Typography>
          <MyTextField
            defaultValue={""}
            storageKey={"rubric_grader"}
            id="grader"
          />
        </Grid>
        <Grid item xs={4} style={sxStyle}>
          <Typography variant="h4">Course year</Typography>
          <MyTextField
            defaultValue={""}
            storageKey={"rubric_course_year"}
            id="course_year"
            inputProps={{ maxLength: 4 }}
          />
        </Grid>
        <Grid item xs={4} style={sxStyle}>
          <Typography variant="h4">Course run</Typography>
          <MyTextField
            defaultValue={""}
            storageKey={"rubric_course_run"}
            type="number"
            id="course_run"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GradingInfo;
