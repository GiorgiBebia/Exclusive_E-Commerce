import { Link } from "react-router-dom";

export function LoginedBackHome() {
  return (
    <div className="text-[36px] text-center mt-[30px]">
      You are already logged in. Go to{" "}
      <Link to="/" className="no-underline text-black">
        <span>Home Page</span>
      </Link>
    </div>
  );
}
