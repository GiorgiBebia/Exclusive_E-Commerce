import { BiJoystick } from "react-icons/bi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoIosPhonePortrait } from "react-icons/io";
import { LuHeadphones } from "react-icons/lu";
import { MdOutlineCameraAlt } from "react-icons/md";
import { TbDeviceWatchStats } from "react-icons/tb";
import { CategoryDiv } from "./CategoryDiv";

export function Category() {
  return (
    <div className="flex mt-[60px] gap-[30px] mb-[70px]" s>
      <CategoryDiv
        icon={<IoIosPhonePortrait className="w-[60px] h-[70px] text-black" />}
        icon2={<IoIosPhonePortrait className="w-[60px] h-[70px] text-white" />}
        name="Phones"
      />
      <CategoryDiv
        icon={
          <HiOutlineComputerDesktop className="w-[60px] h-[70px] text-black" />
        }
        icon2={
          <HiOutlineComputerDesktop className="w-[60px] h-[70px] text-white" />
        }
        name="Computers"
      />
      <CategoryDiv
        icon={<TbDeviceWatchStats className="w-[60px] h-[70px] text-black" />}
        icon2={<TbDeviceWatchStats className="w-[60px] h-[70px] text-white" />}
        name="SmartWatch"
      />
      <CategoryDiv
        icon={<MdOutlineCameraAlt className="w-[60px] h-[70px] text-black" />}
        icon2={<MdOutlineCameraAlt className="w-[60px] h-[70px] text-white" />}
        name="Camera"
      />
      <CategoryDiv
        icon={<LuHeadphones className="w-[60px] h-[70px] text-black" />}
        icon2={<LuHeadphones className="w-[60px] h-[70px] text-white" />}
        name="HeadPhones"
      />
      <CategoryDiv
        icon={<BiJoystick className="w-[60px] h-[70px] text-black" />}
        icon2={<BiJoystick className="w-[60px] h-[70px] text-white" />}
        name="Gaming"
      />
    </div>
  );
}
