import React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import topics from "../../resources/topics.json";
import { useState } from "react";
import _ from "lodash";
import { Stack } from "@mui/system";

const filterTopics = (text, o, nodeIds) => {
  o.children = _.filter(
    o.children ?? [],
    (child) => !!filterTopics(text, child, nodeIds)
  );
  if (o.children?.length > 0 || o.name.includes(text)) {
    if (o.id) {
      nodeIds.push(o.id);
    } else {
      console.log("No id found:", o);
    }
    return o;
  }
};

function Topic() {
  const [searchText, setSearchText] = useState("");
  let ids = [];
  let data = filterTopics(searchText, _.cloneDeep(topics), ids);
  const [expanded, setExpanded] = useState(ids);
  const [selected, setSelected] = useState(null);
  const handleToggle = (e, nodeIds) => setExpanded(nodeIds);
  const handleSelect = (e, nodeId) => setSelected(nodeId);
  const handleDeselect = () => setSelected(null);
  const handleTextChange = (e) => setSearchText(e.target.value);

  const renderTree = (nodes) => {
    if (!nodes) {
      return null;
    }
    return (
      <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
        {Array.isArray(nodes.children)
          ? nodes.children.map((node) => renderTree(node))
          : null}
      </TreeItem>
    );
  };

  return (
    <>
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">Main Topic (IO-1 Blueprint)</Typography>
        <Button onClick={handleDeselect} disabled={!selected}>
          Deselect
        </Button>
      </Stack>
      <Paper sx={{ my: 1 }}>
        <Box sx={{ display: "flex", alignchildren: "flex-end" }}>
          <Search sx={{ mr: 1, my: 0.5 }} />
          <TextField
            variant="standard"
            sx={{ width: "100%", mr: 1 }}
            value={searchText}
            onChange={handleTextChange}
          />
        </Box>
        <Box
          sx={{
            height: 400,
            mt: 1,
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <TreeView
            selected={selected}
            expanded={expanded}
            onNodeToggle={handleToggle}
            onNodeSelect={handleSelect}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{
              flexGrow: 1,
              mt: 1,
            }}
          >
            {renderTree(data)}
          </TreeView>
        </Box>
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
