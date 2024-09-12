import { BiStoreAlt } from "react-icons/bi";
import { FaSackDollar } from "react-icons/fa6";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbMoneybag } from "react-icons/tb";
import { SocialNumbersDiv } from "./SocialNumbersDiv";

export function SocialNumbers() {
  // const [iconColor, setIconColor] = useState("white");
  return (
    <div className="max-w-[1170px] w-full mx-auto mt-[140px] flex justify-between">
      <SocialNumbersDiv
        icon={<BiStoreAlt className="w-[40px] h-[40px] text-white" />}
        icon2={<BiStoreAlt className="w-[40px] h-[40px] text-black" />}
        text="10.5k"
        paragraph="Sallers active our site"
      />
      <SocialNumbersDiv
        icon={
          <RiMoneyDollarCircleLine className="w-[40px] h-[40px] text-white" />
        }
        icon2={
          <RiMoneyDollarCircleLine className="w-[40px] h-[40px] text-black" />
        }
        text="33k"
        paragraph="Monthly Product Sale"
      />
      <SocialNumbersDiv
        icon={<TbMoneybag className="w-[40px] h-[40px] text-white" />}
        icon2={<TbMoneybag className="w-[40px] h-[40px] text-black" />}
        text="45.5k"
        paragraph="Customer active in our site"
      />
      <SocialNumbersDiv
        icon={<FaSackDollar className="w-[40px] h-[40px] text-white" />}
        icon2={<FaSackDollar className="w-[40px] h-[40px] text-black" />}
        text="25k"
        paragraph="Anual gross sale in our site"
      />
    </div>
  );
}
