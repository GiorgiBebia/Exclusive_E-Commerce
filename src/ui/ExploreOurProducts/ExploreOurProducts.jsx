import { useState } from "react";
import { exploreOurProducts } from "../../data/exploreOurProducts";
import { BackForwardArrow } from "../BackForwardArrow";
import { NameTag } from "../NameTag";
import { SellingItem } from "../SellingItem";
import { ViewAllProducts } from "../ViewAllProducts";

export function ExploreOurProducts() {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = exploreOurProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(exploreOurProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="max-w-[1170px] w-full mx-auto mt-[70px] mb-[60px]">
      <NameTag name="Our Products" />

      <div className="flex justify-between">
        <h2 className="w-[400px] h-[48px] text-[36px]">Explore Our Products</h2>
        <BackForwardArrow
          onPrevious={() => handlePageChange(currentPage - 1)}
          onNext={() => handlePageChange(currentPage + 1)}
          hasPrevious={currentPage > 1}
          hasNext={currentPage < totalPages}
        />
      </div>
      <div className="flex gap-[30px] flex-wrap h-[810px] overflow-hidden">
        {currentItems.map((item) => (
          <SellingItem
            key={item.id}
            name={item.name}
            imgUrl={item.imgUrl}
            newPrice={item.newPrice}
            rates={item.rates}
            priceStar="true"
            isNew={item.isNew}
            itemColor={item.itemColor}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))}
      </div>
      <ViewAllProducts margintop="60px" marginbottom="0px" />
    </div>
  );
}
