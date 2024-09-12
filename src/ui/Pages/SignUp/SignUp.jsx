import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { Line } from "../../Line";
import { TopAds } from "../../TopAds";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "./UserSlice";
import { LoginedBackHome } from "../../LoginedBackHome";

function SignUp() {
  useEffect(function () {
    document.title = `Sign Up | Exclusive E-Commerce`;
  }, []);

  const userLogined = localStorage.getItem("userLogined");

  return (
    <>
      <TopAds />
      <Header />
      <Line maxWidth="1440px" />
      {!userLogined ? <CreateAnAccount /> : <LoginedBackHome />}
      <Footer margintop="140px" />
    </>
  );
}

export default SignUp;

function CreateAnAccount() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    if (!firstName || !email || !password) return;

    localStorage.setItem("userName", firstName);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    dispatch(createUser(firstName, email, password));
    navigate("/login");
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <div className="flex mt-[60px]">
      <img src="img/signUpLogInImg.png" alt="signUpLogInImg" />
      <div className="w-[371px] h-[530px] mt-[125.5px] ml-[129px]">
        <h3 className="text-[36px] font-semibold">Create an account</h3>
        <h4 className="text-[16px] font-semibold">Enter your details below</h4>
        <div className="flex flex-col gap-[40px]">
          <input
            className="border-b border-b-gray-500 w-[370px] h-[32px]"
            type="text"
            name="name"
            id="useNewName"
            placeholder="Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="border-b border-b-gray-500 w-[370px] h-[32px]"
            type="email"
            name="email"
            id="useNewEmail"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border-b border-b-gray-500 w-[370px] h-[32px]"
            type="password"
            name="password"
            id="useNewPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-[370px] h-[56px] bg-red-500 text-white text-[16px] border-none rounded-[4px]"
            onClick={handleClick}
          >
            Create Account
          </button>
        </div>
        <img
          className="mt-[16px]"
          src="img/signUpWithGoogle.png"
          alt="signUpWithGoogle"
        />

        <h4 className="px-[16px] font-normal text-center">
          Already have account?{" "}
          <Link
            to="/login"
            className="underline ml-[16px] text-black"
            onClick={scrollToTop}
          >
            Log in
          </Link>
        </h4>
      </div>
    </div>
  );
}
