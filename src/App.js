import logo from "./logo2.png";
import "./App.css";
import { Link } from "react-router-dom";
import { Button, Stack, ButtonGroup, Box, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"
import Dropzone from "react-dropzone";
import { color, textAlign } from "@mui/system";




 

function App(
  handleFiles
) {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          QPED Rubric Creation Tool
        </p>

       <Stack spacing={2}>
      <Grid xs={6} >
        <Typography variant="text">Upload new Task</Typography>
        <div className="buttons" style={{ width: "90%" , backgroundColor:"#1a263d" }} >
         
          <Dropzone onDrop={handleFiles} >
            {({ getRootProps, getInputProps }) => (
              <div id="fileDragOverField" {...getRootProps()}>
                <input {...getInputProps()} type="file" id="input_file" />
                <label>
                  <strong style={{ cursor: "pointer" }}>Choose a file</strong>{" "}
                  or drag it here
                </label>
              </div>
            )}
          </Dropzone>
          
        </div>
        <Button variant="outlined" href="new_task" size="large" disableElevation> create new Task</Button>
      </Grid>
     

      <Button variant="contained" href="rubric" size="large" disableElevation>Fill out Rubric</Button>

      </Stack>
      


        
        
      </header>
    </div>
  );
}

export default App;
