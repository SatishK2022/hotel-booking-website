import React from "react";
import { Link } from "react-router-dom";

function Button({ name, path, className = "", type="", ...props }) {
  return (
    <Link
      className={`bg-green-600 hover:bg-green-700 font-semibold px-8 py-3 rounded-full transition-all duration-200 ease-in-out ${className}`}
      to={path}
      type={type}
      {...props}
    >
      {name}
    </Link>
  );
}

export default Button;
