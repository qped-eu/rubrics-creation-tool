import { Typography } from "@mui/material";
import React from "react";
import MyTextField from "../CustomComponents/MyTextField";

function AdditionalComments() {
  return (
    <>
      <Typography>
        <strong>Additional Comments:</strong>
      </Typography>
      <MyTextField
        storageKey={"new_task_additionalComments"}
        multiline
        id="additional_comments"
        cols="80"
        rows="10"
        style={{ width: "100%", marginTop: "16px" }}
      ></MyTextField>
    </>
  );
}

export default AdditionalComments;
