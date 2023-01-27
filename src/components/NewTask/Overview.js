import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useReadLocalStorage, useLocalStorage } from "usehooks-ts";
import AdditionalComments from "./AdditionalComments";
import { Parameter, ParameterTable } from "./Parameter";
import Title from "./Title";
import _ from "lodash";
import features from "../../resources/features.json";
import general_information from "../../resources/general_information.json";
import { level, getKeysForLevel } from "./utils";
<<<<<<< HEAD
import general_information from "../../resources/general_information.json";

=======
import ParameterEditable from "./Parameter/ParameterEditable";
>>>>>>> ad917893d1e4df2270b63b878f6d8b1f2e2e5662

const { differentiationBackgrounds } = general_information;

function Overview() {
  const [name, setName] = useLocalStorage("new_task_name", "");
  const allTasks = useReadLocalStorage("all_tasks");
  const courseIdx =
    useReadLocalStorage("new_task_courseIdx") ??
    general_information.courses.defaultIndex;
  const week = useReadLocalStorage("new_task_week") ?? 1;
  const maxPoints = useReadLocalStorage("new_task_maxPoints") ?? 0;
  const differentiationIdx =
    useReadLocalStorage("new_task_differentiationIdx") ??
    general_information.differentiationBackgrounds.defaultIndex;
  const topic = useReadLocalStorage("new_task_topic") ?? "None";
  const deliverables = useReadLocalStorage("new_task_deliverables");
  const activeFeatures = useReadLocalStorage("new_task_features");
  const description = useReadLocalStorage("new_task_description") ?? "";

  const nameIsDuplicate = _.map(allTasks, (t) => t.name).includes(name);
  const nameIsEmpty = name.trim() === "";

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
        <Stack direction={"row"} sx={{ alignItems: "center" }}>
          <ParameterEditable
            title={"Name"}
            value={name}
            sx={{ color: (nameIsDuplicate || nameIsEmpty) && "error.main" }}
            mode={(nameIsDuplicate || nameIsEmpty) && "edit"}
            handleUpdateValue={(newValue) => () => setName(newValue)}
          />
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Parameter
          title={"Course"}
          value={general_information.courses.options[courseIdx]}
        />
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
          value={
            differentiationBackgrounds.options[
              differentiationIdx ?? differentiationBackgrounds.defaultIndex
            ]
          }
        />
        <Parameter title={"Topic"} value={topic} sx={{ marginTop: "16px" }} />
      </Grid>
      <Grid item xs={6}>
        <Parameter title={"QPED deliverables"} value={deliverables} />
      </Grid>
      <Grid item xs={12}>
        <Parameter title={"Description"} value={description} />
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
