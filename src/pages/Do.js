import Changing from "./modules/Changing";
import Navbar from "./modules/Navbar";
import What from "./modules/What";
import What2 from "./modules/What2";
import Events from "./modules/Events";
import Future from "./modules/Future";
import Footer from "./modules/Footer";
import { useEffect, useState } from "react";
import MobileNavbar from "./mobile_modules/MobileNavbar";
import MobileFuture from "./mobile_modules/MobileFuture";
import MobileFooter from "./mobile_modules/MobileFooter";
import MobileChanging from "./mobile_modules/MobileChanging";
import MobileEvents from "./mobile_modules/MobileEvents";
import MobileWhat from "./mobile_modules/MobileWhat";
import MobileWhat2 from "./mobile_modules/MobileWhat2";

export default function Do() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
      console.log(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return size > 481 ? (
    <div style={{ width: "90rem", background: "var(--bg, #FEFDFC)" }}>
      <Navbar />
      <What />
      <What2 />
      <Changing />
      <div
        style={{
          width: "90rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Future />
        <Events />
        <Footer />
      </div>
    </div>
  ) : (
    <div>
      <MobileNavbar />
      <MobileWhat />
      <MobileWhat2 />
      <MobileChanging />
      <MobileFuture />
      <MobileEvents />
      <MobileFooter />
    </div>
  );
}
