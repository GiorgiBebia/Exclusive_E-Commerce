import { useEffect, useRef, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";
import { LuShoppingBag } from "react-icons/lu";
import { PiShoppingCartLight } from "react-icons/pi";
import { TiStarOutline } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";

export function Header({ main }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("");
  const [userLogined, setUserLogined] = useState(
    localStorage.getItem("userLogined") === "true"
  );

  const navigate = useNavigate();
  const divRef = useRef(null);

  const toggleDiv = () => {
    if (!userLogined) {
      navigate("/login");
      return;
    }

    setIsOpen((open) => !open);
    setBgColor("red");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setIsOpen(false);
        setBgColor("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function logOutClick() {
    localStorage.removeItem("userLogined");
    setUserLogined(false);
    setIsOpen(false);
  }

  return (
    <>
      <div className="max-w-[1170px] w-full h-[38px] mx-auto mt-[40px] flex items-center justify-between">
        <Link to="/" className="no-underline text-black font-bold text-[24px]">
          <h1>Exclusive</h1>
        </Link>
        <div className="flex justify-between w-[367px]">
          <Link to="/" className="no-underline text-black">
            <span>Home</span>
          </Link>
          <Link to="/contact" className="no-underline text-black">
            Contact
          </Link>
          <Link to="/about" className="no-underline text-black">
            About
          </Link>
          <Link to="/signup" className="no-underline text-black">
            Sign Up
          </Link>
        </div>
        <div className="w-[395px] flex items-center justify-between">
          <input
            className="w-[243px] h-[30px] border-none bg-[#fcfcfc] placeholder-gray-500 px-[20px] opacity-50 absolute"
            type="text"
            placeholder="What are you looking for?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <CiSearch className="relative left-[211px] w-[16px] h-[16px] cursor-pointer" />
          {main && (
            <div className="flex w-[128px] justify-between">
              <Link to="/wishlist">
                <CiHeart className="w-[32px] h-[32px]" />
              </Link>
              <Link to="/cart">
                <PiShoppingCartLight className="w-[32px] h-[32px] opacity-85" />
              </Link>
              <FiUser
                onClick={toggleDiv}
                className="w-[32px] h-[32px] opacity-70 rounded-full"
                style={{
                  backgroundColor: bgColor,
                }}
              />
              {isOpen && userLogined && (
                <div
                  className="absolute w-[225px] h-[200px] top-[120px] right-[135px] rounded-[4px] bg-[#878787]"
                  ref={divRef}
                >
                  <div className="ml-[15px]">
                    <Link
                      to="/account"
                      className="no-underline h-[40px] text-white"
                    >
                      <div className="h-[40px] flex items-center gap-[16px]">
                        <FiUser />
                        <h4 className="text-white">Manage My Account</h4>
                      </div>
                    </Link>
                    <Link to="/" className="no-underline h-[40px] text-white">
                      <div className="h-[40px] flex items-center gap-[16px]">
                        <LuShoppingBag />
                        <h4 className="text-white">My Order</h4>
                      </div>
                    </Link>
                    <Link to="/" className="no-underline h-[40px] text-white">
                      <div className="flex h-[40px] items-center gap-[16px]">
                        <GiCancel />
                        <h4 className="text-white">My Cancellations</h4>
                      </div>
                    </Link>
                    <Link to="/" className="no-underline h-[40px] text-white">
                      <div className="flex h-[40px] items-center gap-[16px]">
                        <TiStarOutline />
                        <h4 className="text-white">My Reviews</h4>
                      </div>
                    </Link>
                    <Link
                      to="/"
                      className="no-underline h-[40px] text-white"
                      onClick={logOutClick}
                    >
                      <div className="flex h-[40px] items-center gap-[16px]">
                        <BiLogOut />
                        <h4 className="text-white">Logout</h4>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
