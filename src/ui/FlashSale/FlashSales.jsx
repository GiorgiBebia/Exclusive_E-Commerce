import { useState } from "react";
import { fleshSalesItems } from "../../data/fleshSalesItems";
// import { CountTime } from "./CountTime";
import { SellingItem } from "../SellingItem";
import { NameTag } from "../NameTag";
import { ViewAllProducts } from "../ViewAllProducts";
import { BackForwardArrow } from "../BackForwardArrow";

export function FlashSales() {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = fleshSalesItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(fleshSalesItems.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const [likedItems, setLikedItems] = useState([]);

  const handleLikeToggle = (id, isLiked) => {
    setLikedItems((prevLikedItems) =>
      isLiked
        ? [...prevLikedItems, id]
        : prevLikedItems.filter((itemId) => itemId !== id)
    );
  };

  const likedItemsList = fleshSalesItems.filter((item) =>
    likedItems.includes(item.id)
  );

  return (
    <div className="max-w-[1170px] w-full mx-auto mt-[140px]">
      <div className="flex gap-[16px] items-center">
        <NameTag name="Today's" />
      </div>
      <div className="flex items-center mt-[24px] justify-between">
        <div className="flex gap-[87px]">
          <h2 className="text-[36px] font-bold">Flash Sales</h2>
          {/* <CountTime /> */}
        </div>

        <BackForwardArrow
          onPrevious={() => handlePageChange(currentPage - 1)}
          onNext={() => handlePageChange(currentPage + 1)}
          hasPrevious={currentPage > 1}
          hasNext={currentPage < totalPages}
        />
      </div>
      <div className="flex gap-[30px] flex-wrap">
        {currentItems.map((item) => (
          <SellingItem
            id={item.id}
            key={item.id}
            name={item.name}
            imgUrl={item.imgUrl}
            newPrice={item.newPrice}
            oldPrice={item.oldPrice}
            salePercentage={item.salePercentage}
            likedItems={likedItems}
            onLikeToggle={handleLikeToggle}
            rates={item.rates}
            priceStar={item.priceStar}
            isNew={item.isNew}
            itemColor={item.itemColor}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))}
      </div>
      <ViewAllProducts margintop="60px" marginbottom="60px" />
      {likedItems.length > 0 && (
        <div>
          <h2 className="text-[36px] font-bold mt-[60px]">Liked Items</h2>
          <div className="flex gap-[30px] flex-wrap mt-[24px]">
            {likedItemsList.map((item) => (
              <SellingItem
                id={item.id}
                key={item.id}
                name={item.name}
                imgUrl={item.imgUrl}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
                salePercentage={item.salePercentage}
                likedItems={likedItems}
                onLikeToggle={handleLikeToggle}
                rates={item.rates}
                priceStar={item.priceStar}
                isNew={item.isNew}
                itemColor={item.itemColor}
                quantity={item.quantity}
                totalPrice={item.totalPrice}
              />
            ))}
          </div>
        </div>
      )}{" "}
    </div>
  );
}
