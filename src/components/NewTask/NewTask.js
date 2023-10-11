import { Stepper, Step, StepLabel, Paper, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import Topic from "./Topic";
import { Features } from "./Features";
import ButtonsBox from "./ButtonsBox";
import _ from "lodash";
import GeneralInformation from "./GeneralInformation";
import Overview from "./Overview";
import customTheme from "../../CustomTheme";

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
    <ThemeProvider theme={customTheme}>
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
          </>
          <ButtonsBox
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            steps={steps}
          />
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default NewTask;
