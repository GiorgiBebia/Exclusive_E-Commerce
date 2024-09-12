import { Link } from "react-router-dom";

export function OrderConfirmationMain() {
  return (
    <div className="max-w-[1170px] w-full h-[400px] mx-auto mt-[40px] flex justify-center items-center flex-col">
      <img className="w-[150px] h-[150px]" src="img/confirm.png" alt="" />
      <h3>Your Order Confirmed</h3>

      <Link to="/">
        <button className="w-[215px] h-[56px] bg-red-500 border-none text-white">
          Go To Home Page
        </button>
      </Link>
    </div>
  );
}
