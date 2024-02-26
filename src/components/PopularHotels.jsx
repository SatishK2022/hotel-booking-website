import React, { useEffect, useState } from "react";
import { Button2, Card, Container } from "./index";

function PopularHotels() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotels();
  }, []);

  async function getHotels() {
    const res = await fetch(
      "https://cbs-paradise-waste-purple.trycloudflare.com/api/v1/hotels"
    );
    const data = await res.json();
    const limitData = data.slice(0, 4);
    setHotels(limitData);
  }

  return (
    <Container className="py-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl lg:text-4xl font-bold text-zinc-700">
          Our Most Popular Hotels
        </h1>
        <div className="flex items-center justify-between">
          <p className="w-full lg:w-1/2 text-sm lg:text-base text-zinc-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa quae
            alias nostrum ab quasi? At, repellat! Sit voluptatem ullam
            laboriosam!
          </p>
          <Button2
            name="View All"
            path={"/all-hotels"}
            className="bg-green-100 hover:bg-green-200 text-green-600 hidden lg:block"
          />
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-between">
          {hotels &&
            hotels.map((hotel) => (
              <Card
                name={hotel?.name}
                address={hotel?.address}
                image={hotel?.images[0]}
                desc={hotel?.description}
                rating={hotel?.rating}
              />
            ))}
        </div>
      </div>
    </Container>
  );
}

export default PopularHotels;
