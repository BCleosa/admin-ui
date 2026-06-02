import React, { useState } from "react";

// Component GreatGrandChild
function GreatGrandChild(props) {
  return (
    <div className="ps-10">
      <p>Nilai count di GreatGrandChild dari GrandChild: {props.count}</p>
    </div>
  );
}

export default GreatGrandChild;