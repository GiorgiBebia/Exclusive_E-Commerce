import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";

export function BackForwardArrow({ onPrevious, onNext, hasPrevious, hasNext }) {
  return (
    <div className="flex w-[100px] justify-between">
      <div
        className="w-[46px] h-[46px] bg-[#D9DBE9] rounded-full flex items-center justify-center"
        style={{
          cursor: hasPrevious ? "pointer" : "not-allowed",
        }}
        onClick={hasPrevious ? onPrevious : undefined}
      >
        <MdOutlineArrowBack className="w-[34px] h-[34px]" />
      </div>
      <div
        className="w-[46px] h-[46px] bg-[#D9DBE9] rounded-full flex items-center justify-center"
        style={{
          cursor: hasNext ? "pointer" : "not-allowed",
        }}
        onClick={hasNext ? onNext : undefined}
      >
        <MdOutlineArrowForward className="w-[34px] h-[34px]" />
      </div>
    </div>
  );
}
