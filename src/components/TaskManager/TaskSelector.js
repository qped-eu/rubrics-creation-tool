import { MenuItem, Select, Button } from "@mui/material";
import _ from "lodash";
import React, { useState } from "react";
import { useReadLocalStorage } from "usehooks-ts";
import Grid from "@mui/material/Unstable_Grid2";

function TaskSelector() {
  const [taskIndex, setTaskIndex] = useState("");
  const allTasks = useReadLocalStorage("all_tasks");
  const handleChange = (e) => setTaskIndex(e.target.value);
  return (
    <Grid container>
      <Grid xs={6}>
        <Select
          variant="outlined"
          sx={{ width: "100%" }}
          value={taskIndex}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={""}>
            <em>None</em>
          </MenuItem>
          {_.map(allTasks, (task, idx) => (
            <MenuItem key={idx} value={idx}>
              {task.name}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid xs={6} sx={{ textAlign: "right", alignSelf: "end" }}>
        <Button
          variant="contained"
          href={`rubric/${allTasks?.[taskIndex]?.name}`}
          size="large"
          disabled={taskIndex === ""}
          disableElevation
        >
          Fill out Rubric
        </Button>
      </Grid>
    </Grid>
  );
}

export default TaskSelector;
