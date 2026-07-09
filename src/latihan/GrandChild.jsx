import React from "react";
import GreatGrandChild from "./GreatGrandChild";

function GrandChild() {
  return (
    <div className="ps-10">
      <GreatGrandChild />
    </div>
  );
}

export default GrandChild;