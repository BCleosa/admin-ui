import React from "react";
import GrandChild from "./GrandChild";

function Child() {
  return (
    <div className="ps-10">
      <GrandChild />
    </div>
  );
}

export default Child;