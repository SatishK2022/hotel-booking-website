import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Button, Container } from "./index";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Facilities",
    path: "/",
  },
  {
    name: "About Us",
    path: "/",
  },
  {
    name: "Location",
    path: "/",
  },
  {
    name: "Contact",
    path: "/",
  },
];

function Header() {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <img className="w-40" src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="flex items-center gap-8">
          {navItems && navItems.length > 0
            ? navItems.map((item) => (
                <li
                  key={item.name}
                  className="font-semibold hover:text-green-600 transition-all duration-200 ease-in-out"
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))
            : null}
        </ul>
        <div className="flex gap-4">
          <Button
            name="Sign Up"
            path={"/signup"}
            className="bg-white hover:bg-zinc-400/10 text-black"
          />
          <Button name="Log In" path={"/login"} />
        </div>
      </div>
    </Container>
  );
}

export default Header;
