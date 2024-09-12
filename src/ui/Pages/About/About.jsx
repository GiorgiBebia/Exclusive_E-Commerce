import { Header } from "../../Header";
import { Line } from "../../Line";
import { TopAds } from "../../TopAds";
import { Services } from "../../Services/Services";
import { Footer } from "../../Footer";
import { NavCategoty } from "../../NavCategoty";
import { HeadCrew } from "./HeadCrew";
import { SocialNumbers } from "./SocialNumbers";
import { OurStory } from "./OurStory";
import { useEffect } from "react";

function About() {
  useEffect(function () {
    document.title = `About | Exclusive E-Commerce`;
  }, []);

  return (
    <div>
      <TopAds />
      <Header main="true" />
      <Line maxWidth="1440px" />
      <NavCategoty page="About" to="/about" />
      <OurStory />
      <SocialNumbers />
      <HeadCrew />
      <Services />
      <Footer />
    </div>
  );
}

export default About;
