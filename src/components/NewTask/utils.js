import _ from "lodash";
import features from "../../resources/features.json";

const level = {
  basic: "basic",
  advanced: "advanced",
  pg: "procedural_guidance",
};

const getKeysForLevel = (level) =>
  _.chain(features)
    .filter((f) => f.level === level)
    .map((f) => f.key)
    .value();

export { level, getKeysForLevel };
