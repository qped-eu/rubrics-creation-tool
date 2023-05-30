import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
} from "@mui/material";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { useReadLocalStorage, useLocalStorage } from "usehooks-ts";
import { generateFeedbackObject } from "./utils";
import _ from "lodash";

function AssessmentFinal({ setActiveStep, selectedTask }) {
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const grader = useReadLocalStorage("rubric_grader");
  const courseYear = useReadLocalStorage("rubric_course_year");
  const courseRun = useReadLocalStorage("rubric_course_run");
  const [generatedFeedback, setGeneratedFeedback] = useLocalStorage(
    "rubric_generatedFeedback"
  );
  const [feedbackSet, setFeedbackSet] = useLocalStorage(
    "rubric_feedbackSet",
    []
  );

  function checkCourseInfoComplete() {
    if (!grader || grader.length === 0) {
      setError("Grader darf nicht leer sein!");
      return false;
    }
    if (!courseYear || courseYear.length === 0) {
      setError("Course year darf nicht leer sein!");
      return false;
    }
    if (!courseRun || courseRun.length === 0) {
      setError("Course run darf nicht leer sein!");
      return false;
    }
    return true;
  }

  const handleAnotherStudentClicked = () => {
    // 1. save the current feedback in another json object (append to a list of all student assessments)
    setFeedbackSet((arr) => _.concat(arr, generatedFeedback));
    // 2. reset local storage fields from previous assessment
    setGeneratedFeedback(null);
    setActiveStep(0);
  };

  const handleFinishClicked = () => {
    if (checkCourseInfoComplete()) setOpen(true);
  };

  const downloadFile = (data) => {
    // create file in browser
    const fileName = `${selectedTask.name}_${grader}_${courseYear}_${courseRun}`;
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);

    // create "a" HTLM element with href to file
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();

    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  const handleExportJson = () => {
    /*
      - download the JSON-object (list of all student assessments)
    */
    const feedback = generateFeedbackObject(selectedTask);
    downloadFile(feedback);
    handleClose();
  };

  const handleExportCsv = () => {
    /*
      - build the csv file
    */
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleAnotherStudentClicked}
        variant="outlined"
        sx={{ mt: 1, mr: 1 }}
      >
        Assess another Student
      </Button>
      <Button
        onClick={handleFinishClicked}
        variant="contained"
        sx={{ mt: 1, mr: 1 }}
      >
        Finish Session
      </Button>
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
        message={error}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="export-dialog-title"
        aria-describedby="export-dialog-content"
      >
        <DialogTitle id="export-dialog-title">{"Export Options"}</DialogTitle>
        <DialogContent id="export-dialog-content">
          Choose the file format in which you want to export this assessment
          session in. By selecting either of the options the current assessment
          session will exit and a file download starts.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleExportJson}>JSON-Format</Button>
          <Button onClick={handleExportCsv}>CSV-Format</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AssessmentFinal;
