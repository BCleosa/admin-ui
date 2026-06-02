// Component Parent
import React, { useState } from "react"; 
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-2xl">
      <p>Nilai count di Parent: {count}</p>
      <Child count={count} />

      <button
        className="p-2 bg-gray-300 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Tambah
      </button>
    </div>
  );
}

export default Parent;