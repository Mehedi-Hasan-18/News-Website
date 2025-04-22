import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mt-7 mb-5">Find Us On</h2>
      <div className="flex flex-col join join-vertical  *:bg-white ">
        <button className="btn join-item text-black justify-start">
          <FaFacebook className="text-blue-600 text-2xl"></FaFacebook> Facebook
        </button>
        <button className="btn join-item text-black justify-start">
          <FaTwitter className="text-blue-600 text-2xl"></FaTwitter>Twitter
        </button>
        <button className="btn join-item text-black justify-start">
          <FaInstagram className="text-rose-600 text-2xl"></FaInstagram>Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
