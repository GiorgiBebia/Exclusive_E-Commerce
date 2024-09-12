import { IoCallOutline } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { Line } from "../../Line";

export function ContactMain() {
  return (
    <div className="max-w-[1170px] w-full mx-auto mt-[80px] flex gap-[30px]">
      <div className="w-[340px] h-[457px] flex flex-col border border-gray-200">
        <div className="w-[270px] h-[366px] mx-[35px] my-[40px] flex flex-col justify-between">
          <div className="flex gap-[16px] items-center">
            <div className="w-[40px] h-[40px] bg-red-500 rounded-full">
              <IoCallOutline className="w-[40px] h-[40px] text-white p-[10px]" />
            </div>
            <span className="text-[16px] font-bold">Call To Us</span>
          </div>
          <span className="text-[14px]">
            We are available 24/7, 7 days a week.
          </span>
          <span className="text-[14px]">Phone: +8801611112222</span>

          <Line maxWidth="270px" />

          <div className="flex gap-[16px] items-center">
            <div className="w-[40px] h-[40px] bg-red-500 rounded-full">
              <SlEnvolopeLetter className="w-[40px] h-[40px] text-white p-[10px]" />
            </div>
            <span className="text-[16px] font-bold">Write To US</span>
          </div>

          <span className="text-[14px]">
            Fill out our form and we will contact you within 24 hours.
          </span>
          <span className="text-[14px]">Emails: customer@exclusive.com</span>
          <span className="text-[14px]">Emails: support@exclusive.com</span>
        </div>
      </div>
      <div className="w-[800px] h-[457px] border border-gray-200">
        <form action="" className="flex flex-col gap-[32px]">
          <div className="flex w-[741px] gap-[16px] mt-[40px] ml-[31px]">
            <input
              className="w-[235px] h-[50px] bg-white border-none placeholder:px-[16px] placeholder:py-[13px] placeholder:text-[16px]"
              type="text"
              name=""
              id=""
              placeholder="Your Name"
            />
            <input
              className="w-[235px] h-[50px] bg-white border-none placeholder:px-[16px] placeholder:py-[13px] placeholder:text-[16px]"
              type="email"
              name=""
              id=""
              placeholder="Your Email"
            />
            <input
              className="w-[235px] h-[50px] bg-white border-none placeholder:px-[16px] placeholder:py-[13px] placeholder:text-[16px]"
              type="number"
              name=""
              id=""
              placeholder="Your Phone"
            />
          </div>
          <input
            className="w-[737px] h-[207px] ml-[31px] bg-white border-none placeholder:px-[16px] placeholder:py-[13px] placeholder:text-[16px]"
            type="text"
            name=""
            id=""
            placeholder="Your Message"
          />
          <button className="w-[215px] h-[56px] bg-red-500 border-none rounded-[4px] self-end mr-[29px] text-white text-[16px]">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
