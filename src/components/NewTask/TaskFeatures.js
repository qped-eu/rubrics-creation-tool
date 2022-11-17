import React from "react";

function TaskFeatures() {
  function handleToggleAll() {}
  function handleToggleBasic() {}
  function handleToggleAdvanced() {}
  function handleTogglePG() {}
  return (
    <>
      <h2>Include Features</h2>
      <button onClick={handleToggleAll}>Toggle All</button>
      <button onClick={handleToggleBasic}>Toggle Basic</button>
      <button onClick={handleToggleAdvanced}>Toggle Advanced</button>
      <button onClick={handleTogglePG}>Toggle PG</button>
      <table style={{ tableLayout: "auto", width: "1px" }}>
        <thead>
          <tr>
            <th scope="col">Include</th>
            <th scope="col">Feature</th>
            <th scope="col">Weight</th>
          </tr>
        </thead>
        <tbody id="rubrics_table">
          <tr>
            <td>
              <input
                type="checkbox"
                class="modularity"
                id="modularity"
                name="modularity"
              />
            </td>
            <td class="first_col">Modularity</td>
            <td>
              <input
                type="number"
                value="1"
                class="modularity_weight"
                id="modularity_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                class="data_types"
                id="data_types"
                name="data_types"
              />
            </td>
            <td class="first_col">Data Types</td>
            <td>
              <input
                type="number"
                value="1"
                class="data_types_weight"
                id="data_types_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                class="readability"
                id="readability"
                name="readability"
              />
            </td>
            <td class="first_col">Readability</td>
            <td>
              <input
                type="number"
                value="1"
                class="readability_weight"
                id="readability_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                class="dry_principle"
                id="dry_principle"
                name="dry_principle"
              />
            </td>
            <td class="first_col">DRY principle</td>
            <td>
              <input
                type="number"
                value="1"
                class="dry_principle_weight"
                id="dry_principle_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" class="flow" id="flow" name="flow" />
            </td>
            <td class="first_col">Flow</td>
            <td>
              <input
                type="number"
                value="1"
                class="flow_weight"
                id="flow_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                class="api_documentation"
                id="api_documentation"
                name="api_documentation"
              />
            </td>
            <td class="first_col">API Documentation</td>
            <td>
              <input
                type="number"
                value="1"
                class="api_documentation_weight"
                id="api_documentation_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                class="correctness"
                id="correctness"
                name="correctness"
              />
            </td>
            <td class="first_col">Correctness</td>
            <td>
              <input
                type="number"
                value="1"
                class="correctness_weight"
                id="correctness_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                class="robustness"
                id="robustness"
                name="robustness"
              />
            </td>
            <td class="first_col">Robustness</td>
            <td>
              <input
                type="number"
                value="1"
                class="robustness_weight"
                id="robustness_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                class="test_traceability"
                id="test_traceability"
                name="test_traceability"
              />
            </td>
            <td class="first_col">Test Traceability</td>
            <td>
              <input
                type="number"
                value="1"
                class="test_traceability_weight"
                id="test_traceability_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                class="test_completeness"
                id="test_completeness"
                name="test_completeness"
              />
            </td>
            <td class="first_col">Test Completeness</td>
            <td>
              <input
                type="number"
                value="1"
                class="test_completeness_weight"
                id="test_completeness_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                class="pg_external_design"
                id="pg_external_design"
                name="pg_external_design"
              />
            </td>
            <td class="first_col">PG - Extern - Design</td>
            <td>
              <input
                type="number"
                value="1"
                class="pg_external_design_weight"
                id="pg_external_design_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                class="pg_external_specification"
                id="pg_external_specification"
                name="pg_external_specification"
              />
            </td>
            <td class="first_col">PG - Extern - Specification</td>
            <td>
              <input
                type="number"
                value="1"
                class="pg_external_specification_weight"
                id="pg_external_specification_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                class="pg_external_tests"
                id="pg_external_tests"
                name="pg_external_tests"
              />
            </td>
            <td class="first_col">PG - Extern - Tests</td>
            <td>
              <input
                type="number"
                value="1"
                class="pg_external_tests_weight"
                id="pg_external_tests_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                class="pg_internal_analysis"
                id="pg_internal_analysis"
                name="pg_internal_analysis"
              />
            </td>
            <td class="first_col">PG - Intern - Analaysis</td>
            <td>
              <input
                type="number"
                value="1"
                class="pg_internal_analysis_weight"
                id="pg_internal_analysis_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                class="pg_internal_design"
                id="pg_internal_design"
                name="pg_internal_design"
              />
            </td>
            <td class="first_col">PG - Intern - Design</td>
            <td>
              <input
                type="number"
                value="1"
                class="pg_internal_design_weight"
                id="pg_internal_design_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                class="pg_internal_specification"
                id="pg_internal_specification"
                name="pg_internal_specification"
              />
            </td>
            <td class="first_col">PG - Intern - Specification</td>
            <td>
              <input
                type="number"
                value="1"
                class="pg_internal_specification_weight"
                id="pg_internal_specification_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                class="pg_internal_tests"
                id="pg_internal_tests"
                name="pg_internal_tests"
              />
            </td>
            <td class="first_col">PG - Intern - Tests</td>
            <td>
              <input
                type="number"
                value="1"
                class="pg_internal_tests_weight"
                id="pg_internal_tests_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                class="pg_implementation_analysis"
                id="pg_implementation_analysis"
                name="pg_implementation_analysis"
              />
            </td>
            <td class="first_col">PG - Impl - Analysis</td>
            <td>
              <input
                type="number"
                value="1"
                class="pg_implementation_analysis_weight"
                id="pg_implementation_analysis_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                class="pg_implementation_design"
                id="pg_implementation_design"
                name="pg_implementation_design"
              />
            </td>
            <td class="first_col">PG - Impl - Design</td>
            <td>
              <input
                type="number"
                value="1"
                class="pg_implementation_design_weight"
                id="pg_implementation_design_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                class="pg_implementation_coding"
                id="pg_implementation_coding"
                name="pg_implementation_coding"
              />
            </td>
            <td class="first_col">PG - Impl - Coding</td>
            <td>
              <input
                type="number"
                value="1"
                class="pg_implementation_coding_weight"
                id="pg_implementation_coding_weight"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="checkbox"
                class="pg_implementation_tests"
                id="pg_implementation_tests"
                name="pg_implementation_tests"
              />
            </td>
            <td class="first_col">PG - Impl - Tests</td>
            <td>
              <input
                type="number"
                value="1"
                class="pg_implementation_tests_weight"
                id="pg_implementation_tests_weight"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TaskFeatures;
