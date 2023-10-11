import { MenuItem, Select } from "@mui/material";
import _ from "lodash";
import { useLocalStorage } from "usehooks-ts";
import general_information from "../../resources/general_information.json";

const { options, defaultIndex } = general_information.courses;

function Course() {
  const [value, setValue] = useLocalStorage(
    "new_task_courseIdx",
    defaultIndex ?? 0
  );
  const handleChange = ({ target: { value } }) => setValue(value);

  return (
    <Select
      value={value}
      inputProps={{ "aria-label": "Without label" }}
      onChange={handleChange}
    >
      {_.map(options, (option, idx) => (
        <MenuItem key={option} value={idx}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
}

export default Course;
