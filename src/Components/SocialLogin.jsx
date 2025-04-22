import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold">Login With</h2>
      <div className="flex flex-col gap-3 mt-3">
        <button className="text-blue-600 btn btn-ghost bg-[#E7E7E7]">
          <span className="text-xl">
            <FaGoogle></FaGoogle>
          </span>
          Login With Google
        </button>
        <button className="text-black btn btn-ghost bg-[#E7E7E7]">
          <span className="text-xl">
            <FaGithub></FaGithub>
          </span>
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
