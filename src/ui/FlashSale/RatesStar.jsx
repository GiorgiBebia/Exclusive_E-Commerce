import { IoMdStar } from "react-icons/io";

export function RatesStar({ rates }) {
  if (Math.floor(rates / 20) === 1)
    return (
      <span className="flex">
        <IoMdStar className="text-[#FFAD33] w-[20px] h-[20px]" />
        <IoMdStar className="text-gray-500 w-[20px] h-[20px]" />
        <IoMdStar className="text-gray-500 w-[20px] h-[20px]" />
        <IoMdStar className="text-gray-500 w-[20px] h-[20px]" />
        <IoMdStar className="text-gray-500 w-[20px] h-[20px]" />
      </span>
    );
  if (Math.floor(rates / 20) === 2)
    <span className="flex">
      <IoMdStar className="text-[#FFAD33] w-[20px] h-[20px]" />
      <IoMdStar className="text-[#FFAD33] w-[20px] h-[20px]" />
      <IoMdStar className="text-gray-500 w-[20px] h-[20px]" />
      <IoMdStar className="text-gray-500 w-[20px] h-[20px]" />
      <IoMdStar className="text-gray-500 w-[20px] h-[20px]" />
    </span>;
  if (Math.floor(rates / 20) === 3)
    return (
      <span className="flex">
        <IoMdStar className="text-[#FFAD33] w-[20px] h-[20px]" />
        <IoMdStar className="text-[#FFAD33] w-[20px] h-[20px]" />
        <IoMdStar className="text-[#FFAD33] w-[20px] h-[20px]" />
        <IoMdStar className="text-gray-500 w-[20px] h-[20px]" />
        <IoMdStar className="text-gray-500 w-[20px] h-[20px]" />
      </span>
    );
  if (Math.floor(rates / 20) === 4)
    return (
      <span className="flex">
        <IoMdStar className="text-[#FFAD33] w-[20px] h-[20px]" />
        <IoMdStar className="text-[#FFAD33] w-[20px] h-[20px]" />
        <IoMdStar className="text-[#FFAD33] w-[20px] h-[20px]" />
        <IoMdStar className="text-[#FFAD33] w-[20px] h-[20px]" />
        <IoMdStar className="text-gray-500 w-[20px] h-[20px]" />
      </span>
    );
  if (Math.floor(rates / 20) === 5)
    return (
      <span className="flex">
        <IoMdStar className="text-[#FFAD33] w-[20px] h-[20px]" />
        <IoMdStar className="text-[#FFAD33] w-[20px] h-[20px]" />
        <IoMdStar className="text-[#FFAD33] w-[20px] h-[20px]" />
        <IoMdStar className="text-[#FFAD33] w-[20px] h-[20px]" />
        <IoMdStar className="text-[#FFAD33] w-[20px] h-[20px]" />
      </span>
    );
}
