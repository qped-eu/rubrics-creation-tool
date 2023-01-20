import { Button, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import {useReadLocalStorage, useLocalStorage} from "usehooks-ts";


function ButtonsBox(props) {
    //read data from localstorage
  const name = useReadLocalStorage("new_task_name");
  const courseIdx = useReadLocalStorage("new_task_courseIdx");
  const week = useReadLocalStorage("new_task_week");
  const maxPoints = useReadLocalStorage("new_task_maxPoints");
  const differentiationIdx = useReadLocalStorage("new_task_differentiationIdx");
  const topic = useReadLocalStorage("new_task_topic");
  const deliverables = useReadLocalStorage("new_task_deliverables");
  const activeFeatures = useReadLocalStorage("new_task_features");
  const [allTasks, setAllTasks] = useLocalStorage("all_tasks", []);

  const {handleBack, 
    handleNext, 
    activeStep, 
    steps,
    setNameIsUnique} = props;

  const handleReset = () => {};

  const handleAddToList = () => {
    const taskToAdd = generateTaskObject();
    
    if (nameIsUnique()) {
      allTasks.push(taskToAdd);
    } else {
      setNameIsUnique(false);
      console.log("Name is not unique!");
    }
    
    setAllTasks(allTasks);
  };

  const nameIsUnique = () => {
    for (var i = 0 ; i < allTasks.length ; i++ ) {
      const currentTask = allTasks[i];
      if (name === currentTask.name) {
        return false;
      }
    }
    return true;
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
      name : name,
      courseIdx : courseIdx,
      week : week,
      maxPoints : maxPoints,
      differentiationIdx : differentiationIdx,
      topic : topic,
      deliverables : deliverables,
      activeFeatures : activeFeatures
    }

    return taskObject;
  };

  return(
    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
    <Button
      color="inherit"
      disabled={activeStep === 0}
      onClick={handleBack}
      sx={{ mr: 1 }}
    >
    Back
    </Button>
    <Box  />
    {activeStep === steps.length - 1 && (
      <Button color="inherit" onClick={handleReset} sx={{ mr: 1 }}>
      Reset
      </Button>
    )}

    <Box sx={{ flex: "1 1 auto" }} />
    {activeStep === steps.length - 1 && !nameIsUnique() && (
      <Tooltip title="Change your Name to be unique, before adding to your Rubric list.">
        <Button onClick={handleAddToList} sx={{ mr: 1 }} disabled>
        Add Task
        </Button>
      </Tooltip>
    )}
    {activeStep === steps.length - 1 && nameIsUnique() && (
      <Button onClick={handleAddToList} sx={{ mr: 1 }}>
      Add Task
      </Button>
    )}

    <Button
      onClick={
      activeStep === steps.length - 1
        ? handleGenerateJSON
        : handleNext
      }
    >
      {activeStep === steps.length - 1 ? "Generate JSON" : "Next"}
    </Button>
  </Box>
  );
}

export default ButtonsBox