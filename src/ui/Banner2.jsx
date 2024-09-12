export function Banner2() {
  return (
    <div
      className="max-w-[1170px] w-full h-[500px] mx-auto relative"
      style={{
        backgroundImage: `url("img/banner2.png")`,
      }}
    >
      <h3 className="absolute text-green-500 top-[69px] left-[56px]">
        Categories
      </h3>
      <h2 className="absolute text-white w-[443px] h-[12px] text-[48px] top-[121px] left-[56px] mt-auto">
        Enhance Your Music Experience
      </h2>
      <div className="absolute w-[320px] h-[62px] top-[273px] left-[56px] flex justify-between">
        <div className="bg-white rounded-full flex justify-center items-center flex-col w-[62px] h-[62px] font-bold text-[11px]">
          <span>23</span>
          <span>Days</span>
        </div>
        <div className="bg-white rounded-full flex justify-center items-center flex-col w-[62px] h-[62px] font-bold text-[11px]">
          <span>05</span>
          <span>Hours</span>
        </div>
        <div className="bg-white rounded-full flex justify-center items-center flex-col w-[62px] h-[62px] font-bold text-[11px]">
          <span>59</span>
          <span>Minutes</span>
        </div>
        <div className="bg-white rounded-full flex justify-center items-center flex-col w-[62px] h-[62px] font-bold text-[11px]">
          <span>35</span>
          <span>Seconds</span>
        </div>
      </div>

      <button className="w-[171px] h-[56px] bg-[#47B486] absolute top-[375px] left-[56px] border-none rounded-[4px] text-white">
        Buy Now!
      </button>
    </div>
  );
}
