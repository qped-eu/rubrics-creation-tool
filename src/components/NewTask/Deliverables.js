import React from "react";

function Deliverables() {
  return (
    <>
      <h2>QPED deliverables</h2>
      <select id="deliverables_text" multiple="">
        <option value="io1_slides">IO1 – TILEd slides</option>
        <option value="io1_assignment">IO1 - TILEd assignment</option>
        <option value="io2_api">IO2 – PG API</option>
        <option value="io2_ipi">IO2 – PG IPI</option>
        <option value="io2_implementaiton">O2 – PG Implementation</option>
        <option value="io3_syntax_semantics">IO3 – syntax, semantics</option>
        <option value="io3_style">IO3 – style</option>
        <option value="io3_testing">IO3 – testing</option>
        <option value="io3_class_design">IO3 – class design</option>
      </select>
      <p>
        <i>
          press Control or Command
          <br />
          for multiple selection
        </i>
      </p>
    </>
  );
}

export default Deliverables;
