import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to={"new_task"}>Create a new task</Link>
        <br></br>
        <Link to={"rubric"}>Fill out a rubric</Link>
      </header>
    </div>
  );
}

export default App;
