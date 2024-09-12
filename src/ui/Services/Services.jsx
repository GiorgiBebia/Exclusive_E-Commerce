import { RiCustomerServiceLine } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";

export function Services() {
  return (
    <div className="max-w-[943px] w-full mx-auto my-[140px] flex justify-between">
      <div className="w-[249px] h-[161px] flex flex-col justify-between">
        <div className="w-[80px] h-[80px] bg-gray-500 rounded-[50px] flex justify-center items-center mx-auto">
          <div className="w-[58px] h-[58px] bg-black rounded-full flex justify-center items-center">
            <TbTruckDelivery className="text-white w-[40px] h-[40px]" />
          </div>
        </div>
        <h3 className="text-[20px] text-center">FREE AND FAST DELIVERY</h3>
        <h4 className="text-[14px] text-center">
          Free delivery for all orders over $140
        </h4>
      </div>
      <div className="w-[249px] h-[161px] flex flex-col justify-between">
        <div className="w-[80px] h-[80px] bg-gray-500 rounded-[50px] flex justify-center items-center mx-auto">
          <div className="w-[58px] h-[58px] bg-black rounded-full flex justify-center items-center">
            <RiCustomerServiceLine className="text-white w-[40px] h-[40px]" />
          </div>
        </div>
        <h3 className="text-[20px] text-center">24/7 CUSTOMER SERVICE</h3>
        <h4 className="text-[14px] text-center">
          Friendly 24/7 customer support
        </h4>
      </div>
      <div className="w-[255px] h-[161px] flex flex-col justify-between">
        <div className="w-[80px] h-[80px] bg-gray-500 rounded-[50px] flex justify-center items-center mx-auto">
          <div className="w-[58px] h-[58px] bg-black rounded-full flex justify-center items-center">
            <SiAdguard className="text-white w-[40px] h-[40px]" />
          </div>
        </div>
        <h3 className="text-[20px] text-center">MONEY BACK GUARANTEE</h3>
        <h4 className="text-[14px] text-center">
          We reurn money within 30 days
        </h4>
      </div>
    </div>
  );
}
