import { AiOutlineSend } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import { Line } from "./Line";
import { Link } from "react-router-dom";

export function Footer({ margintop = "0px" }) {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <div
      className="max-w-[1440px] w-full h-[440px] bg-black flex justify-around flex-col"
      style={{
        marginTop: margintop,
      }}
    >
      <div className="w-[1170px] h-[236px] mx-auto flex justify-between mb-[60px]">
        <div className="flex flex-col justify-between w-[217px] h-[188px] mt-[80px]">
          <Link
            to="/"
            className="no-underline text-black"
            onClick={scrollToTop}
          >
            <span className="text-white text-[24px]">Exclusive</span>
          </Link>
          <span className="text-white text-[20px]">Subscribe</span>
          <span className="text-white text-[16px]">
            Get 10% off your first order
          </span>
          <input
            type="email"
            className="bg-black w-[217px] h-[48px] relative border border-white rounded-[4px] placeholder:px-[16px] placeholder:py-[12px]"
            placeholder="Enter your email"
          />
          <AiOutlineSend className="absolute mt-[155px] ml-[180px] text-white w-[20px] h-[18px]" />
        </div>
        <div className="flex flex-col justify-between w-[175px] h-[180px] mt-[80px]">
          <span className="text-white text-[20px]">Support</span>
          <span className="text-white text-[16px]">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </span>
          <span className="text-white text-[16px]">exclusive@gmail.com</span>
          <span className="text-white text-[16px]">+88015-88888-9999</span>
        </div>
        <div className="flex flex-col justify-between w-[123px] h-[236px] mt-[80px]">
          <span className="text-white text-[20px]">Account</span>
          <span className="text-white text-[16px]">My Account</span>
          <span className="text-white text-[16px]">
            <Link to="/login" className="no-underline" onClick={scrollToTop}>
              <span className="text-white text-[16px]">Login</span>
            </Link>{" "}
            /{" "}
            <Link to="/signup" className="no-underline" onClick={scrollToTop}>
              <span className="text-white text-[16px]">Register</span>
            </Link>
          </span>
          <Link to="/cart" className="no-underline" onClick={scrollToTop}>
            <span className="text-white text-[16px]">Cart</span>
          </Link>
          <Link to="/wishlist" className="no-underline" onClick={scrollToTop}>
            <span className="text-white text-[16px]">Wishlist</span>
          </Link>
          <span className="text-white text-[16px]">Shop</span>
        </div>
        <div className="flex flex-col justify-between w-[109px] h-[196px] mt-[80px]">
          <span className="text-white text-[20px]">Quick Link</span>
          <span className="text-white text-[16px]">Privacy Policy</span>
          <span className="text-white text-[16px]">Terms Of Use</span>
          <span className="text-white text-[16px]">FAQ</span>
          <span className="text-white text-[16px]">Contact</span>
        </div>
        <div className="flex flex-col justify-between w-[198px] h-[210px] mt-[80px]">
          <span className="text-white text-[20px]">Download App</span>
          <span className="text-white text-[12px]">
            Save $3 with App New User Only
          </span>
          <div className="flex gap-[11px]">
            <img src="img/footerQrCode.png" alt="footerQrCode" />
            <div className="flex flex-col gap-[12px]">
              <img src="img/googlePlay.png" alt="googlePlay" />
              <img src="img/appStore.png" alt="appStore" />
            </div>
          </div>
          <div className="flex justify-between">
            <FaFacebookF className="text-white w-[11px] h-[18px]" />
            <LuTwitter className="text-white w-[20px] h-[17px]" />
            <BsInstagram className="text-white w-[18px] h-[18px]" />
            <RiLinkedinLine className="text-white w-[18px] h-[18px]" />
          </div>
        </div>
      </div>
      <Line maxWidth="1440px" color="white" />
      <span className="text-white mx-auto opacity-50">
        © Copyright By Giorgi Bebia
      </span>
    </div>
  );
}
