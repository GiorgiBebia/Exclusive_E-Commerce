import { useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { RatesStar } from "./FlashSale/RatesStar";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleHeartState,
  toggleWatchedState,
} from "./Pages/Wishlist/WishlistSlice";
import { IoIosEyeOff } from "react-icons/io";
import { toggleCartState } from "./Pages/Cart/cartSlice";
import { Link } from "react-router-dom";

export function SellingItem({
  name,
  imgUrl,
  newPrice,
  oldPrice,
  salePercentage,
  rates,
  priceStar,
  isNew,
  itemColor,
  quantity,
  totalPrice,
}) {
  const dispatch = useDispatch();

  const [hidden, setHidden] = useState(false);
  const [heart, setHeart] = useState(false);
  const [watch, setWatch] = useState(false);
  const [addToCart, setAddToCart] = useState(false);

  const likedItems = useSelector((state) => state.wishlist.likedItems || []);
  const watchedItems = useSelector(
    (state) => state.wishlist.watchedItems || []
  );

  const addToCartItem = useSelector((state) => state.cart.cart || []);

  useEffect(() => {
    const isLiked = likedItems.some((item) => item.name === name);
    setHeart(isLiked);
  }, [likedItems, name]);

  useEffect(() => {
    const watchedClicked = watchedItems.some((item) => item.name === name);
    setWatch(watchedClicked);
  }, [watchedItems, name]);

  useEffect(() => {
    const clickAddToCart = addToCartItem.some((item) => item.name === name);
    setAddToCart(clickAddToCart);
  }, [addToCartItem, name, addToCart]);

  function toggleLike() {
    const newItem = {
      name,
      imgUrl,
      newPrice,
      oldPrice,
      salePercentage,
      rates,
      priceStar,
      isNew,
      itemColor,
      quantity,
      totalPrice,
    };
    dispatch(toggleHeartState(newItem));
  }

  function toggleWatch() {
    const newItem = {
      name,
      imgUrl,
      newPrice,
      oldPrice,
      salePercentage,
      rates,
      priceStar,
      isNew,
      itemColor,
      quantity,
      totalPrice,
    };
    dispatch(toggleWatchedState(newItem));
  }

  function toggleAddToCart() {
    const newItem = {
      name,
      imgUrl,
      newPrice,
      oldPrice,
      salePercentage,
      rates,
      priceStar,
      isNew,
      itemColor,
      quantity,
      totalPrice,
    };
    dispatch(toggleCartState(newItem));
  }

  const itemColors = [];
  if (itemColor) itemColors.push(itemColor);

  return (
    <div className="mt-[40px]">
      <div
        className="bg-[#D9DBE9] w-[270px] h-[250px] bg-cover bg-center bg-no-repeat relative rounded-[4px]"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
        onMouseEnter={() => setHidden(true)}
        onMouseLeave={() => setHidden(false)}
      >
        {salePercentage && (
          <div
            className="bg-red-500 w-[55px] h-[26px] absolute top-[12px] left-[12px] text-white content-center text-[12px] rounded-[5px]"
            style={{
              textAlignLast: "center",
            }}
          >
            -{salePercentage}
          </div>
        )}
        {isNew && (
          <div
            className="bg-[#47B486] w-[55px] h-[26px] absolute top-[12px] left-[12px] text-white content-center text-[12px] rounded-[5px]"
            style={{
              textAlignLast: "center",
            }}
          >
            New
          </div>
        )}
        <div
          className="w-[34px] h-[34px] absolute top-[12px] left-[224px] bg-[#FCFCFC] rounded-full"
          onClick={toggleLike}
        >
          {!heart ? (
            <GoHeart className="w-[24px] h-[24px] mx-[4px] my-[5px]" />
          ) : (
            <FaHeart className="w-[24px] h-[24px] mx-[4px] my-[5px] text-red-500" />
          )}
        </div>
        <div
          className="w-[34px] h-[34px] absolute top-[54px] left-[224px] bg-[#FCFCFC] rounded-full"
          onClick={toggleWatch}
        >
          {!watch ? (
            <FiEye className="w-[24px] h-[24px] mx-[4px] my-[5px]" />
          ) : (
            <IoIosEyeOff className="w-[24px] h-[24px] mx-[4px] my-[5px]" />
          )}
        </div>
        {hidden && (
          <div
            className="w-[270px] h-[41px] bg-black absolute top-[209px] text-white text-center content-center"
            onClick={toggleAddToCart}
          >
            {!addToCart ? `Add To Cart` : `Remove To Cart`}
          </div>
        )}
      </div>
      <div className="mt-[16px] w-[201px] flex flex-col gap-[8px]">
        <Link to={`/product/${name}`} className="text-[16px] ">
          {name}
        </Link>

        {priceStar ? (
          <div>
            <PriceStarRate2
              newPrice={newPrice}
              oldPrice={oldPrice}
              rates={rates}
            />
          </div>
        ) : (
          <PriceStarRate
            newPrice={newPrice}
            oldPrice={oldPrice}
            rates={rates}
          />
        )}
        <div className="flex gap-[8px]">
          {itemColors.map((item) =>
            item.map((color, i) => (
              <div
                key={i}
                className="w-[20px] h-[20px] rounded-full"
                style={{
                  backgroundColor: color,
                }}
              ></div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function PriceStarRate({ newPrice, oldPrice, rates }) {
  return (
    <>
      <div className="w-[85px] h-[24px] flex justify-between">
        <span className="text-red-500">${newPrice}</span>
        {oldPrice && (
          <span className="text-[#D9DBE9] line-through">${oldPrice}</span>
        )}
      </div>
      <div className="w-[140px] flex justify-between">
        <RatesStar rates={rates} />
        {rates && <span>({rates})</span>}
      </div>
    </>
  );
}

function PriceStarRate2({ newPrice, rates }) {
  return (
    <>
      <div className="w-[185px] h-[25px] flex justify-between">
        <span className="text-red-500">${newPrice}</span>

        <RatesStar rates={rates} />
        <span>({rates})</span>
      </div>
    </>
  );
}
