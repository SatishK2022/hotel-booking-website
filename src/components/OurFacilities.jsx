import React from "react";
import Container from "./Container";
import Button from "./Button";
import { BsPersonWorkspace } from "react-icons/bs";
import { LuParkingCircle } from "react-icons/lu";
import { MdOutlineFreeBreakfast, MdOutlineElectricBolt } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { FaPersonSwimming } from "react-icons/fa6";
import { CiDumbbell } from "react-icons/ci";
import { TfiMore } from "react-icons/tfi";

const ourFacilities = [
  {
    icon: <BsPersonWorkspace size={25} className="text-green-600" />,
    name: "Private Workspace",
  },
  {
    icon: <LuParkingCircle size={25} className="text-green-600" />,
    name: "Parking Area",
  },
  {
    icon: <MdOutlineFreeBreakfast size={25} className="text-green-600" />,
    name: "Breakfast",
  },
  {
    icon: <FaWifi size={25} className="text-green-600" />,
    name: "Free Wifi",
  },
  {
    icon: <MdOutlineElectricBolt size={25} className="text-green-600" />,
    name: "Free Electricity",
  },
  {
    icon: <FaPersonSwimming size={25} className="text-green-600" />,
    name: "Swimming Pool",
  },
  {
    icon: <CiDumbbell size={25} className="text-green-600" />,
    name: "Exercise Space",
  },
  {
    icon: <TfiMore size={25} className="text-green-600" />,
    name: "Other Service",
  },
];

function OurFacilities() {
  return (
    <Container className="py-20">
      <div className="lg:h-[20rem] grid lg:gap-5 grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1 flex flex-col gap-5">
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-700">
            We provide our best facilities to you.
          </h2>
          <p className="text-zinc-600 text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            quisquam tenetur molestias ipsa dolore voluptate molestiae Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
            vero!
          </p>
          <Button
            name="Contact Now"
            path={"/"}
            className="text-white text-center text-sm lg:text-base"
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-0 py-5 col-span-2">
          {ourFacilities &&
            ourFacilities.map((card) => (
              <div
                key={card.name}
                className="flex flex-col gap-2 py-5 lg:py-0 items-center justify-center border-2 border-slate-200 hover:border-green-600 rounded-md hover:shadow-lg duration-500"
              >
                <p>{card.icon}</p>
                <p className="text-sm">{card.name}</p>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
}

export default OurFacilities;
