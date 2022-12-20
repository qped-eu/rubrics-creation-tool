import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { FEATURES } from '../../resources/features.js';

function createData(name) {
  return {
    name
  }; 
}
 
const row_objs = FEATURES;

const rows = row_objs.map((elem) => {
  createData(elem.name);
});

const old_rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'include',
    numeric: false,
    disablePadding: true,
    label: 'Include',
  },
  {
    id: 'feature',
    numeric: true,
    disablePadding: false,
    label: 'Feature',
  },
  {
    id: 'weight',
    numeric: true,
    disablePadding: false,
    label: 'Weight',
  }
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount } =
    props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
          >
            {/* <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel> */}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Features
        </Typography>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [selected, setSelected] = React.useState([]);
  const [dense, setDense] = React.useState(false);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
              {(
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                    </TableRow>
                  )}
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}




















































/*import React from "react";
*
*function TaskFeatures() {
*  function handleToggleAll() {}
*  function handleToggleBasic() {}
*  function handleToggleAdvanced() {}
*  function handleTogglePG() {}
*  return (
*    <>
*      <h2>Include Features</h2>
*      <button onClick={handleToggleAll}>Toggle All</button>
*      <button onClick={handleToggleBasic}>Toggle Basic</button>
*      <button onClick={handleToggleAdvanced}>Toggle Advanced</button>
*      <button onClick={handleTogglePG}>Toggle PG</button>
*      <table style={{ tableLayout: "auto", width: "1px" }}>
*        <thead>
*          <tr>
*            <th scope="col">Include</th>
*            <th scope="col">Feature</th>
*            <th scope="col">Weight</th>
*          </tr>
*        </thead>
*        <tbody id="rubrics_table">
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="modularity"
*                id="modularity"
*                name="modularity"
*              />
*            </td>
*            <td class="first_col">Modularity</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="modularity_weight"
*                id="modularity_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="data_types"
*                id="data_types"
*                name="data_types"
*              />
*            </td>
*            <td class="first_col">Data Types</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="data_types_weight"
*                id="data_types_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="readability"
*                id="readability"
*                name="readability"
*              />
*            </td>
*            <td class="first_col">Readability</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="readability_weight"
*                id="readability_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="dry_principle"
*                id="dry_principle"
*                name="dry_principle"
*              />
*            </td>
*            <td class="first_col">DRY principle</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="dry_principle_weight"
*                id="dry_principle_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input type="checkbox" class="flow" id="flow" name="flow" />
*            </td>
*            <td class="first_col">Flow</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="flow_weight"
*                id="flow_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="api_documentation"
*                id="api_documentation"
*                name="api_documentation"
*              />
*            </td>
*            <td class="first_col">API Documentation</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="api_documentation_weight"
*                id="api_documentation_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="correctness"
*                id="correctness"
*                name="correctness"
*              />
*            </td>
*            <td class="first_col">Correctness</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="correctness_weight"
*                id="correctness_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="robustness"
*                id="robustness"
*                name="robustness"
*              />
*            </td>
*            <td class="first_col">Robustness</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="robustness_weight"
*                id="robustness_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="test_traceability"
*                id="test_traceability"
*                name="test_traceability"
*              />
*            </td>
*            <td class="first_col">Test Traceability</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="test_traceability_weight"
*                id="test_traceability_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="test_completeness"
*                id="test_completeness"
*                name="test_completeness"
*              />
*            </td>
*            <td class="first_col">Test Completeness</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="test_completeness_weight"
*                id="test_completeness_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="pg_external_design"
*                id="pg_external_design"
*                name="pg_external_design"
*              />
*            </td>
*            <td class="first_col">PG - Extern - Design</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="pg_external_design_weight"
*                id="pg_external_design_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="pg_external_specification"
*                id="pg_external_specification"
*                name="pg_external_specification"
*              />
*            </td>
*            <td class="first_col">PG - Extern - Specification</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="pg_external_specification_weight"
*                id="pg_external_specification_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="pg_external_tests"
*                id="pg_external_tests"
*                name="pg_external_tests"
*              />
*            </td>
*            <td class="first_col">PG - Extern - Tests</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="pg_external_tests_weight"
*                id="pg_external_tests_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="pg_internal_analysis"
*                id="pg_internal_analysis"
*                name="pg_internal_analysis"
*              />
*            </td>
*            <td class="first_col">PG - Intern - Analaysis</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="pg_internal_analysis_weight"
*                id="pg_internal_analysis_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="pg_internal_design"
*                id="pg_internal_design"
*                name="pg_internal_design"
*              />
*            </td>
*            <td class="first_col">PG - Intern - Design</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="pg_internal_design_weight"
*                id="pg_internal_design_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="pg_internal_specification"
*                id="pg_internal_specification"
*                name="pg_internal_specification"
*              />
*            </td>
*            <td class="first_col">PG - Intern - Specification</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="pg_internal_specification_weight"
*                id="pg_internal_specification_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="pg_internal_tests"
*                id="pg_internal_tests"
*                name="pg_internal_tests"
*              />
*            </td>
*            <td class="first_col">PG - Intern - Tests</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="pg_internal_tests_weight"
*                id="pg_internal_tests_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="pg_implementation_analysis"
*                id="pg_implementation_analysis"
*                name="pg_implementation_analysis"
*              />
*            </td>
*            <td class="first_col">PG - Impl - Analysis</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="pg_implementation_analysis_weight"
*                id="pg_implementation_analysis_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="pg_implementation_design"
*                id="pg_implementation_design"
*                name="pg_implementation_design"
*              />
*            </td>
*            <td class="first_col">PG - Impl - Design</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="pg_implementation_design_weight"
*                id="pg_implementation_design_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="pg_implementation_coding"
*                id="pg_implementation_coding"
*                name="pg_implementation_coding"
*              />
*            </td>
*            <td class="first_col">PG - Impl - Coding</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="pg_implementation_coding_weight"
*                id="pg_implementation_coding_weight"
*              />
*            </td>
*          </tr>
*          <tr>
*            <td>
*              <input
*                type="checkbox"
*                class="pg_implementation_tests"
*                id="pg_implementation_tests"
*                name="pg_implementation_tests"
*              />
*            </td>
*            <td class="first_col">PG - Impl - Tests</td>
*            <td>
*              <input
*                type="number"
*                value="1"
*                class="pg_implementation_tests_weight"
*                id="pg_implementation_tests_weight"
*              />
*            </td>
*          </tr>
*        </tbody>
*      </table>
*    </>
*  );
*}
*
*export default TaskFeatures;
*/
