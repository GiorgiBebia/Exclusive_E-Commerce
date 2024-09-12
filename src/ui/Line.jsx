export function Line({ maxWidth, color = "black" }) {
  return (
    <div
      className="w-full h-[1px] mx-auto mt-[16px]"
      style={{
        maxWidth: maxWidth,
        backgroundColor: color,
      }}
    ></div>
  );
}
