import React from "react";
import { Button, Container } from "../components";

function Contact() {
  return (
    <Container className="py-0 relative">
      <div className="w-full h-[35rem] flex items-start justify-center bg-gray-50 rounded-2xl">
        <h2 className="text-center mt-20 text-4xl font-bold uppercase text-zinc-700">
          MAP Location
        </h2>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex gap-2 flex-col px-10 py-10 bg-white shadow-xl w-4/5 absolute bottom-16 rounded-xl">
          <h2 className="font-bold text-3xl text-zinc-700">
            Location of Our Hotels
          </h2>
          <div className="flex gap-2">
            <p className="text-slate-500 leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eaque
              tempore voluptatibus quasi corrupti dignissimos at a consequuntur
              libero ipsum?
            </p>
            <div className="flex bg-slate-100 rounded-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-5 outline-none"
              />
              <Button
                name="Contact"
                path={"/"}
                className="text-white rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
