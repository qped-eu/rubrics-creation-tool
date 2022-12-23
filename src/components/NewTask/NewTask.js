import { Stepper, Step, StepLabel, Button, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import Topic from "./Topic";
import { Features } from "./Features";
import _ from "lodash";
import GeneralInformation from "./GeneralInformation";
import Overview from "./Overview";

const steps = [
  "General information",
  "Choose topic",
  "Include Features",
  "Overview",
];

function NewTask() {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeStep]);

  const handleNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleReset = () => {};

  const handleGenerateFeedback = () => {};

  const StepperContent = () => {
    switch (activeStep) {
      case 0:
        return <GeneralInformation sx={{ margin: "auto", width: "100%" }} />;
      case 1:
        return <Topic style={{ margin: "auto", width: "100%" }} />;
      case 2:
        return <Features style={{ margin: "auto", width: "100%" }} />;
      default:
        return <Overview sx={{ margin: "auto", width: "100%" }} />;
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Paper sx={{ p: 2 }}>
        <Stepper activeStep={activeStep}>
          {_.map(steps, (label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          <Box sx={{ mt: 2 }}>
            <StepperContent />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {activeStep === steps.length - 1 && (
              <Button color="inherit" onClick={handleReset} sx={{ mr: 1 }}>
                Reset
              </Button>
            )}

            <Button
              onClick={
                activeStep === steps.length - 1
                  ? handleGenerateFeedback
                  : handleNext
              }
            >
              {activeStep === steps.length - 1 ? "Generate Feedback" : "Next"}
            </Button>
          </Box>
        </>
      </Paper>
    </Box>
  );
}

export default NewTask;
