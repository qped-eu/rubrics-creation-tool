import { Stepper, Step, StepLabel, Button, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
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
  //read data from localstorage
  const name = useReadLocalStorage("new_task_name");
  const courseIdx = useReadLocalStorage("new_task_courseIdx");
  const week = useReadLocalStorage("new_task_week");
  const maxPoints = useReadLocalStorage("new_task_maxPoints");
  const differentiationIdx = useReadLocalStorage("new_task_differentiationIdx");
  const topic = useReadLocalStorage("new_task_topic");
  const deliverables = useReadLocalStorage("new_task_deliverables");
  const activeFeatures = useReadLocalStorage("new_task_features");
  const [allTasks, setAllTasks] = useLocalStorage("all_tasks", []);

  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeStep]);

  const handleNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleReset = () => {};

  const handleAddToList = () => {
    const taskToAdd = generateTaskObject();
    allTasks.push(taskToAdd);

    setAllTasks(allTasks);
  };

  const handleGenerateJSON = () => {
    const exportJSON = JSON.stringify(generateTaskObject());

    downloadTask(exportJSON);
  };

  const downloadTask = (taskString) => {
    // create file in browser
    const fileName = name;
    const blob = new Blob([taskString], { type: "application/json" });
    const href = URL.createObjectURL(blob);
  
    // create "a" HTML element with href to file
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
  
    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  //builds Task JSON and stringifies
  const generateTaskObject = () => {
    const taskObject = {
      name : name,
      courseIdx : courseIdx,
      week : week,
      maxPoints : maxPoints,
      differentiationIdx : differentiationIdx,
      topic : topic,
      deliverables : deliverables,
      activeFeatures : activeFeatures
    }

    return taskObject;
  };

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

            <Box sx={{ flex: "1 1 auto" }} />
            {activeStep === steps.length - 1 && (
              <Button onClick={handleAddToList} sx={{ mr: 1 }}>
                Add Task
              </Button>
            )}

            <Button
              onClick={
                activeStep === steps.length - 1
                  ? handleGenerateJSON
                  : handleNext
              }
            >
              {activeStep === steps.length - 1 ? "Generate JSON" : "Next"}
            </Button>
          </Box>
        </>
      </Paper>
    </Box>
  );
}

export default NewTask;
