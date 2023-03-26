import _ from "lodash";
import general_information from "../../resources/general_information.json";
import { getFromLocalStorage } from "../../utils";

// Extrapolate Points based on the total weighted score
function computeExtrapolatedPoints(score, maxPoints) {
  let percentile = score / 3;
  return Math.round(maxPoints * percentile * 2) / 2;
}

// Compute the total weighted score
// Warning: The score of each feature
// could have been changed manually
function computeWeightedScore(featureWeights, featurePoints) {
  let score = 0;
  let totalWeight = 0;
  for (let i = 0; i < featureWeights.length && i < featurePoints.length; i++) {
    score += featurePoints[i] * featureWeights[i];
    if (typeof featureWeights[i] === "string") {
      totalWeight += Number(featureWeights[i]);
    } else {
      totalWeight += featureWeights[i];
    }
  }
  console.log(
    "Total score:",
    score,
    "total weight:",
    totalWeight,
    "score/totalWeight:",
    score / totalWeight
  );
  score /= totalWeight;
  return score;
}

// Compute the total score
export function computeScore(featureWeights, featurePoints) {
  let score = computeWeightedScore(featureWeights, featurePoints);
  let extrapolatedPoints = computeExtrapolatedPoints(score, 12);
  console.log("Score:", score, "Extrapolated:", extrapolatedPoints);
  return [score, extrapolatedPoints];
}

// Compute Points per feature: Ranging from 1 to 4
// Every time a checkbox changes
// the score needs to be computed again.
export function computePoints(feature) {
  const fail_examples = feature.examples[0];
  const pass_examples = feature.examples[1];
  let failExampleCount = fail_examples.length;
  let passExampleCount = pass_examples.length;

  let failExamplesSelected = _.filter(fail_examples, (x) => x.checked).length;
  let passExamplesSelected = _.filter(pass_examples, (x) => x.checked).length;

  let failRatio = failExamplesSelected / failExampleCount;
  if (isNaN(failRatio)) {
    failRatio = 0;
  }

  let passRatio = passExamplesSelected / passExampleCount;
  if (isNaN(passRatio)) {
    passRatio = 0;
  }

  return Math.round((passRatio - failRatio + 1) * 2);
}

let selectedTask = {
  name: "task 3",
  courseIdx: 0,
  week: 1,
  maxPoints: 0,
  differentiationIdx: 1,
  topic: "arithmetic operators",
  deliverables: [],
  activeFeatures: [
    {
      key: "modularity",
      checked: true,
      weight: 1,
    },
    {
      key: "data_types",
      checked: true,
      weight: "2",
    },
    {
      key: "readability",
      checked: true,
      weight: "5",
    },
    {
      key: "dry_principle",
      checked: false,
      weight: 1,
    },
    {
      key: "flow",
      checked: false,
      weight: 1,
    },
    {
      key: "api_documentation",
      checked: false,
      weight: 1,
    },
    {
      key: "correctness",
      checked: false,
      weight: 1,
    },
    {
      key: "robustness",
      checked: false,
      weight: 1,
    },
    {
      key: "test_traceability",
      checked: false,
      weight: 1,
    },
    {
      key: "test_completeness",
      checked: false,
      weight: 1,
    },
    {
      key: "pg_external_design",
      checked: false,
      weight: 1,
    },
    {
      key: "pg_external_specification",
      checked: false,
      weight: 1,
    },
    {
      key: "pg_external_tests",
      checked: false,
      weight: 1,
    },
    {
      key: "pg_internal_analysis",
      checked: false,
      weight: 1,
    },
    {
      key: "pg_internal_design",
      checked: false,
      weight: 1,
    },
    {
      key: "pg_internal_specification",
      checked: false,
      weight: 1,
    },
    {
      key: "pg_internal_tests",
      checked: false,
      weight: 1,
    },
    {
      key: "pg_implementation_analysis",
      checked: false,
      weight: 1,
    },
    {
      key: "pg_implementation_design",
      checked: false,
      weight: 1,
    },
    {
      key: "pg_implementation_coding",
      checked: false,
      weight: 1,
    },
    {
      key: "pg_implementation_tests",
      checked: false,
      weight: 1,
    },
  ],
  description: "",
  additionalComments: "fdsahgfjdghmc",
};

export function generateFeedbackObject() {
  return {
    name: selectedTask.name,
    maxPoints: `${selectedTask.maxPoints}`,
    course: general_information.courses.options[selectedTask.courseIdx],
    week: `${selectedTask.week}`,
    differentiation:
      general_information.differentiationBackgrounds.options[
        selectedTask.differentiationIdx
      ],
    deliverables: [
      { name: "io1_slides", selected: true },
      { name: "io1_assignment", selected: false },
      { name: "io2_api", selected: true },
      { name: "io2_ipi", selected: true },
      { name: "io2_implementaiton", selected: false },
      { name: "io3_syntax_semantics", selected: false },
      { name: "io3_style", selected: false },
      { name: "io3_testing", selected: false },
      { name: "io3_class_design", selected: false },
    ], // Noch nicht gemacht
    rubricSet: _.chain(selectedTask.activeFeatures)
      .filter((f) => f.checked)
      .map((f) => ({ name: f.key, weight: f.weight }))
      .value(),
    additionalComments: selectedTask.additionalComments,
    feedbackSet: getFromLocalStorage("rubric_feedbackSet"),
    blueprint: selectedTask.topic,
  };
}
