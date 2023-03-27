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
      <Grid item xs={6}>
        <Select
          variant="outlined"
          style={{ border: "2px solid" }}
          sx={{
            width: "100%",
            height: "80%",
            color: "white",
            ".MuiSvgIcon-root ": {
              fill: "white !important",
            },
          }}
          value={taskIndex}
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
      <Grid
        item
        xs={6}
        sx={{ textAlign: "right", alignSelf: "end", marginBottom: 1.5 }}
      >
        <Button
          variant="outlined"
          color="secondary"
          href={`#/rubric/${allTasks?.[taskIndex]?.name}`}
          size="medium"
          style={{ border: "2px solid" }}
          disabled={taskIndex === ""}
          disableElevation
          sx={{ height: 50 }}
        >
          Fill out Rubric
        </Button>
      </Grid>
    </Grid>
  );
}

export default TaskSelector;
