import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { Line } from "../../Line";
import { TopAds } from "../../TopAds";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginedBackHome } from "../../LoginedBackHome";
import { enterUser } from "../SignUp/UserSlice";

function LogIn() {
  useEffect(function () {
    document.title = `Login | Exclusive E-Commerce`;
  }, []);
  const userLogined = localStorage.getItem("userLogined");

  return (
    <>
      <TopAds />
      <Header />
      <Line maxWidth="1440px" />
      {!userLogined ? <LogInAccount /> : <LoginedBackHome />}
      <Footer margintop="140px" />
    </>
  );
}

export default LogIn;

function LogInAccount() {
  const [enterEmail, setEnterEmail] = useState("");
  const [enterPassword, setEnterPassword] = useState("");

  const firstName = localStorage.getItem("userName");
  const email =
    useSelector((state) => state.user.email) ||
    localStorage.getItem("userEmail");
  const password =
    useSelector((state) => state.user.password) ||
    localStorage.getItem("userPassword");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail) setEnterEmail(storedEmail);
    if (storedPassword) setEnterPassword(storedPassword);
  }, []);

  function handleClick() {
    if (!enterEmail || !enterPassword) return;

    if (enterEmail === email && enterPassword === password) {
      localStorage.setItem("userLogined", true);
      dispatch(enterUser(firstName, email, password));
      navigate("/");
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <div className="flex mt-[60px]">
      <img src="img/signUpLogInImg.png" alt="signUpLogInImg" />
      <div className="flex flex-col justify-between w-[371px] h-[326px] mt-[227.5px] ml-[129px]">
        <h3 className="text-[36px] font-semibold">Log in to Exclusive </h3>
        <h4 className="text-[16px] font-semibold">Enter your details below</h4>
        <div className="flex flex-col gap-[40px]">
          <input
            className="border-b border-gray-500 w-[370px] h-[32px]"
            type="email"
            name="email"
            id="enterEmail"
            placeholder="Email"
            value={enterEmail}
            onChange={(e) => setEnterEmail(e.target.value)}
          />
          <input
            className="border-b border-gray-500 w-[370px] h-[32px]"
            type="password"
            name="password"
            id="enterPassword"
            placeholder="Password"
            value={enterPassword}
            onChange={(e) => setEnterPassword(e.target.value)}
          />
          <div className="flex justify-between items-center">
            <button
              className="w-[143px] h-[56px] bg-red-500 text-white text-[16px] border-none rounded-[4px]"
              onClick={handleClick}
            >
              Log in
            </button>
            <span className="text-red-500 text-[16px]">Forgor Password?</span>
          </div>
        </div>
        <h4 className="text-[16px] font-semibold text-center">
          Don't have an account yet?{" "}
          <Link to="/signup" className="no-underline" onClick={scrollToTop}>
            <span className="text-red-500 text-[16px]">Sign up</span>
          </Link>
        </h4>
      </div>
    </div>
  );
}
