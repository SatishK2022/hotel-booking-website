import React from "react";
import Container from "./Container";
import ourHistoryImg from "../assets/history.png";
import Button from "./Button";

function OurHistory() {
  return (
    <Container>
      <div className="flex items-center gap-8 bg-green-50 rounded-2xl">
        <div className="w-1/2">
          <img src={ourHistoryImg} alt="Hotel Image" />
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-5xl font-bold text-zinc-700">
            Discover Our History
          </h2>
          <div className="py-6 flex flex-col gap-4 mb-4">
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
          <Button name="Explore More" path={"/"} className="text-white" />
        </div>
      </div>
    </Container>
  );
}

export default OurHistory;
