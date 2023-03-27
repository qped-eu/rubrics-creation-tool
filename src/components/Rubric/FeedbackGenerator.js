import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { getFromLocalStorage } from "../../utils";
import { useLocalStorage } from "usehooks-ts";
import _ from "lodash";

function FeedbackGenerator({
  selectedTask,
  setError,
  activeFeatures,
  featurePoints,
  featureWeights,
  score,
}) {
  const [feedbackSet, setFeedbackSet] = useLocalStorage(
    "rubric_feedbackSet",
    []
  );

  function handleTextChange() {}

  function handleFeedbackButtonClick() {
    const grader = getFromLocalStorage("rubric_grader");
    const courseYear = getFromLocalStorage("rubric_course_year");
    const courseRun = getFromLocalStorage("rubric_course_run");
    const additionalComment = getFromLocalStorage("rubric_additionalComment");
    const finalPoints = getFromLocalStorage("rubric_finalPoints");
    const totalWeight = _.sum(featureWeights);
    const weigths = _.map(featureWeights, (w) => (w / totalWeight) * 100);

    if (!courseRun || courseRun.length === 0) {
      setError("Please enter the current run of the course.");
    }

    if (!courseYear || courseYear.length === 0) {
      setError("Please enter the start year of the course.");
    }

    if (!grader || grader.length === 0) {
      setError("Please enter your name in the grader field.");
    }

    if (!selectedTask) {
      setError("Please select a task before trying to generate feedback.");
    }

    let newFeedback = {
      weightedAverageScore: score,
      pointsForSolution: finalPoints,
      feedbackFeature: _.map(activeFeatures, (f, i) => ({
        key: f.key,
        score: featurePoints[i] ?? 0,
        scoreWeight: weigths[i] ?? 0,
        improvementPoints: _.chain(f.examples[0])
          .filter((e) => e.checked)
          .map((e) => e.key)
          .value(),
        goodPoints: _.chain(f.examples[1])
          .filter((e) => e.checked)
          .map((e) => e.key)
          .value(),
      })),
      additionalComment: additionalComment,
      grader: grader,
      courseRun: courseRun,
      courseYear: courseYear,
      timestamp: new Date().toISOString(),
      reserved1: "",
      reserved2: "",
      reserved3: "",
    };

    setFeedbackSet((oldSet) => [...oldSet, newFeedback]);
  }

  function handleNextStudentButtonClick() {}

  function handleExportButtonClick() {
    if (!selectedTask) {
      setError("Please select a task before trying to export one.");
    }

    // Exportieren als JSON oder CSV
  }

  function handleTextAreaClick(feedback) {
    return () => {};
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h2>Generated Feedback</h2>
          <textarea
            id="feedback_text"
            cols="80"
            rows="10"
            readOnly=""
          ></textarea>
        </Grid>
        <Grid item xs={6}>
          <h2>Additional Comment</h2>
          <textarea id="comment_text" cols="80" rows="10"></textarea>
        </Grid>
      </Grid>
    </>
  );
}

export default FeedbackGenerator;
