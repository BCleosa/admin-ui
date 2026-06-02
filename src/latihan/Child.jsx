import React, { useState } from "react";
import GrandChild from "./GrandChild";

// Component Child
function Child(props) {
  return (
    <div className="ps-10"> 
      <GrandChild count={props.count} />
    </div>
  );
}

export default Child;