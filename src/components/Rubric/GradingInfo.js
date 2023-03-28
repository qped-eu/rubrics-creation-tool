import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import MyTextField from "../CustomComponents/MyTextField";

function GradingInfo() {
  const sxStyle = {
    verticalAlign: "top",
  };

  return (
    <Grid item xs={12}>
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
