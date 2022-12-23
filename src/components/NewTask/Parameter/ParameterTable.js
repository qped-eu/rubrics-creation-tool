import React from "react";
import _ from "lodash";
import {
  Grid,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const IncludedFeatureTable = ({ title, values }) => {
  return (
    <Table
      size={"small"}
      sx={{ tableLayout: "auto", width: "100%", mt: "16px" }}
    >
      <TableHead>
        <TableRow>
          <TableCell colSpan={2} sx={{ textAlign: "center" }}>
            <strong>{title}</strong>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Feature</TableCell>
          <TableCell>Weight</TableCell>
        </TableRow>
      </TableHead>
      <TableBody id="rubrics_table">
        {_.map(values, (v, i) => (
          <TableRow key={`tr-${i}`}>
            <TableCell>
              <Typography>{v.name}</Typography>
            </TableCell>
            <TableCell>
              <Typography>{v.weight}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

function ParameterTable(props) {
  const { title, basic, advanced, pg } = props;
  return (
    <>
      <Typography>
        <strong>{title + ":"}</strong>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ p: 2 }}>
          <IncludedFeatureTable title={"Basic"} values={basic} />
          <IncludedFeatureTable title={"Advanced"} values={advanced} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 2 }}>
          <IncludedFeatureTable title={"Procedural guidance"} values={pg} />
        </Grid>
      </Grid>
    </>
  );
}

export default ParameterTable;
