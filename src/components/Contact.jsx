import React from "react";
import { Button, Container } from "../components";

function Contact() {
  return (
    <Container className="py-0 relative">
      {/* Location of our hotels */}
      <div className="flex flex-col lg:flex-row items-center justify-center pb-10 lg:pb-0">
        <div className="flex gap-2 flex-col p-4 lg:px-10 lg:py-10 bg-white shadow-xl w-full lg:w-4/5 lg:absolute lg:bottom-16 rounded-xl">
          <h2 className="font-bold text-3xl text-zinc-700">
            Location of Our Hotels
          </h2>
          <div className="flex flex-col lg:flex-row gap-2">
            <p className="text-slate-500 text-sm lg:text-base leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eaque
              tempore voluptatibus quasi corrupti dignissimos at a consequuntur
              libero ipsum?
            </p>
            <div className="flex items-center justify-between bg-slate-100 rounded-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-3 lg:px-5 outline-none"
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

      <div className="w-full h-[25rem] lg:h-[35rem] flex items-start justify-center bg-gray-50 rounded-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.732803890473!2d77.28760567414375!3d28.48759239065031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce72b903f42e3%3A0x8ee8917bb615ecb0!2sGoldfinch%20Hotel%20Delhi%20NCR!5e0!3m2!1sen!2sin!4v1708746483099!5m2!1sen!2sin"
          className="w-full h-full rounded-xl"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
}

export default Contact;
