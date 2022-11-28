import logo from "./logo2.png";
import "./App.css";
import { Button, Stack, Typography, Snackbar } from "@mui/material";
import { TaskSelector, TaskUpload } from "./components/TaskManager";
import { useState } from "react";

function App() {
  const [error, setError] = useState(null);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>QPED Rubric Creation Tool</p>

        <Stack spacing={2}>
          <Typography variant="text">Upload new Task</Typography>
          <TaskUpload setError={setError} />
          <Button
            variant="outlined"
            href="new_task"
            size="large"
            disableElevation
          >
            {" "}
            create new Task
          </Button>
          <TaskSelector />
        </Stack>
      </header>
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
        message={error}
      />
    </div>
  );
}

export default App;
