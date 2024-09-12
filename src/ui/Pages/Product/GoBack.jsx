import { useNavigate } from "react-router-dom";

export function GoBack() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  return (
    <h3 className="mt-[80px] ml-[135px] font-semibold" onClick={handleClick}>
      Go Back
    </h3>
  );
}
