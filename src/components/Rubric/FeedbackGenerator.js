import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import MyTextField from "../CustomComponents/MyTextField";
import { TextField } from "@mui/material";
import { useLocalStorage } from "usehooks-ts";

function FeedbackGenerator({
  selectedTask,
  setError,
  activeFeatures,
  featurePoints,
  featureWeights,
  score,
}) {
  const [value, setValue] = useLocalStorage("rubric_generatedFeedback", "");
  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h2>Generated Feedback</h2>
          <TextField
            value={JSON.stringify(value, null, 2)}
            onChange={handleChange}
            multiline
            id="additional_comments"
            cols="80"
            rows="10"
            style={{ width: "100%" }}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <h2>Additional Comment</h2>
          <MyTextField
            storageKey={"rubric_additionalComment"}
            multiline
            id="additional_comments"
            cols="80"
            rows="10"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default FeedbackGenerator;
