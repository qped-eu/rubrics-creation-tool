import { Button, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { useReadLocalStorage } from "usehooks-ts";

function AssessmentFinal({setActiveStep, setError}) {
  const [open, setOpen] = useState(false);
  const grader = useReadLocalStorage("rubric_grader");
  const courseYear = useReadLocalStorage("rubric_course_year");
  const courseRun = useReadLocalStorage("rubric_course_run");
  
  function checkCourseInfoComplete() {
    if (!courseRun || courseRun.length === 0 ||
      !courseYear || courseYear.length === 0 ||
      !grader || grader.length === 0) {
        setError("Please enter missing course information")
        return false
      }
      
      return true;
    }
    
      const handleAnotherStudentClicked = () => {
        /*
        1. save the current feedback in another json object (append to a list of all student assessments)
        2. reset local storage fields from previous assessment
        */
        setActiveStep(0);
      }
    
  const handleFinishClicked = () => {
    if (checkCourseInfoComplete()) setOpen(true)
  }

  const handleExportJson = () => {
    /*
      - download the JSON-object (list of all student assessments)
    */
    handleClose()
  }

  const handleExportCsv = () => {
    /*
      - build the csv file
    */
    handleClose()
  }

  const handleClose = () => {
    setOpen(false);
  }

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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="export-dialog-title"
        aria-describedby="export-dialog-content"
      >
        <DialogTitle id="export-dialog-title">
          {"Export Options"}
        </DialogTitle>
        <DialogContent id="export-dialog-content">
          Choose the file format in which you want to export this assessment session in.
          By selecting either of the options the current assessment session will exit and a file download starts.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleExportJson}>
            JSON-Format
          </Button>
          <Button onClick={handleExportCsv}>
            CSV-Format
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AssessmentFinal;