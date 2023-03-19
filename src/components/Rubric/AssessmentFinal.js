import { Button, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import MyTextField from "../CustomComponents/MyTextField";
import { useReadLocalStorage } from "usehooks-ts";

function AssessmentFinal({setActiveStep}) {
  const [open, setOpen] = useState(false);
  const handleAnotherStudentClicked = () => {
    setActiveStep(0);
  }

  const handleFinishClicked = () => {
    /* TODO:
      - öffne Dialog zum auswählen von csv oder json
    */
    setOpen(true);
  }

  const handleExportJson = () => {

  }

  const handleExportCsv = () => {

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