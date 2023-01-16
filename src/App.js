import logo from "./logo2.png";
import "./App.css";

import { Button, Stack, Typography, Snackbar } from "@mui/material";
import { TaskSelector, TaskUpload } from "./components/TaskManager";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#485B8F",
    },
    secondary: {
     // main: "#d45113",
        main:"#ffffff"
    },
    success: {
      main: "#8CE789",
    },
  },
});

function App() {
  const [error, setError] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Typography>QPED Rubric Creation Tool</Typography>

          <Stack spacing={1}>
            <TaskUpload setError={setError} />
            <Button
              variant="outlined"
              href="new_task"
              size="large"
              disableElevation
              color="secondary"
               style={{border :'2px solid'}}
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
