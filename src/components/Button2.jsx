import React from "react";
import { Link } from "react-router-dom";

function Button2({ name, path, className = "" }, ...props) {
  return (
    <button
      className={`font-semibold px-8 py-3 rounded-full transition-all duration-200 ease-in-out ${className}`}
      {...props}
    >
      <Link to={path}>{name}</Link>
    </button>
  );
}

export default Button2;
