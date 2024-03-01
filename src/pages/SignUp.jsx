import React, { useState } from "react";
import { Button, Button2, Container, OurHistory } from "../components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function SignUp() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const URL = import.meta.env.VITE_APP_URL_AUTH;

  const handleSignUp = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Signing up...");

    let form = e.target;
    let formData = new FormData(form);
    let data = Object.fromEntries(formData.entries());

    try {
      const response = await axios({
        method: "POST",
        url: URL + "/users/register",
        withCredentials: true,
        data: data
      });

      if (response.data.errors > 0) {
        setErrors(response.data.errors);
        console.log(errors);
      }

      if (response.data.statusCode === 200) {
        toast.dismiss(toastId);
        toast.success("Signup Successfully");
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      toast.dismiss(toastId);
    }
  };

  return (
    <>
      <Container>
        <div className="flex items-center justify-center py-5">
          <form
            onSubmit={(e) => handleSignUp(e)}
            className="h-auto flex flex-col gap-3 w-full sm:w-2/3 lg:w-1/3"
          >
            <h2 className="text-3xl font-bold text-center text-zinc-700">
              Create an Account
            </h2>
            <div className="flex flex-col">
              <label htmlFor="username" className="text-base text-zinc-600">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                required
                className="border-[1.5px] focus:ring-2 outline-none ring-green-300 focus:border-green-300 border-zinc-400 px-4 py-2 rounded-md mt-1"
                placeholder="Enter Your username"
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
                required
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
                required
                className="border-[1.5px] focus:ring-2 outline-none ring-green-300 focus:border-green-300 border-zinc-400 px-4 py-2 rounded-md mt-1"
                placeholder="Enter Your Password"
              />
            </div>
            <Button
              name="Create Account"
              type="submit"
              className="text-white rounded-md text-center mt-5"
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
