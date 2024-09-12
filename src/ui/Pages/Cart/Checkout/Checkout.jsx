import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../../Header";
import { Line } from "../../../Line";
import { TopAds } from "../../../TopAds";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Coupon } from "../Coupon";
import { updateBillingDetails } from "../../SignUp/UserSlice";
import { clearCart } from "../cartSlice";
import { Footer } from "../../../Footer";

function Checkout() {
  useEffect(function () {
    document.title = `Checkout | Exclusive E-Commerce`;
  }, []);

  return (
    <div>
      <TopAds />
      <Header main="true" />
      <Line maxWidth="1440px" />
      <NavCategoty />
      <CheckoutMain />
      <Footer margintop="140px" />
    </div>
  );
}

export default Checkout;

function NavCategoty() {
  return (
    <div className="mt-[80px] ml-[135px]">
      <Link to="/" className="no-underline text-black text-[14px] font-normal">
        <span>Home</span>
      </Link>{" "}
      /{" "}
      <Link
        to="/cart"
        className="no-underline text-black text-[14px] font-semibold"
      >
        Cart
      </Link>{" "}
      /{" "}
      <Link
        to="/cart/checkout"
        className="no-underline text-black text-[14px] font-semibold"
      >
        Checkout
      </Link>
    </div>
  );
}

function CheckoutMain() {
  const dispatch = useDispatch();
  const fullNameFromStore =
    useSelector((state) => state.user.fullName) ||
    localStorage.getItem("fullName") ||
    "";

  const [fullName, setFullName] = useState(fullNameFromStore);
  const enteredFullName = fullName.split(" ");

  const [firstName, setFirstName] = useState(enteredFullName[0] || "");
  const [lastName, setLastName] = useState(enteredFullName[1] || "");

  const handleFullNameChange = (e) => {
    const newFullName = e.target.value;
    setFullName(newFullName);

    const splitName = newFullName.split(" ");
    setFirstName(splitName[0] || "");
    setLastName(splitName[1] || "");
  };

  const [companyName, setCompanyName] = useState(
    useSelector((state) => state.user.companyName) ||
      localStorage.getItem("companyName") ||
      ""
  );

  const [address, setAddress] = useState(
    useSelector((state) => state.user.address) ||
      localStorage.getItem("address") ||
      ""
  );

  const [apartment, setApartment] = useState(
    useSelector((state) => state.user.apartment) ||
      localStorage.getItem("apartment") ||
      ""
  );
  const [city, setCity] = useState(
    useSelector((state) => state.user.city) ||
      localStorage.getItem("city") ||
      ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    useSelector((state) => state.user.phoneNumber) ||
      localStorage.getItem("phoneNumber") ||
      ""
  );
  const [email, setEmail] = useState(
    useSelector((state) => state.user.email) ||
      localStorage.getItem("userEmail") ||
      ""
  );

  const [wantSaveInfo, setWantSaveInfo] = useState(false);

  const { cart } = useSelector((state) => state.cart);

  const cartTotalPrice = localStorage.getItem("cartTotalPrice") || 0;

  const shippingPrice = 50;

  const withVat = Number(cartTotalPrice) * 0.2;

  const navigate = useNavigate();

  const [errorFullName, setErrorFullName] = useState(false);
  const [errorAddress, setErrorAddress] = useState(false);
  const [errorCity, setErrorCity] = useState(false);
  const [errorPhoneNumber, setErrorPhoneNumber] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [paymentType, setPaymentType] = useState("Bank");

  function scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  function handlePaymentTypeChange(e) {
    setPaymentType(e.target.id);
  }

  function handleClick() {
    setErrorFullName(fullName.trim().length === 0);
    setErrorAddress(address.trim().length === 0);
    setErrorCity(city.trim().length === 0);
    setErrorPhoneNumber(phoneNumber.trim().length < 10);
    setErrorEmail(!email.includes("@"));

    if (
      fullName.length > 0 &&
      address.length > 0 &&
      city.length > 0 &&
      phoneNumber.length > 0 &&
      email.length > 0
    ) {
      if (wantSaveInfo)
        dispatch(
          updateBillingDetails(
            firstName,
            lastName,
            companyName,
            address,
            apartment,
            city,
            phoneNumber,
            email
          )
        );
      navigate("/orderconfirmation");
      dispatch(clearCart());
      scrollToTop();
    }
  }

  return (
    <div className="max-w-[1170px] w-full flex justify-between mx-auto mt-[80px]">
      <div className="flex flex-col justify-between h-[892px]">
        <h3 className="text-[36px]">Billing Details</h3>

        <div className="flex flex-col gap-[8px] w-[470px] h-[82px]">
          <label className="text-[16px]" htmlFor="editFullName">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            className="w-[470px] h-[50px] bg-[#F5F5F5] border-none"
            type="text"
            name="editFullName"
            id="editFullName"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
          {errorFullName && (
            <span className="text-red-500">Enter Full Name</span>
          )}
        </div>

        <div className="flex flex-col gap-[8px] w-[470px] h-[82px]">
          <label className="text-[16px]" htmlFor="editCompanyName">
            Company Name
          </label>
          <input
            className="w-[470px] h-[50px] bg-[#F5F5F5] border-none"
            type="text"
            name="editCompanyName"
            id="editCompanyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-[8px] w-[470px] h-[82px]">
          <label className="text-[16px]" htmlFor="EditStreetAddress">
            Street Address <span className="text-red-500">*</span>
          </label>
          <input
            className="w-[470px] h-[50px] bg-[#F5F5F5] border-none"
            type="text"
            name="EditStreetAddress"
            id="EditStreetAddress"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          {errorAddress && (
            <span className="text-red-500">Enter Street Address</span>
          )}
        </div>

        <div className="flex flex-col gap-[8px] w-[470px] h-[82px]">
          <label className="text-[16px]" htmlFor="editApartment">
            Apartment,Floor,etc. (Optional)
          </label>
          <input
            className="w-[470px] h-[50px] bg-[#F5F5F5] border-none"
            type="text"
            name="editApartment"
            id="editApartment"
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-[8px] w-[470px] h-[82px]">
          <label className="text-[16px]" htmlFor="editCity">
            Town/City <span className="text-red-500">*</span>
          </label>
          <input
            className="w-[470px] h-[50px] bg-[#F5F5F5] border-none"
            type="text"
            name="editCity"
            id="editCity"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          {errorCity && <span className="text-red-500">Enter Town/City</span>}
        </div>

        <div className="flex flex-col gap-[8px] w-[470px] h-[82px]">
          <label className="text-[16px]" htmlFor="editPhoneNumber">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            className="w-[470px] h-[50px] bg-[#F5F5F5] border-none"
            type="number"
            name="editPhoneNumber"
            id="editPhoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          {errorPhoneNumber && (
            <span className="text-red-500">Enter Phone Number</span>
          )}
        </div>

        <div className="flex flex-col gap-[8px] w-[470px] h-[82px]">
          <label className="text-[16px]" htmlFor="editEmailAddress">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            className="w-[470px] h-[50px] bg-[#F5F5F5] border-none"
            type="email"
            name="editEmailAddress"
            id="editEmailAddress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errorEmail && (
            <span className="text-red-500">Enter Email Address</span>
          )}
        </div>

        <div className="flex gap-[16px]">
          <input
            type="checkbox"
            name="ifWantSaveInfo"
            id="ifWantSaveInfo"
            value={wantSaveInfo}
            onChange={(e) => setWantSaveInfo(e.target.checked)}
          />
          <label className="text-[16px] text-black" htmlFor="ifWantSaveInfo">
            Save this information for faster check-out next time
          </label>
        </div>
      </div>

      <div className="w-[527px] h-[600px] flex flex-col justify-between">
        {cart.map((item) => (
          <CheckOutItems item={item} key={item.name} />
        ))}

        <div className="w-[527px] h-[40px] border-b border-gray-500 flex justify-between">
          <span>Subtotal:</span>
          <span>{cartTotalPrice} ₾</span>
        </div>

        <div className="w-[527px] h-[40px] border-b border-gray-500 flex justify-between">
          <span>Shipping:</span>
          <span>{shippingPrice} ₾</span>
        </div>

        <div className="w-[527px] h-[40px] border-b border-gray-500 flex justify-between">
          <span>Vat (20%):</span>
          <span>{withVat} ₾</span>
        </div>

        <div className="w-[527px] h-[40px] border-b border-gray-500 flex justify-between">
          <span>Total:</span>
          <span>{Number(cartTotalPrice) + shippingPrice + withVat} ₾</span>
        </div>

        <div>
          {paymentType === "" && (
            <span className="text-red-500">Select The Payment Type</span>
          )}
          <div className="w-[427px] h-[28px] flex justify-between">
            <div>
              <input
                type="radio"
                name="BankOrCash"
                id="Bank"
                checked={paymentType === "Bank"}
                onChange={handlePaymentTypeChange}
              />
              <label htmlFor="bank">Bank</label>
            </div>
            <div className="flex">
              <img src="../img/visa.png" alt="Visa" />
              <img src="../img/masterCard.png" alt="Master Card" />
            </div>
          </div>
          <div>
            <input
              type="radio"
              name="BankOrCash"
              id="Cash"
              checked={paymentType === "Cash"}
              onChange={handlePaymentTypeChange}
            />
            <label htmlFor="cash">Cash on Delivery</label>
          </div>
        </div>

        <Coupon />

        <button
          className="w-[190px] h-[56px] rounded-[4px] bg-red-500 border-none text-white text-[16px]"
          onClick={handleClick}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

function CheckOutItems({ item }) {
  const imgUrl = `../${item.imgUrl}`;
  return (
    <div className="flex justify-between w-[527px] items-center mt-[10px]">
      <img className="w-[50px] h-[39px]" src={imgUrl} alt="" />
      <span className="w-[250px] text-center">{item.name}</span>
      <span>{item.quantity} pcs</span>
      <span className="w-[60px] text-center">
        {item.newPrice * item.quantity} ₾
      </span>
    </div>
  );
}
