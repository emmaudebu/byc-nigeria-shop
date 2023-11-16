import React from "react";

const Button = (props) => {
  return (
    <button className={` border-black border-2 ${props.style}`}>
      {props.text} {props.icon}
    </button>
  );
};

export default Button;
