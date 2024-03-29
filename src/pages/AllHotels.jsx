import React, { useState, useEffect } from "react";
import { Container, Card } from "../components";
import axios from "axios";

function AllHotels() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotels();
  }, []);

  async function getHotels() {
    const res = await axios(import.meta.env.VITE_APP_URL +"/api/v1/hotels");
    const data = await res.data;
    setHotels(data);
  }

  return (
    <Container>
      <h2 className="font-bold text-3xl text-zinc-700 text-center py-8">
        All Hotels ({hotels.length})
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-between>">
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
