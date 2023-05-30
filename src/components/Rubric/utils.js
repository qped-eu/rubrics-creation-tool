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
export function computeWeightedScore(featureWeights, featurePoints) {
  let score = 0;
  let totalWeight = 0;
  for (let i = 0; i < featureWeights.length && i < featurePoints.length; i++) {
    score += (featurePoints[i] - 1) * featureWeights[i];
    if (typeof featureWeights[i] === "string") {
      totalWeight += Number(featureWeights[i]);
    } else {
      totalWeight += featureWeights[i];
    }
  }
  score /= totalWeight;
  return score;
}

// Compute the total score
export function computeScore(featureWeights, featurePoints, maxPoints) {
  let score = computeWeightedScore(featureWeights, featurePoints);
  let extrapolatedPoints = computeExtrapolatedPoints(score, maxPoints);
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

  return Math.round((passRatio - failRatio + 1) * 2) + 1; // +1 Denn vorher war das die Berechnung des
}

const getClickedExamples = (i, feature) =>
  _.chain(feature.examples[i])
    .filter((x) => x.checked)
    .map((x) => x.key)
    .value();

export const getFailedExamples = (feature) => getClickedExamples(0, feature);

export const getPassedExamples = (feature) => getClickedExamples(1, feature);

export function calculateFeatureWeights(selectedTask) {
  const weights = _.chain(selectedTask.activeFeatures)
    .filter((f) => f.checked)
    .map((f) => f.weight)
    .value();
  const totalWeight = _.sum(weights);
  return _.map(weights, (w) => (w / totalWeight) * 100);
}

export function generateFeedbackObject(selectedTask) {
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
