import React from "react";
import { FaStar } from "react-icons/fa";

function Card({ address, name, image, desc, rating }) {
  return (
    <div className="w-full h-[30rem] hover:shadow-xl duration-500 ease-in-out transition-all bg-zinc-100/50 rounded-2xl ">
      <div className="rounded-t-2xl overflow-hidden">
        <img
          src={image}
          alt="Image"
          className="w-full h-80 hover:scale-105 duration-500 object-cover rounded-t-2xl"
        />
      </div>
      <div className="flex flex-col p-5 gap-2">
        <p className="text-green-700 text-sm font-semibold">{address}</p>
        <h3 className="text-2xl font-semibold">{name}</h3>
        <div className="flex items-center gap-2">
          <p className="text-sm overflow-hidden">{desc}</p>
          <div className="flex items-center justify-between font-semibold">
            {rating}&nbsp; <FaStar className="text-yellow-500" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
