import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero bg-[#F3F3F3] min-h-screen">
      <div className="hero-content  flex justify-center items-center w-full">
        <div className="card bg-white w-full max-w-lg shrink-0 shadow-2xl ">
          <h1 className="text-3xl font-bold text-center p-5">Login now!</h1>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input bg-[#F3F3F3] w-full"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input bg-[#F3F3F3] w-full"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4 rounded-none">Login</button>
            </fieldset>
            <p>Don't Have Account? <Link className="text-red-600" to="/auth/register">Register Now</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
