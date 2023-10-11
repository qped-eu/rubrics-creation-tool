import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useLocalStorage } from "usehooks-ts";

const TooltipsControl = () => {
  const [showTooltips, setShowTooltips] = useLocalStorage(
    "rubric_showTooltips",
    false
  );

  const handleClick = () => {
    setShowTooltips((checked) => !checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch sx={{ ml: 1 }} checked={showTooltips} onClick={handleClick} />
        }
        label="Toggle tooltips"
      />
    </FormGroup>
  );
};

export default TooltipsControl;
