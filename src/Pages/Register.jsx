import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createNewUser,UpdateUserData,setUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const [error,setError] = useState({});

  const handleRegister = (e) => {
    e.preventDefault();
    const Name = e.target.name.value;
    if(Name.length<5){
      setError({...error,nameError:"Name Must be More than 5 letter"})
      return
    }
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createNewUser(email, password).then((res) => {
      setUser(res.user)
      UpdateUserData({displayName:Name,photoURL:photoURL})
      
      e.target.reset()
      navigate("/")
    });
  };

  return (
    <div className="hero bg-[#F3F3F3] min-h-screen">
      <div className="hero-content  flex justify-center items-center w-full">
        <div className="card bg-white w-full max-w-lg shrink-0 shadow-2xl ">
          <h1 className="text-3xl font-bold text-center p-5">Register now!</h1>
          <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input
                type="name"
                name="name"
                className="input bg-[#F3F3F3] w-full"
                placeholder="Name"
              />
              {
                error.nameError && <p className="text-red-600">{error.nameError}</p>
              }
              <label className="label">Photo URL</label>
              <input
                type="Photo URL"
                name="photoURL"
                className="input bg-[#F3F3F3] w-full"
                placeholder="Photo URL"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input bg-[#F3F3F3] w-full"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input bg-[#F3F3F3] w-full"
                placeholder="Password"
              />
              <button className="btn btn-neutral mt-4 rounded-none">
                Register
              </button>
            </form>
            <p>
              Already Have An Account?{" "}
              <Link className="text-red-600" to="/auth/login">
                Login Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
