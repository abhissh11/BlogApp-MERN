import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <>
      <div className="m-7">
        <div className="max-w-lg mx-auto text-center">
          <h1 className=" text-xl font-bold my-7">Sign Up</h1>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-4 justify-center"
          >
            <input
              type="text"
              placeholder="Email"
              id="email"
              className="bg-gray-200 rounded-lg p-3 outline-none text-lg"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Password"
              id="password"
              className="bg-gray-200 rounded-lg p-3 outline-none text-lg"
              onChange={handleChange}
            />
            <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:bg-slate-500 disabled:bg-slate-400  ">
              Sign Up
            </button>
            <h1 className="p-1 text-lg flex flex-row gap-2">
              Have an account?
              <Link to={"/sign-in"}>
                <span className="text-blue-500 hover:underline">Sign In</span>
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
