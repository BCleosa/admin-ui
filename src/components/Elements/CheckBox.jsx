import React from "react";

function checkBox(props) {
    const { label, id, ...rest } = props;

    return (
        <>
            <input
                className="text-sm accent-primary"
                id={id}
                {...rest}
              />
              <label 
                htmlFor={id} 
                className="text-sm text-gray-01 dark:text-gray-300 ml-6"
            >
                {label}
              </label>
        </>
    );
}

export default checkBox;