import { Banner1 } from "./Banner1";
import { SideBar } from "./SideBar";

export function SideNavBanner() {
  return (
    <div className="max-w-[1170px] w-full h-[344px] mx-auto mt-[40px] flex justify-between">
      <SideBar />
      <Banner1 />
    </div>
  );
}
