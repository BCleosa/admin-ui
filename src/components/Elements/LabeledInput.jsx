import React from "react";
import Input from "./Input";

function LabeledInput(props) {
  const { label, id, ...rest } = props;

  return (
    <>
      <label htmlFor={id} className="block text-sm mb-2 text-gray-900 dark:text-gray-200">
        {label}
      </label>
      <Input id={id} {...rest} />
    </>
  );
}

export default LabeledInput;