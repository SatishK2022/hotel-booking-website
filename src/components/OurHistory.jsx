import React from "react";
import Container from "./Container";
import ourHistoryImg from "../assets/history.png";
import Button from "./Button";

function OurHistory() {
  return (
    <Container className="py-20">
      <div className="flex flex-col lg:flex-row pb-5 lg:pb-0 items-center lg:gap-8 bg-green-50 rounded-2xl">
        <div className="w-full lg:w-1/2">
          <img
            src={ourHistoryImg}
            alt="Hotel Image"
            className="w-full h-[15rem] lg:h-full object-cover rounded-md lg:rounded-none"
          />
        </div>
        <div className="w-full lg:w-1/2 p-4 lg:p-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-zinc-700">
            Discover Our History
          </h2>
          <div className="py-6 text-sm lg:text-base flex flex-col gap-4 mb-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              consequuntur. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Quia, totam?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              perspiciatis ex delectus ab, labore consectetur impedit nobis est
              minima reiciendis! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Officiis, laboriosam!
            </p>
          </div>
          <Button
            name="Explore More"
            path={"/"}
            className="text-white text-sm lg:text-base"
          />
        </div>
      </div>
    </Container>
  );
}

export default OurHistory;
