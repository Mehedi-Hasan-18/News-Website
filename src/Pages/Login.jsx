
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const {signIn,setUser} = useContext(AuthContext);
  const [error,setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate()

  const handleLogIn = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email,password)
    .then(res=>{
      setUser(res.user)
      e.target.reset();
      navigate(location?.state? location.state : '/')
    })
    .catch(err=>{
      setError({...error,login:err.code})
    })
    
  }
  return (
    <div className="hero bg-[#F3F3F3] min-h-screen">
      <div className="hero-content  flex justify-center items-center w-full">
        <div className="card bg-white w-full max-w-lg shrink-0 shadow-2xl ">
          <h1 className="text-3xl font-bold text-center p-5">Login now!</h1>
          <div className="card-body">
            <form onSubmit={handleLogIn} className="fieldset">
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
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <p>
                {
                  error.login && <p className="text-red-600">{error.login}</p>
                }
              </p>
              <button className="btn btn-neutral mt-4 rounded-none">
                Login</button>
            </form>
            <p>Don't Have Account? <Link className="text-red-600" to="/auth/register">Register Now</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
