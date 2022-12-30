import { Grid } from "@mui/material";
import _ from "lodash";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import features from "../../../resources/features.json";
import Title from "../Title";
import FeatureTable from "./FeatureTable";
import { level, getKeysForLevel } from "../utils";

function Features() {
  const defaultFeatures = _.map(features, (f) => ({
    key: f.key,
    checked: false,
    weight: 1,
  }));
  const [activeFeatures, setActiveFeatures] = useLocalStorage(
    "new_task_features",
    defaultFeatures
  );

  useEffect(() => {
    const missingFeatures = _.differenceBy(
      defaultFeatures,
      activeFeatures,
      "key"
    );
    if (missingFeatures?.length > 0) {
      setActiveFeatures(_.concat(activeFeatures, missingFeatures));
    }
  }, [activeFeatures, defaultFeatures, setActiveFeatures]);

  const handleToggleLevel = (level) => (bool) => () => {
    const keys = getKeysForLevel(level);
    const newActiveFeatures = _.map(activeFeatures, (f) => {
      if (keys.includes(f.key)) {
        f.checked = bool;
      }
      return f;
    });
    setActiveFeatures(newActiveFeatures);
  };
  const handleToggleBasic = handleToggleLevel(level.basic);
  const handleToggleAdvanced = handleToggleLevel(level.advanced);
  const handleTogglePG = handleToggleLevel(level.pg);

  const handleFeatureClick = (feature) => () => {
    const newActiveFeatures = _.map(activeFeatures, (f) => {
      if (feature.key === f.key) {
        f.checked = !f.checked;
      }
      return f;
    });
    setActiveFeatures(newActiveFeatures);
  };

  const handleFeatureWeightChange = (feature, weight) => {
    const newActiveFeatures = _.map(activeFeatures, (f) => {
      if (feature.key === f.key) {
        f.weight = weight;
      }
      return f;
    });
    setActiveFeatures(newActiveFeatures);
  };

  const [pgFeaturesList, featuresList] = _.partition(
    activeFeatures,
    (feature) => getKeysForLevel(level.pg).includes(feature.key)
  );
  const [basicFeaturesList, advancedFeaturesList] = _.partition(
    featuresList,
    (feature) => getKeysForLevel(level.basic).includes(feature.key)
  );
  return (
    <>
      <Title>Include Features</Title>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ p: 2 }}>
          <FeatureTable
            title={"Basic"}
            sx={{ mt: 2 }}
            features={basicFeaturesList}
            handleToggleAll={handleToggleBasic}
            handleToggle={handleFeatureClick}
            handleWeightChange={handleFeatureWeightChange}
          />
          <FeatureTable
            title={"Advanced"}
            sx={{ mt: 2 }}
            features={advancedFeaturesList}
            handleToggleAll={handleToggleAdvanced}
            handleToggle={handleFeatureClick}
            handleWeightChange={handleFeatureWeightChange}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 2 }}>
          <FeatureTable
            title={"Procedural guidance"}
            sx={{ mt: 2 }}
            features={pgFeaturesList}
            handleToggleAll={handleTogglePG}
            handleToggle={handleFeatureClick}
            handleWeightChange={handleFeatureWeightChange}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Features;
