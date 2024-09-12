import { Link } from "react-router-dom";

export function NavCategoty({ page, to }) {
  return (
    <div className="mt-[80px] ml-[135px]">
      <Link to="/" className="no-underline text-black text-[14px] font-normal">
        <span>Home</span>
      </Link>{" "}
      /{" "}
      <Link
        to={to}
        className="no-underline text-black text-[14px] font-semibold"
      >
        {page}
      </Link>
    </div>
  );
}
