import React, { useEffect, useState } from "react";
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

import { useReadLocalStorage, useLocalStorage } from "usehooks-ts";
import _ from "lodash";
import { useLoaderData } from "react-router-dom";

import features from "../../resources/features.json";
import { computeScore } from "./utils";

const StepperContent = (props) => {
  const { activeStep, selectedTask, setError, setActiveStep } = props;

  const [rubricName, setRubricName] = useLocalStorage("rubric_name", null);
  const featureKeys = _.chain(selectedTask.activeFeatures)
    .filter((f) => f.checked)
    .map((f) => f.key)
    .value();

  const featureWeights = _.chain(selectedTask.activeFeatures)
    .filter((f) => f.checked)
    .map((f) => f.weight)
    .value();

  const activeFeatures = _.chain(features)
    .filter((f) => featureKeys.includes(f.key))
    .map(({ fail_examples, pass_examples, ...f }) => ({
      ...f,
      examples: [
        _.map(fail_examples, (item) => ({ ...item, checked: false })),
        _.map(pass_examples, (item) => ({ ...item, checked: false })),
      ],
      points: 2,
    }))
    .value();

  const [rubricFeatures, setRubricFeatures] = useLocalStorage(
    "rubric_features",
    activeFeatures
  );

  const featurePoints = _.map(rubricFeatures, (f) => f.points ?? 2);

  const setPoints = (idx) => (value) => {
    let newFeatures = _.clone(rubricFeatures);
    newFeatures[idx] = { ...newFeatures[idx], points: value };
    setRubricFeatures(newFeatures);
  };

  const [score, totalPointsCalculated] = computeScore(
    featureWeights,
    featurePoints
  );

  const [, setTotalPoints] = useLocalStorage("rubric_finalPoints", "");

  console.log("activeFeatures:", activeFeatures);

  useEffect(() => {
    if (!rubricName) {
      setRubricName(selectedTask.name);
    }
    if (rubricName !== selectedTask.name) {
      setRubricFeatures(activeFeatures);
      setRubricName(selectedTask.name);
    }
  }, [
    activeFeatures,
    rubricName,
    selectedTask.name,
    setRubricFeatures,
    setRubricName,
  ]);

  switch (activeStep) {
    case 0:
      return (
        <FeatureTable
          activeFeatures={rubricFeatures}
          featurePoints={featurePoints}
          setPoints={setPoints}
          setTotalPoints={setTotalPoints}
          totalPointsCalculated={totalPointsCalculated}
          maxPoints={selectedTask.maxPoints}
        />
      );
    case 1:
      return (
        <FeedbackGenerator
          selectedTask={selectedTask}
          activeFeatures={rubricFeatures}
          featureWeights={featureWeights}
          featurePoints={featurePoints}
          score={score}
          totalPointsCalculated={totalPointsCalculated}
          setError={setError}
        />
      );
    case 2:
      return <AssessmentFinal setActiveStep={setActiveStep} />;
    //   default:
    //     return <Overview sx={{ margin: "auto", width: "100%" }} />;
    default:
      return null;
  }
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

  console.log("Rerendering Rubric");

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
                <StepperContent
                  activeStep={activeStep}
                  selectedTask={selectedTask}
                  setError={setError}
                  setActiveStep={setActiveStep}
                />
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
