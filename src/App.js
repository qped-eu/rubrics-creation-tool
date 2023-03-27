import logo from "./logo2.png";
import "./App.css";

import { Button, Stack, Typography, Snackbar } from "@mui/material";
import { TaskSelector, TaskUpload } from "./components/TaskManager";
import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import customTheme from "./CustomTheme";

function App() {
  const [error, setError] = useState(null);
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Typography>QPED Rubric Creation Tool</Typography>

          <Stack spacing={1}>
            <TaskUpload setError={setError} />

            <Button
              variant="outlined"
              href="#/new_task"
              size="small"
              disableElevation
              color="secondary"
              style={{ border: "2px solid" }}
              sx={{ height: 50 }}
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
    </ThemeProvider>
  );
}

export default App;
