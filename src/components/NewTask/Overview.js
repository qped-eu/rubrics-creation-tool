import { Grid } from "@mui/material";
import React from "react";
import { useReadLocalStorage } from "usehooks-ts";
import AdditionalComments from "./AdditionalComments";
import { Parameter, ParameterTable } from "./Parameter";
import Title from "./Title";
import _ from "lodash";
import features from "../../resources/features.json";
import { level, getKeysForLevel } from "./utils";

function Overview(props) {
  const name = useReadLocalStorage("new_task_name");
  const courseIdx = useReadLocalStorage("new_task_courseIdx");
  const week = useReadLocalStorage("new_task_week");
  const maxPoints = useReadLocalStorage("new_task_maxPoints");
  const differentiationIdx = useReadLocalStorage("new_task_differentiationIdx");
  const topic = useReadLocalStorage("new_task_topic");
  const deliverables = useReadLocalStorage("new_task_deliverables");
  const activeFeatures = useReadLocalStorage("new_task_features");

  const nameIsUnique = props.nameIsUnique;
  console.log("name is unique" + nameIsUnique);

  const [pgFeaturesList, featuresList] = _.chain(activeFeatures)
    .filter((f) => f.checked)
    .map((f) => {
      f.name = _.chain(features)
        .filter((feature) => feature.key === f.key)
        .map((feature) => feature.name)
        .head()
        .value();
      return f;
    })
    .partition((feature) => getKeysForLevel(level.pg).includes(feature.key));
  const [basicFeaturesList, advancedFeaturesList] = _.partition(
    featuresList,
    (feature) => getKeysForLevel(level.basic).includes(feature.key)
  );
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Title>Overview</Title>
      </Grid>
      <Grid item xs={6}>
        {nameIsUnique ? 
            <Parameter title={"Name"} value={name} sx={{color: 'primary.main'}}/>
          : <Parameter title={"Name"} value={name} sx={{color: 'error.main'}}/>}
      </Grid>
      <Grid item xs={6}>
        <Parameter title={"Course"} value={courseIdx} />
      </Grid>
      <Grid item xs={6}>
        <Parameter title={"Week"} value={week} />
      </Grid>
      <Grid item xs={6}>
        <Parameter title={"Max Points"} value={maxPoints} />
      </Grid>
      <Grid item xs={6}>
        <Parameter
          title={"Differentiation of background (TU/e)"}
          value={differentiationIdx}
        />
        <Parameter title={"Topic"} value={topic} sx={{ marginTop: "16px" }} />
      </Grid>
      <Grid item xs={6}>
        <Parameter title={"QPED deliverables"} value={deliverables} />
      </Grid>
      <Grid item xs={12}>
        <ParameterTable
          title={"Included Features"}
          basic={basicFeaturesList}
          advanced={advancedFeaturesList}
          pg={pgFeaturesList}
        />
      </Grid>
      <Grid item xs={12}>
        <AdditionalComments />
      </Grid>
    </Grid>
  );
}

export default Overview;
