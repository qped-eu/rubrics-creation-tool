import logo from "./logo2.png";
import "./App.css";

import { Button, Stack, Typography, Snackbar } from "@mui/material";
import { TaskSelector, TaskUpload } from "./components/TaskManager";
import { useState } from "react";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import { createTheme, ThemeProvider } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import { blue } from "@mui/material/colors";


const theme = createTheme({
  palette: {
    primary: {
      light:"#f27a41",
      main: "#e36022",
      dark: "#c24408",
    },
    secondary: {
     // main: "#d45113",
        main:"#ffffff",
        dark:"#fefefe",
    },
    success: {
      light: "#76e072",
      main: "#50d14b",
      dark: "#2bad4e",
      contrastText: "#ffff",
    },
  },
  typography:{
    fontFamily: 'sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    
  }
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
              size="small"
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
