import { Stack } from "@mui/system";
import {
  IconButton,
  Typography,
  TextField,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import { Edit } from "@mui/icons-material";
import { useReadLocalStorage } from "usehooks-ts";
import _ from "lodash";

function ParameterEditable(props) {
  const { title, value, sx, mode, updateValue, caption } = props;
  const allTasks = useReadLocalStorage("all_tasks");
  const [newValue, setNewValue] = useState(value);
  const [open, setOpen] = useState(false);
  const handleChange = ({ target: { value } }) => setNewValue(value);
  return (
    <Stack>
      <Stack direction={"row"}>
        <Typography sx={sx}>
          <strong>{`${title}: `}</strong>
          {value}
        </Typography>

        {mode === "edit" && (
          <IconButton
            sx={{ pt: 0 }}
            onClick={() => {
              setNewValue(value);
              setOpen(true);
            }}
          >
            <Edit color="error" />
          </IconButton>
        )}
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Update parameter</DialogTitle>
          <DialogContent>
            <TextField
              sx={{ mt: 1 }}
              value={newValue}
              onChange={handleChange}
              error={_.map(allTasks, (x) => x.name).includes(newValue)}
              label={
                _.map(allTasks, (x) => x.name).includes(newValue)
                  ? "Name is not unique"
                  : ""
              }
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                updateValue(newValue);
                setOpen(false);
              }}
            >
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
      {mode === "edit" && (
        <Typography variant="caption" display="block" color="error">
          {caption}
        </Typography>
      )}
    </Stack>
  );
}

export default ParameterEditable;
