import React from "react";
import { Button, Container, PopularHotels } from "../components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_APP_URL_AUTH;

  const handleLogIn = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in...");

    let form = e.target;
    let formData = new FormData(form);
    let data = Object.fromEntries(formData.entries());

    try {
      const response = await axios({
        method: "POST",
        url: URL + "/users/login",
        withCredentials: true,
        data: data
      });

      if (response.data.errors > 0) {
        setErrors(response.data.errors);
        console.log(errors);
      }

      if (response.data.statusCode === 200) {
        toast.dismiss(toastId);
        toast.success("Login Successfully");
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      toast.error(error.response.data.message);
      toast.dismiss(toastId);
    }
  };

  return (
    <>
      <Container>
        <div className="flex items-center justify-center py-5 lg:py-10">
          <form
            onSubmit={(e) => handleLogIn(e)}
            className="h-auto flex flex-col gap-3 w-full sm:w-2/3 lg:w-1/3"
          >
            <h2 className="text-3xl font-bold text-center text-zinc-700 mb-2">
              Login to Your Account
            </h2>
            <div className="flex flex-col">
              <label htmlFor="username" className="text-base text-zinc-600">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="border-[1.5px] focus:ring-2 outline-none ring-green-300 focus:border-green-300 border-zinc-400 px-4 py-2 rounded-md mt-1"
                placeholder="Enter Your username"
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
