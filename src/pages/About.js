import Learn from "./modules/Learn";
import Navbar from "./modules/Navbar";
import Future from "./modules/Future";
import Footer from "./modules/Footer";
import Mission from "./modules/Mission";
import Meet from "./modules/Meet";
import Core from "./modules/Core";
import MobileNavbar from "./mobile_modules/MobileNavbar";
import { useEffect, useState } from "react";
import MobileLearn from "./mobile_modules/MobileLearn";
import MobileMission from "./mobile_modules/MobileMission";
import MobileMeet from "./mobile_modules/MobileMeet";
import MobileCore from "./mobile_modules/MobileCore";
import MobileFuture from "./mobile_modules/MobileFuture";
import MobileFooter from "./mobile_modules/MobileFooter";

export default function About() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
      console.log(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    document.title = "Ginoba | About Us";
  }, []);

  return size > 481 ? (
    <div style={{ background: "#EAF0E8", width: "90rem" }}>
      <Navbar />
      <Learn />
      <img
        alt="about background"
        src="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/4c3843bb22244979fe06c7d5d75a7967ab73cd7b/about-bg.svg?min=1"
        style={{
          width: "79.8125rem",
          height: "29.9375rem",
          flexShrink: 0,
          position: "absolute",
          top: "31rem",
          left: "5.2rem",
        }}
      />
      <Mission />
      <Meet />
      <Core />
      <div
        style={{
          display: "flex",
          width: "90rem",
          padding: "6.385rem 0rem 0.005rem 0rem",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "8.2625rem",
          background: "#FFF",
        }}
      >
        <Future />
        <Footer />
      </div>
    </div>
  ) : (
    <div>
      <MobileNavbar />
      <MobileLearn />
      <MobileMission />
      <MobileMeet />
      <MobileCore />
      <MobileFuture />
      <MobileFooter />
    </div>
  );
}
