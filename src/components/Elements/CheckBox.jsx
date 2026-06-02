import React from "react";

function CheckBox(props) {
  const { label, id, ...rest } = props;

  return (
    <div className="flex items-center gap-2">
      <input
        id={id}
        className="w-4 h-4 accent-primary cursor-pointer"
        {...rest}
      />
      <label htmlFor={id} className="text-sm text-gray-01 cursor-pointer">
        {label}
      </label>
    </div>
  );
}

export default CheckBox;