import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

function FeatureTable() {
  function handleTextChange() {}

  function handleApplyComputedPoints() {}

  function handleToolTippToggle() {}

  function examplesChange(feature) {
    return () => {};
  }

  function scoreSet(feature) {
    return () => {};
  }

  return (
    <>
      <Grid item xs={12}>
        <h2>Show Tooltipps</h2>
        <FormGroup>
          <FormControlLabel
            control={<Switch onChange={handleToolTippToggle} />}
            label="Toggle Tooltipps"
          />
        </FormGroup>
        <form>
          <div className="toggle-buttons together">
            <table width="100%">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Negative Examples</th>
                  <th scope="col">
                    1 - Fully
                    <br />
                    Failed
                  </th>
                  <th scope="col">
                    2 - Partly
                    <br />
                    Failed
                  </th>
                  <th scope="col">
                    3 - Partly
                    <br />
                    Satisfied
                  </th>
                  <th scope="col">
                    4 - Fully
                    <br />
                    Satisfied
                  </th>
                  <th scope="col">Positive Examples</th>
                </tr>
              </thead>
              <tbody id="rubrics_table" className="hideToolTipps">
                <tr>
                  <td className="first_col">
                    Modularity
                    <input
                      type="hidden"
                      checked=""
                      name="modularity_not_entered"
                      id="modularity_not_entered"
                      value="true"
                    />
                    <input
                      type="hidden"
                      checked=""
                      name="modularity_disabled"
                      id="modularity_disabled"
                      value="true"
                    />
                  </td>
                  <td>
                    <ul>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            className="fail_example"
                            id="modularity_fail_1"
                            name="modularity_fail_1"
                            data-feature-key="modularity"
                            data-category="fail"
                            data-example-key="1"
                            onChange={examplesChange("modularity")}
                          />
                          Unclear structure
                        </label>
                        <ul>
                          <li>
                            <div className="descLongDiv">
                              Project structure is unclear since the code is not
                              organized in coherent packages, folders, files,
                              etc.
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            className="fail_example"
                            id="modularity_fail_2"
                            name="modularity_fail_2"
                            data-feature-key="modularity"
                            data-category="fail"
                            data-example-key="2"
                            onChange={examplesChange("modularity")}
                          />
                          Unrelated tasks in functions/low cohesion
                        </label>
                        <ul>
                          <li>
                            <div className="descLongDiv">
                              Most of the classes and functions perform many
                              unrelated tasks and/or their bodies are large.
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            className="fail_example"
                            id="modularity_fail_3"
                            name="modularity_fail_3"
                            data-feature-key="modularity"
                            data-category="fail"
                            data-example-key="3"
                            onChange={examplesChange("modularity")}
                          />
                          High degree of coupling
                        </label>
                        <ul>
                          <li>
                            <div className="descLongDiv">
                              Modules (classes, objects) depend heavily on each
                              other to function properly. Modules are not very
                              well encapsulated.
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            className="fail_example"
                            id="modularity_fail_4"
                            name="modularity_fail_4"
                            data-feature-key="modularity"
                            data-category="fail"
                            data-example-key="4"
                            onChange={examplesChange("modularity")}
                          />
                          No information hiding
                        </label>
                        <ul>
                          <li>
                            <div className="descLongDiv">
                              The visibility of methods/fields is not well
                              thought out (fields should usually be private).
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <div className="toggle-buttons together">
                      <label className="radio _1">
                        <input
                          type="radio"
                          className="radio _1"
                          name="modularity_score"
                          value="1"
                          id="modularity_score_1"
                          onChange={scoreSet("modularity")}
                        />
                        1
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="toggle-buttons together">
                      <label className="radio _2">
                        <input
                          type="radio"
                          className="radio _2"
                          name="modularity_score"
                          value="2"
                          id="modularity_score_2"
                          onChange={scoreSet("modularity")}
                        />
                        2
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="toggle-buttons together">
                      <label className="radio _3">
                        <input
                          type="radio"
                          className="radio _3"
                          name="modularity_score"
                          value="3"
                          id="modularity_score_3"
                          onChange={scoreSet("modularity")}
                        />
                        3
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="toggle-buttons together">
                      <label className="radio _4">
                        <input
                          type="radio"
                          className="radio _4"
                          name="modularity_score"
                          value="4"
                          id="modularity_score_4"
                          onChange={scoreSet("modularity")}
                        />
                        4
                      </label>
                    </div>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            className="pass_example"
                            id="modularity_pass_1"
                            name="modularity_pass_1"
                            data-feature-key="modularity"
                            data-category="pass"
                            data-example-key="1"
                            onChange={examplesChange("modularity")}
                          />
                          Clear structure
                        </label>
                        <ul>
                          <li>
                            <div className="descLongDiv">
                              Project structure is clear since the code is
                              organized in coherent packages, folders, files,
                              etc.
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            className="pass_example"
                            id="modularity_pass_2"
                            name="modularity_pass_2"
                            data-feature-key="modularity"
                            data-category="pass"
                            data-example-key="2"
                            onChange={examplesChange("modularity")}
                          />
                          Clear-cut scope of classes and functions/high cohesion
                        </label>
                        <ul>
                          <li>
                            <div className="descLongDiv">
                              Most of the classes and functions perform a
                              limited set of tasks and their bodies are limited
                              in length.
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            className="pass_example"
                            id="modularity_pass_3"
                            name="modularity_pass_3"
                            data-feature-key="modularity"
                            data-category="pass"
                            data-example-key="3"
                            onChange={examplesChange("modularity")}
                          />
                          Low degree of coupling
                        </label>
                        <ul>
                          <li>
                            <div className="descLongDiv">
                              Modules are well encapsulated. They only depend on
                              each other if necessary.
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            className="pass_example"
                            id="modularity_pass_4"
                            name="modularity_pass_4"
                            data-feature-key="modularity"
                            data-category="pass"
                            data-example-key="4"
                            onChange={examplesChange("modularity")}
                          />
                          Information hiding
                        </label>
                        <ul>
                          <li>
                            <div className="descLongDiv">
                              The modifiers for visibility are very well thought
                              out. Each module (class, method, package) only has
                              access to intended methods.
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="first_col">
                    Data Types
                    <input
                      type="hidden"
                      checked=""
                      name="data_types_not_entered"
                      id="data_types_not_entered"
                      value="true"
                    />
                    <input
                      type="hidden"
                      checked=""
                      name="data_types_disabled"
                      id="data_types_disabled"
                      value="true"
                    />
                  </td>
                  <td>
                    <ul>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            className="fail_example"
                            id="data_types_fail_1"
                            name="data_types_fail_1"
                            data-feature-key="data_types"
                            data-category="fail"
                            data-example-key="1"
                            onChange={examplesChange("data_types")}
                          />
                          Wrong data types
                        </label>
                        <ul>
                          <li>
                            <div className="descLongDiv">
                              The choice of some data types is wrong, e.g., an
                              integer is used when a boolean is more suitable.
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            className="fail_example"
                            id="data_types_fail_2"
                            name="data_types_fail_2"
                            data-feature-key="data_types"
                            data-category="fail"
                            data-example-key="2"
                            onChange={examplesChange("data_types")}
                          />
                          Unnecessary complex types
                        </label>
                        <ul>
                          <li>
                            <div className="descLongDiv">
                              Unnecessary use of more complex types. E.g., the
                              result of an integer computation is stored in a
                              double variable.
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            className="fail_example"
                            id="data_types_fail_3"
                            name="data_types_fail_3"
                            data-feature-key="data_types"
                            data-category="fail"
                            data-example-key="3"
                            onChange={examplesChange("data_types")}
                          />
                          Unnecessary type casts
                        </label>
                        <ul>
                          <li>
                            <div className="descLongDiv">
                              Manually casting types unnecessarily. E.g.,
                              (Object) "Hello World!".
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            className="fail_example"
                            id="data_types_fail_4"
                            name="data_types_fail_4"
                            data-feature-key="data_types"
                            data-category="fail"
                            data-example-key="4"
                            onChange={examplesChange("data_types")}
                          />
                          Confusing implicit casting
                        </label>
                        <ul>
                          <li>
                            <div className="descLongDiv">
                              Implicitly using toString() when not intended.
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <div className="toggle-buttons together">
                      <label className="radio _1">
                        <input
                          type="radio"
                          className="radio _1"
                          name="data_types_score"
                          value="1"
                          id="data_types_score_1"
                          onChange={scoreSet("data_types")}
                        />
                        1
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="toggle-buttons together">
                      <label className="radio _2">
                        <input
                          type="radio"
                          className="radio _2"
                          name="data_types_score"
                          value="2"
                          id="data_types_score_2"
                          onChange={scoreSet("data_types")}
                        />
                        2
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="toggle-buttons together">
                      <label className="radio _3">
                        <input
                          type="radio"
                          className="radio _3"
                          name="data_types_score"
                          value="3"
                          id="data_types_score_3"
                          onChange={scoreSet("data_types")}
                        />
                        3
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="toggle-buttons together">
                      <label className="radio _4">
                        <input
                          type="radio"
                          className="radio _4"
                          name="data_types_score"
                          value="4"
                          id="data_types_score_4"
                          onChange={scoreSet("data_types")}
                        />
                        4
                      </label>
                    </div>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            className="pass_example"
                            id="data_types_pass_1"
                            name="data_types_pass_1"
                            data-feature-key="data_types"
                            data-category="pass"
                            data-example-key="1"
                            onChange={examplesChange("data_types")}
                          />
                          Appropriate data types
                        </label>
                        <ul>
                          <li>
                            <div className="descLongDiv">
                              The choice of the data types is correct, e.g., an
                              integer is used when an integer is necessary
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            className="pass_example"
                            id="data_types_pass_2"
                            name="data_types_pass_2"
                            data-feature-key="data_types"
                            data-category="pass"
                            data-example-key="2"
                            onChange={examplesChange("data_types")}
                          />
                          Appropriate data structures
                        </label>
                        <ul>
                          <li>
                            <div className="descLongDiv">
                              Complex data structures are only used when needed,
                              e.g., ArrayList instead of array when size varies
                              dynamically. No unnecessary coercion or casts
                              necessary.
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="first_col">
                    DRY principle
                    <input
                      type="hidden"
                      checked=""
                      name="dry_principle_not_entered"
                      id="dry_principle_not_entered"
                      value="true"
                    />
                    <input
                      type="hidden"
                      checked=""
                      name="dry_principle_disabled"
                      id="dry_principle_disabled"
                      value="true"
                    />
                  </td>
                  <td>
                    <ul>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            className="fail_example"
                            id="dry_principle_fail_1"
                            name="dry_principle_fail_1"
                            data-feature-key="dry_principle"
                            data-category="fail"
                            data-example-key="1"
                            onChange={examplesChange("dry_principle")}
                          />
                          Repeated code
                        </label>
                        <ul>
                          <li>
                            <div className="descLongDiv">
                              Repeat snippets of code quite often.
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            className="fail_example"
                            id="dry_principle_fail_2"
                            name="dry_principle_fail_2"
                            data-feature-key="dry_principle"
                            data-category="fail"
                            data-example-key="2"
                            onChange={examplesChange("dry_principle")}
                          />
                          Magic numbers
                        </label>
                        <ul>
                          <li>
                            <div className="descLongDiv">
                              Frequently used numbers or Strings with a specific
                              meaning and/or derived values are hard-coded
                              (magic numbers).
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <div className="toggle-buttons together">
                      <label className="radio _1">
                        <input
                          type="radio"
                          className="radio _1"
                          name="dry_principle_score"
                          value="1"
                          id="dry_principle_score_1"
                          onChange={scoreSet("dry_principle")}
                        />
                        1
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="toggle-buttons together">
                      <label className="radio _2">
                        <input
                          type="radio"
                          className="radio _2"
                          name="dry_principle_score"
                          value="2"
                          id="dry_principle_score_2"
                          onChange={scoreSet("dry_principle")}
                        />
                        2
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="toggle-buttons together">
                      <label className="radio _3">
                        <input
                          type="radio"
                          className="radio _3"
                          name="dry_principle_score"
                          value="3"
                          id="dry_principle_score_3"
                          onChange={scoreSet("dry_principle")}
                        />
                        3
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="toggle-buttons together">
                      <label className="radio _4">
                        <input
                          type="radio"
                          className="radio _4"
                          name="dry_principle_score"
                          value="4"
                          id="dry_principle_score_4"
                          onChange={scoreSet("dry_principle")}
                        />
                        4
                      </label>
                    </div>
                  </td>
                  <td>
                    <ul>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            className="pass_example"
                            id="dry_principle_pass_1"
                            name="dry_principle_pass_1"
                            data-feature-key="dry_principle"
                            data-category="pass"
                            data-example-key="1"
                            onChange={examplesChange("dry_principle")}
                          />
                          Helper functions are used
                        </label>
                        <ul>
                          <li>
                            <div className="descLongDiv">
                              Helper functions are used in order to reuse code.
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <label>
                          <input
                            type="checkbox"
                            className="pass_example"
                            id="dry_principle_pass_2"
                            name="dry_principle_pass_2"
                            data-feature-key="dry_principle"
                            data-category="pass"
                            data-example-key="2"
                            onChange={examplesChange("dry_principle")}
                          />
                          Use of constants
                        </label>
                        <ul>
                          <li>
                            <div className="descLongDiv">
                              Symbolic (named) constants are used and they are
                              kept in a common place.
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </Grid>
      <Grid spacing={2} item xs={4}>
        <h2>Achieved Points</h2>
        <input type="number" id="task_points" onInput={handleTextChange} />
        <button
          type="button"
          id="apply_computed_points"
          onClick={handleApplyComputedPoints}
        >
          Apply Computed
        </button>
      </Grid>
      <Grid item xs={4}>
        <h2>Calculated Points</h2>
        <input type="text" id="task_calc_points" readOnly />
      </Grid>
      <Grid item xs={4}>
        <h2>Maximum Points</h2>
        <input type="text" id="task_max_points" readOnly />
      </Grid>
    </>
  );
}

export default FeatureTable;
