import React from "react";
import { Link } from "react-router-dom";

function Button({ name, path, className = "", type="", ...props }) {
  return (
    <button
      className={`bg-green-600 hover:bg-green-700 font-semibold px-8 py-3 rounded-full transition-all duration-200 ease-in-out ${className}`}
      {...props}
    >
      <Link to={path} type={type} >
        {name}
      </Link>
    </button>
  );
}

export default Button;
