import { useState } from "react";

export function SocialNumbersDiv({ icon, icon2, text, paragraph }) {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");

  return (
    <div
      className="w-[270px] h-[230px] border border-gray-500 rounded-[4px]"
      style={{
        backgroundColor: bgColor,
      }}
      onMouseEnter={() => {
        setBgColor("red");
        setTextColor("white");
      }}
      onMouseLeave={() => {
        setBgColor("white");
        setTextColor("black");
      }}
    >
      <div className="w-[169px] h-[170px] flex flex-col items-center justify-center mx-[50px] my-[30px] gap-[10px]">
        <div className="w-[80px] h-[80px] bg-gray-500 rounded-[50px] flex justify-center items-center mx-auto">
          <div
            className=" w-[58px] h-[58px] rounded-full flex justify-center items-center"
            style={{
              backgroundColor: textColor,
            }}
          >
            {bgColor === "white" ? icon : icon2}
          </div>
        </div>
        <span className="text-[32px] font-bold" style={{ color: textColor }}>
          {text}
        </span>
        <span
          className="text-[16px] w-[215px] text-center"
          style={{
            color: textColor,
          }}
        >
          {paragraph}
        </span>
      </div>
    </div>
  );
}
