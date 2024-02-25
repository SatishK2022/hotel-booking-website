import React from "react";
import Container from "./Container";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container className="bg-zinc-800 text-white py-12 lg:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0">
        <div>
          <Link to={"/"}>
            <img className="w-40 mb-3" src={logo} alt="Logo" />
          </Link>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            aspernatur harum doloribus maxime consectetur velit adipisci, labore
            corporis deserunt perferendis.
          </p>
          <div className="flex items-center gap-3 mt-3">
            <a href="https://www.facebook.com" target="_blank">
              <FaFacebookSquare
                size={25}
                className="cursor-pointer hover:text-blue-500 transition-all duration-300 ease-in-out"
              />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <FaLinkedin
                size={25}
                className="cursor-pointer hover:text-blue-700 transition-all duration-200 ease-in-out"
              />
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <FaSquareXTwitter
                size={25}
                className="cursor-pointer transition-all duration-200 ease-in-out"
              />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <FaInstagram
                size={25}
                className="cursor-pointer hover:text-pink-600 transition-all duration-200 ease-in-out"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:items-center">
          <h2 className="font-semibold mb-4">Home</h2>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <Link
                className="hover:text-green-600 transition-all duration-200 ease-in-out"
                to={"/"}
              >
                Booking
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-600 transition-all duration-200 ease-in-out"
                to={"/"}
              >
                Facilities
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-600 transition-all duration-200 ease-in-out"
                to={"/"}
              >
                Location
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-600 transition-all duration-200 ease-in-out"
                to={"/"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:items-center">
          <h2 className="font-semibold mb-4">Help</h2>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <Link
                className="hover:text-green-600 transition-all duration-200 ease-in-out"
                to={"/"}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-600 transition-all duration-200 ease-in-out"
                to={"/"}
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-600 transition-all duration-200 ease-in-out"
                to={"/"}
              >
                Privicy Policy
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-600 transition-all duration-200 ease-in-out"
                to={"/"}
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:items-center">
          <h2 className="font-semibold mb-4">Get the App</h2>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <Link
                className="hover:text-green-600 transition-all duration-200 ease-in-out"
                to={"/"}
              >
                IOS App
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-600 transition-all duration-200 ease-in-out"
                to={"/"}
              >
                Android App
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
