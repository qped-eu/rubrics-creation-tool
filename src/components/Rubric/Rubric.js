import React, { useState } from "react";
import "../style.css";
import FeatureTable from "./FeatureTable";
import FeedbackGenerator from "./FeedbackGenerator";
import GradingInfo from "./GradingInfo";
import Grid from "@mui/material/Unstable_Grid2";
import Snackbar from "@mui/material/Snackbar";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import { Button, Typography } from "@mui/material";
import AssessmentFinal from "./AssessmentFinal";

import { useReadLocalStorage } from "usehooks-ts";
import _ from "lodash";
import { useLoaderData } from "react-router-dom";

function Rubric() {
  const [error, setError] = useState(null);
  const allTasks = useReadLocalStorage("all_tasks");
  const taskName = useLoaderData();
  const selectedTask = _.find(allTasks, (task) => task.name === taskName);

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(0);
  };

  // 3 Steps:
  // First: Assess the features for the current student and press "Generate Feedback"
  // Second: Verify the Feedback and add optional comment and press
  // Third: Export Feedback or move to another Student
  const steps = [
    {
      label: "Assess Features",
      description:
        "Assess a student based on the requirements defined within the selected task. Toogle the tool tips for further information.",
      buttonText: "Generate Feedback",
    },
    {
      label: "Verify Assessment",
      description:
        "Verify the assessment completed in step 1. You can also add additional comments or go back to step 1 in case changes need to be made." +
        "This saves the assessment to the browser storage. You can export the session at a later point in time in step 3.",
      buttonText: "Verify",
    },
    {
      label: "Save Changes",
      description:
        "If you wish to assess another student, the previously assessed task is saved in your local " +
        "browser storage. You can assess multiple students in one session and export a list of all students assessed in the current session by " +
        "selecting 'Finish Session' and choosing a file format you wish to download.",
    },
  ];

  const StepperContent = () => {
    switch (activeStep) {
      case 0:
        return <FeatureTable selectedTask={selectedTask} />;
      case 1:
        return (
          <FeedbackGenerator selectedTask={selectedTask} setError={setError} />
        );
      default:
        return (
          <AssessmentFinal setActiveStep={setActiveStep} setError={setError} />
        );
    }
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        m: "8px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
      }}
    >
      <GradingInfo />
      <Grid item xs={12}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent transitionDuration={0}>
                <Typography>{step.description}</Typography>
                <StepperContent />
                {activeStep !== steps.length - 1 && (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {step.buttonText}
                  </Button>
                )}
                {activeStep === 1 && (
                  <Button
                    variant="outlined"
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                )}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
        message={error}
      />
    </Grid>
  );
}

export default Rubric;
