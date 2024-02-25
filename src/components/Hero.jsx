import { Container } from "./index";
import React, { useState } from "react";
import heroImage from "../assets/home.png";
import { FaPlay } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function Hero() {
  const today = new Date().toISOString().split("T")[0];
  const [checkinDate, setCheckinDate] = useState(today);

  return (
    <Container className="py-0 relative">
      <div className="w-full flex bg-green-50 rounded-t-[45px] ">
        <div className="w-full lg:w-1/2 p-8 flex flex-col lg:pt-36">
          <h1 className="text-4xl lg:text-5xl text-zinc-800 font-extrabold">
            Find your perfecet place to stay
          </h1>
          <p className="text-sm lg:text-base py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            dolor error aspernatur quibusdam molestias ipsum? Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Voluptas placeat ipsum sit
            quia qui ducimus nemo nostrum dignissimos veritatis aperiam!
          </p>
          <button className="flex items-center gap-2 font-semibold">
            <div className="p-2 rounded-full text-sm lg:text-base grid place-items-center bg-white">
              <FaPlay className="text-green-600" size={15} />
            </div>{" "}
            Watch Video
          </button>
        </div>
        <div className="hidden lg:block w-1/2">
          <img src={heroImage} alt="HotelImage" />
        </div>
      </div>

      {/* Booking Section */}
      <div className="hidden lg:flex items-center justify-center">
        <div className="flex items-center justify-between pl-10 bg-white shadow-xl w-4/5 absolute bottom-10 rounded-full">
          <div className="border-r-2 pr-5 border-zinc-200">
            <div className="flex items-center gap-2 font-semibold">
              <MdLocationPin className="text-green-600" size={20} /> Location
            </div>
            <input
              className="ml-7 focus:bg-none focus:outline-none max-w-28 text-sm placeholder:text-sm "
              type="text"
              placeholder="United States"
            />
          </div>
          <div className="border-r-2 px-5 border-zinc-200">
            <div className="flex items-center gap-2 font-semibold">
              <FaCalendarAlt className="text-green-600" size={20} /> Check In
            </div>
            <input
              className="ml-7 focus:bg-none focus:outline-none max-w-28 text-sm placeholder:text-sm "
              type="date"
              placeholder="Select a date"
              value={checkinDate}
              onChange={(e) => setCheckinDate(e.target.value)}
            />
          </div>
          <div className="border-r-2 px-5 border-zinc-200">
            <div className="flex items-center gap-2 font-semibold">
              <FaCalendarAlt className="text-green-600" size={20} /> Check Out
            </div>
            <input
              className="ml-7 focus:bg-none focus:outline-none max-w-28 text-sm placeholder:text-sm "
              type="date"
              placeholder="10 Mar 2024"
            />
          </div>
          <div className="px-5">
            <div className="flex items-center gap-2 font-semibold">
              <FaUser className="text-green-600" size={20} /> Rooms For
            </div>
            <input
              className="ml-7 focus:bg-none focus:outline-none max-w-28 text-sm placeholder:text-sm "
              type="text"
              placeholder="1 Room, 2 Guests"
            />
          </div>
          <div className="flex items-center gap-2 cursor-pointer bg-green-600 hover:bg-green-700 transition-all duration-500 ease-in-out text-white px-12 py-7 rounded-full">
            <IoSearch size={20} /> Search...
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
