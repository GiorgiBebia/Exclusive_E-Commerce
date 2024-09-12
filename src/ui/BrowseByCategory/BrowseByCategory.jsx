import { BackForwardArrow } from "../BackForwardArrow";
import { NameTag } from "../NameTag";
import { Category } from "./Category";

export function BrowseByCategory() {
  return (
    <div className="max-w-[1170px] w-full mx-auto mt-[80px] mb-[70px]">
      <NameTag name="Categories" />
      <div className="flex items-center justify-between ">
        <h2 className="w-[379px] mt-[20px] text-[36px]">Browse By Category</h2>
        <BackForwardArrow />
      </div>
      <Category />
    </div>
  );
}
