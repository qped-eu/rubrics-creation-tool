import { MenuItem, Select } from "@mui/material";
import _ from "lodash";
import { useLocalStorage } from "usehooks-ts";
import general_information from "../../resources/general_information.json";

const { options, defaultIndex } =
  general_information.differentiationBackgrounds;

function Differentiation() {
  const [value, setValue] = useLocalStorage(
    "new_task_differentiationIdx",
    defaultIndex ?? 0
  );
  const handleChange = ({ target: { value } }) => setValue(value);
  return (
    <Select
      value={value}
      id="differentiation_of_background_text"
      onChange={handleChange}
    >
      {_.map(options, (opt, idx) => (
        <MenuItem key={opt} value={idx}>
          {opt}
        </MenuItem>
      ))}
    </Select>
  );
}

export default Differentiation;
