import { Link } from "react-router-dom";
import { Header } from "../../Header";
import { Line } from "../../Line";
import { TopAds } from "../../TopAds";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updatePassword, updateProfile } from "../SignUp/UserSlice";
import { Footer } from "../../Footer";

function Account() {
  useEffect(function () {
    document.title = `Account | Exclusive E-Commerce`;
  }, []);

  return (
    <div>
      <TopAds />
      <Header main="true" />
      <Line maxWidth="1440px" />
      <NavCategotyWelcomeName />
      <ManageMyAccount />
      <Footer margintop="140px" />
    </div>
  );
}

export default Account;

function NavCategotyWelcomeName() {
  const userName =
    useSelector((state) => state.user.name) || localStorage.getItem("userName");

  return (
    <div className="flex justify-between">
      <div className="mt-[80px] ml-[135px]">
        <Link
          to="/"
          className="no-underline text-black text-[14px] font-normal"
        >
          <span>Home</span>
        </Link>{" "}
        /{" "}
        <Link
          to="/account"
          className="no-underline text-black text-[14px] font-semibold"
        >
          My Account
        </Link>
      </div>
      <div className="mt-[80px] mr-[135px]">
        Welcome <span className="text-red-500">{userName}</span>
      </div>
    </div>
  );
}

function ManageMyAccount() {
  const [firstName, setFirstName] = useState(
    useSelector((state) => state.user.firstName) ||
      localStorage.getItem("userFirstname") ||
      ""
  );
  const [lastName, setLastName] = useState(
    useSelector((state) => state.user.lastName) || ""
  );
  const [email, setEmail] = useState(
    useSelector((state) => state.user.email) ||
      localStorage.getItem("userEmail") ||
      ""
  );
  const [address, setAddress] = useState(
    useSelector((state) => state.user.address) || ""
  );
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const dispatch = useDispatch();

  const userPassword =
    useSelector((state) => state.user.password) ||
    localStorage.getItem("userPassword");

  function handleClick() {
    dispatch(updateProfile(firstName, lastName, email, address));
    localStorage.setItem("userName", firstName);
    localStorage.setItem("userEmail", email);
    if (
      userPassword === currentPassword &&
      newPassword === confirmNewPassword
    ) {
      dispatch(updatePassword(newPassword));
      localStorage.setItem("userPassword", newPassword);
    }
  }

  function reset() {
    setFirstName(localStorage.getItem("userName"));
    setLastName(lastName);
    setEmail(localStorage.getItem("userEmail"));
    setAddress(address);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  }

  return (
    <div className="flex">
      <div className="flex flex-col justify-between h-[300px] ml-[135px] mt-[80px]">
        <span className="text-[16px] font-bold">Manage My Account</span>
        <span className="ml-[35px] text-[16px]">My Profile</span>
        <span className="ml-[35px] text-[16px]">Address Book</span>
        <span className="ml-[35px] text-[16px]">My Payment Options</span>
        <span className="text-[16px] font-bold">My Orders</span>
        <span className="ml-[35px] text-[16px]">My Returns</span>
        <span className="ml-[35px] text-[16px]">My Cancellations</span>
        <span className="text-[16px] font-bold">My Wishlist</span>
      </div>
      <div className="flex flex-col justify-between border border-gray-200 mt-[80px] ml-[100px] px-[80px] py-[32px] gap-[24px]">
        <h3 className="text-[20px] text-red-500">Edit Your Profile</h3>
        <div className="flex gap-[50px]">
          <div className="flex flex-col gap-[8px] w-[330px] h-[82px]">
            <label className="text-[16px] font-bold" htmlFor="editFirstName">
              First Name
            </label>
            <input
              className="w-[330px] h-[50px] bg-white border-none"
              type="text"
              name="editFirstName"
              id="editFirstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-[8px] w-[330px] h-[82px]">
            <label className="text-[16px] font-bold" htmlFor="editLastName">
              Last Name
            </label>
            <input
              className="w-[330px] h-[50px] bg-white border-none"
              type="text"
              name="editLastName"
              id="editLastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-[50px]">
          <div className="flex flex-col gap-[8px] w-[330px] h-[82px]">
            <label className="text-[16px] font-bold" htmlFor="editEmail">
              Email
            </label>
            <input
              className="w-[330px] h-[50px] bg-white border-none"
              type="email"
              name="editEmail"
              id="editEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-[8px] w-[330px] h-[82px]">
            <label className="text-[16px] font-bold" htmlFor="editAddress">
              Address
            </label>
            <input
              className="w-[330px] h-[50px] bg-white border-none"
              type="text"
              name="editAddress"
              id="editAddress"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <label className="text-[16px] font-bold" htmlFor="passwordChanges">
            Password Changes
          </label>
          <input
            className="w-[710px] h-[50px] bg-white border-none"
            type="password"
            name="passwordChanges"
            id="oldPassword"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            className="w-[710px] h-[50px] bg-white border-none"
            type="password"
            name="passwordChanges"
            id="newPassword"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            className="w-[710px] h-[50px] bg-white border-none"
            type="password"
            name="passwordChanges"
            id="confirmNewPassword"
            placeholder="Confirm New Password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </div>
        <div className="flex gap-[32px] items-center self-end">
          <span onClick={reset}>Cancel</span>
          <button
            className="w-[214px] h-[56px] bg-red-500 border-none rounded-[4px] text-[16px] text-white"
            onClick={handleClick}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
