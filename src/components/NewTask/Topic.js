import React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { Box, Paper, TextField, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";

const data = {
  id: "root",
  name: "Parent",
  children: [
    {
      id: "1",
      name: "Child - 1",
    },
    {
      id: "3",
      name: "Child - 3",
      children: [
        {
          id: "4",
          name: "Child - 4",
        },
      ],
    },
  ],
};

function Topic() {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <>
      <Typography variant="h6">Main Topic (IO-1 Blueprint)</Typography>
      <Paper sx={{ height: 400, mt: 1 }}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Search sx={{ mr: 1, my: 0.5 }} />
          <TextField variant="standard" sx={{ width: "100%", mr: 1 }} />
        </Box>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ flexGrow: 1, overflowY: "auto", mt: 1 }}
        >
          {renderTree(data)}
        </TreeView>
      </Paper>
      <Typography>
        Scroll to view all concepts. You can browse throuugh the sub concepts
        hierarchically.
      </Typography>
      <Typography>
        Start typing in the search field to search the concepts. This will only
        show tags containing the search term incluing all super concepts.
      </Typography>
    </>
  );
}

export default Topic;
