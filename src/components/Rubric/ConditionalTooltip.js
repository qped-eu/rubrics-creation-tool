import { Tooltip } from "@mui/material";
import { Box } from "@mui/system";

const ConditonalTooltip = ({ show, tooltipText, children }) => {
  if (show) {
    return (
      <Tooltip title={tooltipText}>
        <Box>{children}</Box>
      </Tooltip>
    );
  }
  return children;
};

export default ConditonalTooltip;
