import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../Header";
import { Line } from "../../Line";
import { NavCategoty } from "../../NavCategoty";
import { TopAds } from "../../TopAds";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeCartItem,
} from "./cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../../Footer";
import { Coupon } from "./Coupon";
import { useEffect } from "react";

function Cart() {
  useEffect(function () {
    document.title = `Cart | Exclusive E-Commerce`;
  }, []);

  return (
    <div>
      <TopAds />
      <Header main="true" />
      <Line maxWidth="1440px" />
      <NavCategoty page="Cart" to="/cart" />
      <CartMain />
      <Footer margintop="140px" />
    </div>
  );
}

export default Cart;

function CartMain() {
  const { cart } = useSelector((state) => state.cart);

  const cartTotalPrice = cart.reduce((total, item) => {
    return total + item.newPrice * item.quantity;
  }, 0);

  return (
    <div className="max-w-[1170px] w-full mx-auto mt-[80px]">
      {cart.length === 0 ? (
        <p>No Item in Cart</p>
      ) : (
        <table className="flex flex-col gap-[40px]">
          <tbody className="flex flex-col gap-[40px]">
            <tr className="border border-gray-200 h-[72px]">
              <th className="w-[400px] text-center">Product</th>
              <th className="w-[100px]">Price</th>
              <th className="w-[200px]">Quantity</th>
              <th className="w-[100px] text-center">Subtotal</th>
              <th className="w-[30px]"></th>
            </tr>
            {cart.map((item) => (
              <CartItem key={item.name} item={item} />
            ))}
          </tbody>
        </table>
      )}
      {cart.length > 0 ? <ReturnToShopUpdateCart /> : ""}
      {cart.length > 0 ? (
        <CouponCheckout cartTotalPrice={cartTotalPrice} />
      ) : (
        ""
      )}
    </div>
  );
}

function CartItem({ item }) {
  const dispatch = useDispatch();

  function decrementQuantity() {
    item.quantity > 1
      ? dispatch(decreaseItemQuantity(item))
      : dispatch(removeCartItem(item));
  }
  function incrementQuantity() {
    dispatch(increaseItemQuantity(item));
  }

  const removeItemFromCart = () => {
    dispatch(removeCartItem(item));
  };

  return (
    <tr className="max-w-[1170px] w-full h-[102px] border border-gray-200">
      <td className="w-[400px] text-center flex justify-evenly items-center">
        <img className="w-[50px] h-[39px]" src={item.imgUrl} alt="" />
        {item.name}
      </td>
      <td className="w-[100px] text-center">{item.newPrice} ₾</td>
      <td className="flex items-center w-[200px] justify-center">
        <button
          className="raunded-full border-none bg-white w-[30px] h-[30px] mr-[10px] flex justify-center items-center"
          onClick={decrementQuantity}
        >
          ➖
        </button>
        <input
          className="w-[72px] h-[44px] text-center"
          type="number"
          name="quantityNumber"
          id={item.quantity + item.name}
          value={item.quantity}
          readOnly
        />
        <button
          className="raunded-full border-none bg-white w-[30px] h-[30px] mr-[10px] flex justify-center items-center"
          onClick={incrementQuantity}
        >
          ➕
        </button>
      </td>
      <td className="w-[100px] text-center">
        {item.newPrice * item.quantity} ₾
      </td>
      <td
        className="text-center cursor-pointer w-[30px]"
        onClick={removeItemFromCart}
      >
        ❌
      </td>
    </tr>
  );
}

function ReturnToShopUpdateCart() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between mt-[24px]">
      <button
        className="w-[218px] h-[56px] border border-gray-200 rounded-[4px] bg-white text-[16px] font-semibold"
        onClick={() => navigate(-1)}
      >
        Return To Shop
      </button>
      <button className="w-[195px] h-[56px] border border-gray-200 rounded-[4px] bg-white text-[16px] font-semibold">
        Update Cart
      </button>
    </div>
  );
}

function CouponCheckout({ cartTotalPrice }) {
  const shippingPrice = 50;

  function scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  function handleClick() {
    localStorage.setItem("cartTotalPrice", cartTotalPrice);
    scrollToTop();
  }

  return (
    <div className="max-w-[1170px] w-full mx-auto mt-[80px] flex justify-between">
      <Coupon />

      <div className="w-[470px] h-[324px] border-[1.5px] border-black rounded-[4px] pt-[32px] flex flex-col">
        <span className="ml-[24px] text-[20px] font-medium">Cart Total</span>
        <div className="max-w-[422px] w-full h-[40px] border-b border-b-black mx-auto mt-[24px] flex justify-between font-medium">
          <span>Subtotal:</span>
          <span>{cartTotalPrice} ₾</span>
        </div>
        <div className="max-w-[422px] w-full h-[40px] border-b border-b-black mx-auto mt-[24px] flex justify-between font-medium">
          <span>Shipping</span>
          <span>{shippingPrice} ₾</span>
        </div>
        <div className="max-w-[422px] w-full h-[40px] border-b border-b-black mx-auto mt-[24px] flex justify-between font-medium">
          <span>Total</span>
          <span>{cartTotalPrice + shippingPrice} ₾</span>
        </div>

        <Link to="/cart/checkout" className="mx-auto mt-[16px]">
          <button
            className="w-[260px] h-[56px] bg-red-500 border-none rounded-[4px] text-[16px] text-white mb-2"
            onClick={handleClick}
          >
            Process To Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
