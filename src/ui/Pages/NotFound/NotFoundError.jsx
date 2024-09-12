import { Link } from "react-router-dom";

export function NotFoundError() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="w-[829px] h-[115px] mx-auto mt-[140px] text-[110px]">
        404 Not Found
      </h2>
      <p className="text-[16px] text-center mt-[40px]">
        Your visited page not found. You may go home page.
      </p>
      <Link to="/" className="no-underline text-black">
        <button className="w-[254px] h-[56px] bg-red-500 border-none rounded-[4px] mt-[80px]">
          Back to home page
        </button>
      </Link>
    </div>
  );
}
