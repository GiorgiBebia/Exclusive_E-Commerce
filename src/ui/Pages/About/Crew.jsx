import { BsInstagram } from "react-icons/bs";
import { LuTwitter } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";

export function Crew({ img, alt, name, position }) {
  return (
    <div className="flex flex-col w-[370px] h-[564px] justify-between">
      <img src={img} alt={alt} />
      <span className="text-[32px] font-semibold">{name}</span>
      <span className="text-[16px]">{position}</span>
      <div className="flex justify-between w-[104px]">
        <LuTwitter className="text-black w-[20px] h-[17px]" />
        <BsInstagram className="text-black w-[18px] h-[18px]" />
        <RiLinkedinLine className="text-black w-[18px] h-[18px]" />
      </div>
    </div>
  );
}
