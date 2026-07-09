import React from "react";

function Input(props) {
  const {
    id,
    icon = false,
    backgroundColor = false,
    border = "border-gray-03",
    ...rest
  } = props;

  return (
    <>
      <input
        className={`py-3 pl-4 text-sm rounded-md w-full border text-gray-01 
          dark:text-gray-100 dark:bg-transparent dark:border-gray-500 dark:placeholder-gray-500
          ${border} focus:border-black dark:focus:border-white focus:outline-none focus:ring-0 
          ${backgroundColor || ""}
        `}
        id={id}
        {...rest}
      />
    </>
  );
}

export default Input;