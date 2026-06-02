import React, { useState } from "react";
import GreatGrandChild from "./GreatGrandChild";

// Component GrandChild
function GrandChild(props) {
  return (
    <div className="ps-10">
      <GreatGrandChild count={props.count} />
    </div>
  );
}

export default GrandChild;
