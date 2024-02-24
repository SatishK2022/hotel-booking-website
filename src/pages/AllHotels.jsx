import React, { useState, useEffect } from "react";
import { Container, Card } from "../components";

function AllHotels() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotels();
  }, []);

  async function getHotels() {
    const res = await fetch(
      "https://cbs-paradise-waste-purple.trycloudflare.com/api/v1/hotels"
    );
    const data = await res.json();
    setHotels(data);
  }

  return (
    <Container>
      <h2 className="font-bold text-3xl text-zinc-700 text-center py-8">
        All Hotels ({hotels.length})
      </h2>
      <div className="w-full flex flex-wrap gap-5 items-center justify-between>">
        {hotels &&
          hotels.map((hotel) => (
            <Card
              name={hotel?.name}
              address={hotel?.address}
              image={hotel?.images[0]}
              desc={hotel?.description.slice(0, 80)}
              rating={hotel?.rating}
            />
          ))}
      </div>
    </Container>
  );
}

export default AllHotels;
