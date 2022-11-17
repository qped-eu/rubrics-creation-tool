import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

function Points() {
  function handleTextChange() {}

  function handleApplyComputedPoints() {}

  return (
    <Grid container>
      <Grid spacing={2} xs={4}>
        <h2>Achieved Points</h2>
        <input type="number" id="task_points" onInput={handleTextChange} />
        <button
          type="button"
          id="apply_computed_points"
          onClick={handleApplyComputedPoints}
        >
          Apply Computed
        </button>
      </Grid>
      <Grid xs={4}>
        <h2>Calculated Points</h2>
        <input type="text" id="task_calc_points" readonly="" />
      </Grid>
      <Grid xs={4}>
        <h2>Maximum Points</h2>
        <input type="text" id="task_max_points" readonly="" />
      </Grid>
    </Grid>
  );
}

export default Points;
