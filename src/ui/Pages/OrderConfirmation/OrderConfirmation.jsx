import { useEffect } from "react";
import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { Line } from "../../Line";
import { TopAds } from "../../TopAds";
import { OrderConfirmationMain } from "./OrderConfirmationMain";

function OrderConfirmation() {
  useEffect(function () {
    document.title = `Order Confirmed | Exclusive E-Commerce`;
  }, []);

  return (
    <div>
      <TopAds />
      <Header main="true" />
      <Line maxWidth="1440px" />
      <OrderConfirmationMain />
      <Footer />
    </div>
  );
}

export default OrderConfirmation;
