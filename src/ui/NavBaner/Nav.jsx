/*
export function Nav({ category, arrow = "" }) {
  return (
    <ul className="pl-0">
      <li className="list-none flex justify-between items-center">
        {category} {arrow}
      </li>
    </ul>
  );
}
*/

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export function Nav({ category }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <ul className="pl-0">
        <li
          className="list-none flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          {category} {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </li>
      </ul>
      {isOpen && (
        <ul className="pl-4">
          <li className="list-none">Subcategory 1</li>
          <li className="list-none">Subcategory 2</li>
          <li className="list-none">Subcategory 3</li>
        </ul>
      )}
    </div>
  );
}
