import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Box } from "@mui/system";
import _ from "lodash";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import general_information from "../../resources/general_information.json";

const AddTaskButton = (props) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Box>
      <Dialog open={open}>
        <DialogTitle>Task Added</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The task has been added. Choose whether you want to return to the
            main page or remain here.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => navigate(-1)}>Return to home</Button>
        </DialogActions>
      </Dialog>
      <Button
        onClick={() => {
          props.handleAddToList();
          setOpen(true);
        }}
        sx={{ mr: 1 }}
        disabled={props.nameIsDuplicate}
      >
        Add Task
      </Button>
    </Box>
  );
};

function ButtonsBox(props) {
  //read data from localstorage
  const [name, setName] = useLocalStorage("new_task_name", "");
  const [courseIdx, setCourseIdx] = useLocalStorage(
    "new_task_courseIdx",
    general_information.courses.defaultIndex
  );
  const [week, setWeek] = useLocalStorage("new_task_week", 1);
  const [maxPoints, setMaxPoints] = useLocalStorage("new_task_maxPoints", 0);
  const [differentiationIdx, setDifferentiationIdx] = useLocalStorage(
    "new_task_differentiationIdx",
    general_information.differentiationBackgrounds.defaultIndex
  );
  const [topic, setTopic] = useLocalStorage("new_task_topic", "");
  const [deliverables, setDeliverables] = useLocalStorage(
    "new_task_deliverables",
    []
  );
  const [activeFeatures, setActiveFeatures] =
    useLocalStorage("new_task_features");
  const [description, setDescription] = useLocalStorage(
    "new_task_description",
    ""
  );
  const [additionalComments, setAdditionalComments] = useLocalStorage(
    "new_task_additionalComments",
    ""
  );
  const [allTasks, setAllTasks] = useLocalStorage("all_tasks", []);

  const { activeStep, steps, setActiveStep } = props;
  const nameIsDuplicate = _.map(allTasks, (t) => t.name).includes(name);

  const handleNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleReset = () => {
    setActiveStep(0);

    setName("");
    setCourseIdx(general_information.courses.defaultIndex);
    setWeek(1);
    setMaxPoints(0);
    setDifferentiationIdx(
      general_information.differentiationBackgrounds.defaultIndex
    );
    setTopic("");
    setDeliverables([]);
    setActiveFeatures([]);
    setDescription("");
    setAdditionalComments("");
  };

  const handleAddToList = () => {
    const taskToAdd = generateTaskObject();
    const newAllTasks = _.concat(allTasks, taskToAdd);
    setAllTasks(newAllTasks);
  };

  const handleGenerateJSON = () => {
    const exportJSON = JSON.stringify(generateTaskObject());

    downloadTask(exportJSON);
  };

  const downloadTask = (taskString) => {
    // create file in browser
    const fileName = name;
    const blob = new Blob([taskString], { type: "application/json" });
    const href = URL.createObjectURL(blob);

    // create "a" HTML element with href to file
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();

    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  //builds Task JSON and stringifies
  const generateTaskObject = () => {
    const taskObject = {
      name: name,
      courseIdx: courseIdx,
      week: week,
      maxPoints: maxPoints,
      differentiationIdx: differentiationIdx,
      topic: topic,
      deliverables: deliverables,
      activeFeatures: activeFeatures,
      description: description,
      additionalComments: additionalComments,
    };

    return taskObject;
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
      <Button
        color="inherit"
        disabled={activeStep === 0}
        onClick={handleBack}
        sx={{ mr: 1 }}
      >
        Back
      </Button>
      <Box />
      {activeStep === steps.length - 1 && (
        <Button color="inherit" onClick={handleReset} sx={{ mr: 1 }}>
          Reset
        </Button>
      )}

      <Box sx={{ flex: "1 1 auto" }} />
      {activeStep === steps.length - 1 && (
        <AddTaskButton
          handleAddToList={handleAddToList}
          nameIsDuplicate={nameIsDuplicate}
        />
      )}

      <Button
        onClick={
          activeStep === steps.length - 1 ? handleGenerateJSON : handleNext
        }
      >
        {activeStep === steps.length - 1 ? "Generate JSON" : "Next"}
      </Button>
    </Box>
  );
}

export default ButtonsBox;
