import React from "react";
import { Button, Button2, Container, OurHistory } from "../components";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <Container>
        <div className="flex items-center justify-center py-5">
          <form className="h-auto flex flex-col gap-3 w-full sm:w-2/3 lg:w-1/3">
            <h2 className="text-3xl font-bold text-center text-zinc-700">
              Create an Account
            </h2>
            <div className="flex flex-col">
              <label htmlFor="name" className="text-base text-zinc-600">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-[1.5px] focus:ring-2 outline-none ring-green-300 focus:border-green-300 border-zinc-400 px-4 py-2 rounded-md mt-1"
                placeholder="Enter Your Full Name"
              />
            </div>
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
              name="Create Account"
              type="submit"
              className="text-white rounded-md text-center mt-5"
            />
            <Button2
              name={`Continue with Google`}
              className="bg-blue-100 hover:bg-blue-200 text-blue-600 text-center rounded-md"
            />

            <p className="text-center text-slate-500">
              Already Have An Account? &nbsp;{" "}
              <Link
                to={"/login"}
                className="text-blue-500 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </Container>
      <OurHistory />
    </>
  );
}

export default SignUp;
