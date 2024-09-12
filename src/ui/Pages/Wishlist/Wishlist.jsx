import { useSelector } from "react-redux";
import { Header } from "../../Header";
import { Line } from "../../Line";
import { SellingItem } from "../../SellingItem";
import { TopAds } from "../../TopAds";
import { Footer } from "../../Footer";
import { useEffect } from "react";

function Wishlist() {
  useEffect(function () {
    document.title = `Wishlist | Exclusive E-Commerce`;
  }, []);

  return (
    <div>
      <TopAds />
      <Header main="true" />
      <Line maxWidth="1440px" />
      <WishlistNumber />
      <WishlistedItem />
      <WatchedNumber />
      <WatchedItem />
      <Footer margintop="140px" />
    </div>
  );
}

export default Wishlist;

function WishlistNumber() {
  const { likedItems } = useSelector((state) => state.wishlist);
  return (
    <div className="flex justify-between max-w-[1170px] w-full mx-auto mt-[80px] items-center">
      <span className="text-[20px] font-bold">
        Wishlist ({likedItems.length})
      </span>
      <button className="w-[223px] h-[56px] border border-gray-200 rounded-[4px] bg-white text-[16px] font-bold">
        Move All To Bag
      </button>
    </div>
  );
}

function WishlistedItem() {
  const { likedItems } = useSelector((state) => state.wishlist);

  return (
    <div className="flex max-w-[1170px] w-full mx-auto mt-[60px] gap-[30px]">
      {likedItems.length === 0 ? (
        <p>No items in Wishlist</p>
      ) : (
        likedItems.map((item) => (
          <SellingItem
            key={item.id}
            name={item.name}
            imgUrl={item.imgUrl}
            newPrice={item.newPrice}
            oldPrice={item.oldPrice}
            salePercentage={item.salePercentage}
            priceStar={item.priceStar}
            isNew={item.isNew}
            itemColor={item.itemColor}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))
      )}
    </div>
  );
}

function WatchedNumber() {
  return (
    <div className="flex justify-between max-w-[1170px] w-full mx-auto mt-[80px] items-center">
      <div className="flex gap-[16px] items-center">
        <div className="bg-red-500 w-[20px] h-[40px] rounded-[8px]"></div>
        <span className="text-[20px] font-bold">Just For You</span>
      </div>
      <button className="w-[150px] h-[56px] border border-gray-200 rounded-[4px] bg-white text-[16px] font-bold">
        See All
      </button>
    </div>
  );
}

function WatchedItem() {
  const { watchedItems } = useSelector((state) => state.wishlist);

  return (
    <div className="flex max-w-[1170px] w-full mx-auto mt-[60px] gap-[30px]">
      {watchedItems.length === 0 ? (
        <p>No items in Watched List</p>
      ) : (
        watchedItems.map((item) => (
          <SellingItem
            key={item.id}
            name={item.name}
            imgUrl={item.imgUrl}
            newPrice={item.newPrice}
            oldPrice={item.oldPrice}
            salePercentage={item.salePercentage}
            priceStar={item.priceStar}
            isNew={item.isNew}
            itemColor={item.itemColor}
            rates={item.rates}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))
      )}
    </div>
  );
}
