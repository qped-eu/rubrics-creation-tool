import _ from "lodash";

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
  //console.log("Score:", score, "Extrapolated:", extrapolatedPoints);
  return extrapolatedPoints;
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
