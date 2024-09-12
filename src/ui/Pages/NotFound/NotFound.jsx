import { Header } from "../../Header";
import { Line } from "../../Line";
import { NavCategoty } from "../../NavCategoty";
import { TopAds } from "../../TopAds";
import { Footer } from "../../Footer";
import { NotFoundError } from "./NotFoundError";
import { useEffect } from "react";

function NotFound() {
  useEffect(function () {
    document.title = `404 Error | Exclusive E-Commerce`;
  }, []);

  return (
    <div>
      <TopAds />
      <Header main="true" />
      <Line maxWidth="1440px" />
      <NavCategoty page="404 Error" to="*" />
      <NotFoundError />
      <Footer margintop="140px" />
    </div>
  );
}

export default NotFound;
