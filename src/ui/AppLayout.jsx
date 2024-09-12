import { TopAds } from "./TopAds";
import { Header } from "./Header";
import { SideNavBanner } from "./NavBaner/SideNavBanner";
import { Line } from "./Line";

import { FlashSales } from "./FlashSale/FlashSales";
import { BrowseByCategory } from "./BrowseByCategory/BrowseByCategory";

import { BestSellingProducts } from "./BestSellingProducts/BestSellingProducts";
import { Banner2 } from "./Banner2";
import { ExploreOurProducts } from "./ExploreOurProducts/ExploreOurProducts";
import { NewArrival } from "./NewArrival/NewArrival";
import { Services } from "./Services/Services";
import { Footer } from "./Footer";
import { useEffect } from "react";

function AppLayout() {
  useEffect(function () {
    document.title = `Exclusive E-Commerce`;
  }, []);

  return (
    <>
      <TopAds />
      <Header main="true" />
      <Line maxWidth="1440px" />
      <SideNavBanner />
      <FlashSales />
      <Line maxWidth="1170px" />
      <BrowseByCategory />
      <Line maxWidth="1170px" />
      <BestSellingProducts />
      <Banner2 />
      <ExploreOurProducts />
      <NewArrival />
      <Services />
      <Footer />
    </>
  );
}

export default AppLayout;
