import React from "react";

function Button({ tittle, id, leftIcon, rightIcon, containerClass }) {
  return (
    <button
      id={id}
      className={`${containerClass}  px-7 py-3 rounded-full  group text-black relative z-10 w-fit cursor-pointer overflow-hidden `}
    >
      {leftIcon}
      <span className="text-xs inline-flex font-general uppercase overflow-hidden font-bold ">
        <div>{tittle}</div>
      </span>
      {rightIcon}
    </button>
  );
}

export default Button;
