import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import { useReadLocalStorage, useLocalStorage } from "usehooks-ts";
import { generateFeedbackObject } from "./utils";
import features from "./../../resources/features.json";
import _ from "lodash";

function AssessmentFinal({ setActiveStep, selectedTask }) {
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [returnHome, setReturnHome] = useState(false);
  const grader = useReadLocalStorage("rubric_grader");
  const courseYear = useReadLocalStorage("rubric_course_year");
  const courseRun = useReadLocalStorage("rubric_course_run");
  const [generatedFeedback, setGeneratedFeedback] = useLocalStorage(
    "rubric_generatedFeedback"
  );
  const [feedbackSet, setFeedbackSet] = useLocalStorage("rubric_feedbackSet", []);
  const navigate = useNavigate();

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

  const downloadFile = (data, fileType) => {
    let fileName = `${selectedTask.name}_${grader}_${courseYear}_${courseRun}`;
    let href;

    if (fileType === "JSON") {
      // create file in browser
      const json = JSON.stringify(data, null, 2);
      const blob = new Blob([json], { type: "application/json" });
      href = URL.createObjectURL(blob);
      fileName += ".json";
      
    } else if (fileType === "CSV") {
      const csv = data;
      const blob = new Blob([csv], { type: "text/csv" });
      href = URL.createObjectURL(blob);
      fileName += ".csv";
    }
    
    // create "a" HTLM element with href to file
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName;
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
    downloadFile(feedback, "JSON");
    handleClose();
  };

  const handleExportCsv = () => {
    /*
      - build the csv file
    */

    const feedback = generateFeedbackObject(selectedTask);
    let csv_template = 'name;maxPoints;course;week;differentiation;io1_slides;io1_assignment;io2_api;io2_ipi;io2_implementaiton;io3_syntax_semantics;io3_style;io3_testing;io3_class_design;modularity;data_types;readability;dry_principle;flow;api_documentation;correctness;robustness;test_traceability;test_completeness;pg_external_design;pg_external_specification;pg_external_tests;pg_internal_analysis;pg_internal_design;pg_internal_specification;pg_internal_tests;pg_implementation_analysis;pg_implementation_design;pg_implementation_coding;pg_implementation_tests;additionalComments;weightedAverageScore;pointsForSolution;additionalComment;grader;courseRun;courseYear;timestamp;reserved1;reserved2;reserved3;modularity_score;modularity_scoreWeight;modularity_positive_examples;modularity_negative_examples;data_types_score;data_types_scoreWeight;data_types_positive_examples;data_types_negative_examples;readability_score;readability_scoreWeight;readability_positive_examples;readability_negative_examples;dry_principle_score;dry_principle_scoreWeight;dry_principle_positive_examples;dry_principle_negative_examples;flow_score;flow_scoreWeight;flow_positive_examples;flow_negative_examples;api_documentation_score;api_documentation_scoreWeight;api_documentation_positive_examples;api_documentation_negative_examples;correctness_score;correctness_scoreWeight;correctness_positive_examples;correctness_negative_examples;robustness_score;robustness_scoreWeight;robustness_positive_examples;robustness_negative_examples;test_traceability_score;test_traceability_scoreWeight;test_traceability_positive_examples;test_traceability_negative_examples;test_completeness_score;test_completeness_scoreWeight;test_completeness_positive_examples;test_completeness_negative_examples;pg_external_design_score;pg_external_design_scoreWeight;pg_external_design_positive_examples;pg_external_design_negative_examples;pg_external_specification_score;pg_external_specification_scoreWeight;pg_external_specification_positive_examples;pg_external_specification_negative_examples;pg_external_tests_score;pg_external_tests_scoreWeight;pg_external_tests_positive_examples;pg_external_tests_negative_examples;pg_internal_analysis_score;pg_internal_analysis_scoreWeight;pg_internal_analysis_positive_examples;pg_internal_analysis_negative_examples;pg_internal_design_score;pg_internal_design_scoreWeight;pg_internal_design_positive_examples;pg_internal_design_negative_examples;pg_internal_specification_score;pg_internal_specification_scoreWeight;pg_internal_specification_positive_examples;pg_internal_specification_negative_examples;pg_internal_tests_score;pg_internal_tests_scoreWeight;pg_internal_tests_positive_examples;pg_internal_tests_negative_examples;pg_implementation_analysis_score;pg_implementation_analysis_scoreWeight;pg_implementation_analysis_positive_examples;pg_implementation_analysis_negative_examples;pg_implementation_design_score;pg_implementation_design_scoreWeight;pg_implementation_design_positive_examples;pg_implementation_design_negative_examples;pg_implementation_coding_score;pg_implementation_coding_scoreWeight;pg_implementation_coding_positive_examples;pg_implementation_coding_negative_examples;pg_implementation_tests_score;pg_implementation_tests_scoreWeight;pg_implementation_tests_positive_examples;pg_implementation_tests_negative_examples;blueprint; \n';
    
    for (const item of feedback.feedbackSet) {
      let row = `${feedback.name};${feedback.maxPoints};${feedback.course};${feedback.week};${feedback.differentiation};`
      for (const deliverable of feedback.deliverables) {
        row += `${deliverable.selected};`
      }

      let i = 0;
      for(let j = 0;j < features.length;j++) {
        if (
          i < feedback.rubricSet.length &&
          feedback.rubricSet[i].name === features[j].key
        ) {
          // Hier haben wir das gleiche feature gefunden
          row += `${feedback.rubricSet[i].weight};`
          i++;
          
        } else {
          // Das feature gibt es in rubricSet nicht, also nächstes feature
          row += `0;`
        }
      }

      row += `${feedback.additionalComments};${item.weightedAverageScore};${item.pointsForSolution};${item.additionalComment};`;
      row += `${item.grader};${item.courseRun};${item.courseYear};${item.timestamp};${item.reserved1};${item.reserved2};${item.reserved3};`;

      let k = 0;
      for(let j = 0;j < features.length;j++) {
        if (
          k < item.feedbackFeature.length &&
          item.feedbackFeature[k].key === features[j].key
        ) {
          // Hier haben wir das gleiche feature gefunden
          row += `${item.feedbackFeature[k].score};${item.feedbackFeature[k].scoreWeight};${_.join(item.feedbackFeature[k].goodPoints, ",")};${_.join(item.feedbackFeature[k].improvementPoints, ",")};`;
          k++;
          
        } else {
          // Das feature gibt es in rubricSet nicht, also nächstes feature
          row += `-1;-1;;;`;

        }
      }
      row += `${feedback.blueprint};\n`;
      csv_template += row;
    }

    downloadFile(csv_template, "CSV")
    handleClose();
  };

  const handleClose = () => {
    setGeneratedFeedback(null)
    setFeedbackSet([])
    setOpen(false)
    setReturnHome(true)
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
      <Typography sx={{ mt: 1, mr: 1 }}>
        {feedbackSet.length + 1} Students assessed in this session.
      </Typography>
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
      <Dialog open={returnHome}>
        <DialogTitle>Task Added</DialogTitle>
        <DialogContent>
          The Session has been exported. Choose whether you want to return to the
          main page or remain here.
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => {setOpen(true);setReturnHome(false)}}>
              Other Format
          </Button>
          <Button 
            onClick={() => {setOpen(false);setReturnHome(false)}}
            variant="outlined">
              Stay here
          </Button>
          <Button 
            onClick={() => navigate(-1)}
            variant="contained">
              Return to home
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AssessmentFinal;
