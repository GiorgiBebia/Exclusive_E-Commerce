/*
import { IoIosArrowForward } from "react-icons/io";
import { Nav } from "./Nav";

export function SideBar() {
  return (
    <nav className="w-[217px] flex flex-col justify-between">
      <Nav
        category="Women's Fashion"
        arrow={<IoIosArrowForward className="mr-[24px]" />}
      />
      <Nav
        category="Men's Fashion"
        arrow={<IoIosArrowForward className="mr-[24px]" />}
      />
      <Nav category="Electronics" />
      <Nav category="Home & LifeStyle" />
      <Nav category="Medicine" />
      <Nav category="Sports & Outdoor" />
      <Nav category="Baby's & Toys" />
      <Nav category="Groceries & Pets" />
      <Nav category="Health & Beauty" />
    </nav>
  );
}
  */

import { Nav } from "./Nav";

export function SideBar() {
  return (
    <nav className="w-[217px] flex flex-col justify-between">
      <Nav category="Women's Fashion" />
      <Nav category="Men's Fashion" />
      <Nav category="Electronics" />
      <Nav category="Home & LifeStyle" />
      <Nav category="Medicine" />
      <Nav category="Sports & Outdoor" />
      <Nav category="Baby's & Toys" />
      <Nav category="Groceries & Pets" />
      <Nav category="Health & Beauty" />
    </nav>
  );
}
