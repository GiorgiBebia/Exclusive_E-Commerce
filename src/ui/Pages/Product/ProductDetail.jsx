import { fleshSalesItems } from "../../../data/fleshSalesItems";
import { exploreOurProducts } from "../../../data/exploreOurProducts";
import { bestSellingProducts } from "../../../data/bestSellingProducts";
import { useLocation } from "react-router-dom";
import { TopAds } from "../../TopAds";
import { Header } from "../../Header";
import { Line } from "../../Line";
import { RatesStar } from "../../FlashSale/RatesStar";
import { useEffect, useState } from "react";
import { toggleCartState } from "../Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../Footer";
import { GoBack } from "./GoBack";

function ProductDetail() {
  const arr = [
    ...fleshSalesItems,
    ...exploreOurProducts,
    ...bestSellingProducts,
  ];
  const location = useLocation();
  const link = location.pathname.split("/");
  link.shift();
  link.shift();
  const newLink = link[0].split("%20").join(" ");
  const item = arr.find((item) => item.name === newLink);

  useEffect(
    function () {
      document.title = `${newLink} | Exclusive E-Commerce`;
    },
    [newLink]
  );

  return (
    <div>
      <TopAds />
      <Header main="true" />
      <Line maxWidth="1440px" />
      <GoBack />
      <ProductMain item={item} />
      <Footer margintop="140px" />
    </div>
  );
}

export default ProductDetail;

function ProductMain({ item }) {
  const dispatch = useDispatch();
  const [itemQuantity, setItemQuantity] = useState(1);
  const [addToCart, setAddToCart] = useState(false);

  const addToCartItem = useSelector((state) => state.cart.cart || []);
  const name = item.name;

  useEffect(() => {
    const clickAddToCart = addToCartItem.some((item) => item.name === name);
    setAddToCart(clickAddToCart);
  }, [addToCartItem, name, addToCart]);

  function toggleAddToCart() {
    const newItem = {
      name: item.name,
      imgUrl: item.imgUrl,
      newPrice: item.newPrice,
      oldPrice: item.oldPrice,
      salePercentage: item.salePercentage,
      rates: item.rates,
      quantity: itemQuantity,
      totalPrice: item.totalPrice,
    };
    dispatch(toggleCartState(newItem));
    setAddToCart(true);
  }

  return (
    <div className="max-w-[1170px] mt-[80px] ml-[135px] flex gap-[70px]">
      <img className="w-[700px] h-[600px]" src={item.imgUrl} alt="" />
      <div>
        <span className="text-[24px] font-semibold">{item.name}</span>
        <div className="flex gap-1 my-3">
          <RatesStar rates={item.rates} />
          <span>({item.rates} Reviews)</span>
        </div>
        <div>
          <span className="text-[24px] text-red-500">{item.newPrice} ₾</span>
          {item.oldPrice && (
            <span className="text-[18px] text-gray-500 ml-3 line-through">
              {item.oldPrice} ₾
            </span>
          )}
        </div>
        <div className="flex gap-1 items-center my-3">
          <button
            className="raunded-full border-none bg-white w-[30px] h-[30px] mr-[10px] flex justify-center items-center"
            onClick={() => setItemQuantity(itemQuantity - 1)}
          >
            ➖
          </button>
          <input
            className="w-[72px] h-[44px] text-center border"
            type="number"
            name="quantityNumber"
            id={item.quantity + item.name}
            value={itemQuantity}
            readOnly
          />
          <button
            className="raunded-full border-none bg-white w-[30px] h-[30px] mr-[10px] flex justify-center items-center"
            onClick={() => setItemQuantity(itemQuantity + 1)}
          >
            ➕
          </button>
        </div>

        <button
          onClick={toggleAddToCart}
          className="w-[165px] h-[44px] text-white bg-red-500"
        >
          {!addToCart ? "Add To Cart" : `Remove To Cart`}
        </button>
      </div>
    </div>
  );
}
