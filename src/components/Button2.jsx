import React from "react";
import { Link } from "react-router-dom";

function Button2({ name, path, className = "" }) {
  return (
    <Link
      className={`font-semibold px-8 py-3 rounded-full transition-all duration-200 ease-in-out ${className}`}
      to={path}
    >
      {name}
    </Link>
  );
}

export default Button2;
