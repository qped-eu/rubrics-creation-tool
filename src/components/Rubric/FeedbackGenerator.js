import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
//import { useLocalStorage } from "usehooks-ts";

function FeedbackGenerator({
  selectedTask,
  setError,
  activeFeatures,
  featurePoints,
  featureWeights,
  score,
}) {
  /*const [feedbackSet, setFeedbackSet] = useLocalStorage(
    "rubric_feedbackSet",
    []
  );*/

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h2>Generated Feedback</h2>
          <textarea
            id="feedback_text"
            cols="80"
            rows="10"
            readOnly=""
          ></textarea>
        </Grid>
        <Grid item xs={6}>
          <h2>Additional Comment</h2>
          <textarea id="comment_text" cols="80" rows="10"></textarea>
        </Grid>
      </Grid>
    </>
  );
}

export default FeedbackGenerator;
