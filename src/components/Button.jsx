import React from "react";
import { Link } from "react-router-dom";

function Button({ name, path, className = "" }) {
  return (
    <Link
      className={`bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 ease-in-out ${className}`}
      to={path}
    >
      {name}
    </Link>
  );
}

export default Button;
