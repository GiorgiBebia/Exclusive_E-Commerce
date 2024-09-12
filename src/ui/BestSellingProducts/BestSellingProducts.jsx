import { bestSellingProducts } from "../../data/bestSellingProducts";
import { NameTag } from "../NameTag";
import { SellingItem } from "../SellingItem";

export function BestSellingProducts() {
  return (
    <div className="max-w-[1170px] w-full mx-auto mt-[70px] mb-[140px]">
      <NameTag name="This Month" />

      <div className="flex justify-between items-center">
        <h2 className="w-[400px] h-[48px] text-[36px]">
          Best Selling Products
        </h2>
        <button className="w-[159px] h-[56px] bg-red-500 border-none rounded-[8px] text-white">
          View All
        </button>
      </div>
      <div className="flex gap-[30px]">
        {bestSellingProducts.map((item) => (
          <SellingItem
            key={item.id}
            name={item.name}
            imgUrl={item.imgUrl}
            newPrice={item.newPrice}
            oldPrice={item.oldPrice}
            rates={item.rates}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))}
      </div>
    </div>
  );
}
