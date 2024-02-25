import React from "react";
import { Button, Container, PopularHotels } from "../components";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Container>
        <div className="flex items-center justify-center py-5 lg:py-10">
          <form className="h-auto flex flex-col gap-3 w-full sm:w-2/3 lg:w-1/3">
            <h2 className="text-3xl font-bold text-center text-zinc-700 mb-2">
              Login to Your Account
            </h2>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-base text-zinc-600">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="border-[1.5px] focus:ring-2 outline-none ring-green-300 focus:border-green-300 border-zinc-400 px-4 py-2 rounded-md mt-1"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-base text-zinc-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="border-[1.5px] focus:ring-2 outline-none ring-green-300 focus:border-green-300 border-zinc-400 px-4 py-2 rounded-md mt-1"
                placeholder="Enter Your Password"
              />
            </div>
            <Button
              name="Login now"
              type="submit"
              className="text-white rounded-md text-center mt-5"
            />

            <p className="text-center text-slate-500">
              Don't Have An Account? &nbsp;{" "}
              <Link
                to={"/signup"}
                className="text-blue-500 font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </Container>
      <PopularHotels />
    </>
  );
}

export default Login;
