export function CountTime() {
  return (
    <div className="flex w-[302px] justify-between items-center">
      <div className="flex flex-col items-center">
        <span className="text-[12px]">Days</span>
        <span className="text-[32px] font-bold">31</span>
      </div>
      <span className="text-red-500 text-[36px]">:</span>
      <div className="flex flex-col items-center">
        <span className="text-[12px]">Hours</span>
        <span className="text-[32px] font-bold">24</span>
      </div>
      <span className="text-red-500 text-[36px]">:</span>
      <div className="flex flex-col items-center">
        <span className="text-[12px]">Minutes</span>
        <span className="text-[32px] font-bold">60</span>
      </div>
      <span className="text-red-500 text-[36px]">:</span>
      <div className="flex flex-col items-center">
        <span className="text-[12px]">Seconds</span>
        <span className="text-[32px] font-bold">60</span>
      </div>
    </div>
  );
}
