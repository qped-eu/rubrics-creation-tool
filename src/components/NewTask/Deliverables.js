import {
  Box,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import _ from "lodash";
import { useLocalStorage } from "usehooks-ts";
import general_information from "../../resources/general_information.json";

const { options } = general_information.deliverables;

function Deliverables() {
  const [value, setValue] = useLocalStorage("new_task_deliverables", []);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const handleChange = ({ target: { value } }) =>
    setValue(typeof value === "string" ? value.split(",") : value);
  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id="demo-multiple-deliverables-label">
        Deliverables
      </InputLabel>
      <Select
        labelId="demo-multiple-deliverables-label"
        id="demo-multiple-deliverables"
        multiple
        value={value}
        onChange={handleChange}
        input={
          <OutlinedInput
            id="select-multiple-deliverables"
            label="Deliverables"
          />
        }
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {_.map(selected, (val) => (
              <Chip key={val} label={val} />
            ))}
          </Box>
        )}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
              width: 250,
            },
          },
        }}
      >
        {_.map(options, (option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Deliverables;
