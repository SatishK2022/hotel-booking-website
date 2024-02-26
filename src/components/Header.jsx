import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Button, Container } from "./index";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Hotels",
    path: "/all-hotels",
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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <Container>
      <div className="flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <img className="w-32 lg:w-40" src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="hidden lg:flex items-center gap-8">
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
        <div className="hidden lg:flex gap-4">
          <Button
            name="Sign Up"
            path={"/signup"}
            className="text-zinc-800 bg-white hover:bg-zinc-400/10"
          />
          <Button name="Log In" path={"/login"} className="text-white" />
        </div>
        <div className="lg:hidden">
          <FiMenu
            onClick={toggleMenu}
            className="h-6 w-6 cursor-pointer"
            size={30}
          />
        </div>

        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition-all lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <Link to={"/"}>
                      <img className="w-32 lg:w-40" src={logo} alt="Logo" />
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <AiOutlineClose size={30} className="h-6 w-6" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={handleMenuClose}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                    <div className="flex flex-col text-center lg:hidden w-full gap-4">
                      <Button
                        name="Sign Up"
                        path={"/signup"}
                        onClick={handleMenuClose}
                        className="text-zinc-800 bg-zinc-400/10 hover:bg-zinc-400/20 lg:bg-white lg:hover:bg-zinc-400/10"
                      />
                      <Button
                        name="Log In"
                        path={"/login"}
                        onClick={handleMenuClose}
                        className="text-white"
                      />
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Header;
