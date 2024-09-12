import { useState } from "react";

export function CategoryDiv({ icon, name, icon2 }) {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");

  return (
    <div
      className="w-[170px] h-[145px] border border-gray-500 rounded-[8px] flex flex-col items-center justify-center "
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
      {bgColor === "white" ? icon : icon2}
      <span style={{ color: textColor }}>{name}</span>
    </div>
  );
}
