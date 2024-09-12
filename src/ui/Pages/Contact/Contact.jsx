import { Header } from "../../Header";
import { Line } from "../../Line";
import { TopAds } from "../../TopAds";
import { NavCategoty } from "../../NavCategoty";
import { Footer } from "../../Footer";
import { ContactMain } from "./ContactMain";
import { useEffect } from "react";

function Contact() {
  useEffect(function () {
    document.title = `Contact | Exclusive E-Commerce`;
  }, []);

  return (
    <div>
      <TopAds />
      <Header main="true" />
      <Line maxWidth="1440px" />
      <NavCategoty page="Contact" to="/contact" />
      <ContactMain />
      <Footer margintop="140px" />
    </div>
  );
}

export default Contact;
