import Social from "./modules/Social";
import Why from "./modules/Why";
import Transform from "./modules/Transform";
import Donations from "./modules/Donations";
import Ways from "./modules/Ways";
import Changing from "./modules/Changing";
import Spend from "./modules/Spend";
import NavEmpower from "./modules/NavEmpower";
import LandingBottom from "./modules/LandingBottom";
import Footer from "./modules/Footer";
import MobileNavEmpower from "./mobile_modules/MobileNavEmpower";
import MobileWhy from "./mobile_modules/MobileWhy";
import MobileTransform from "./mobile_modules/MobileTransform";
import MobileDonations from "./mobile_modules/MobileDonations";
import { useEffect, useState } from "react";
import MobileWays from "./mobile_modules/MobileWays";
import MobileChanging from "./mobile_modules/MobileChanging";
import MobileSpend from "./mobile_modules/MobileSpend";
import MobileFuture from "./mobile_modules/MobileFuture";
import MobileEvents from "./mobile_modules/MobileEvents";
import MobileFooter from "./mobile_modules/MobileFooter";

export default function Home() {
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
    <div>
      <Social />
      <NavEmpower />
      <Why />
      <Transform />
      <Donations />
      <Ways />
      <div style={{ background: "#EAF0E8", width: "90rem" }}>
        <Changing />
      </div>
      <Spend />
      <LandingBottom />
      <Footer />
    </div>
  ) : (
    <div>
      <MobileNavEmpower />
      <MobileWhy />
      <MobileTransform />
      <MobileDonations />
      <MobileWays />
      <div style={{ background: "#EAF0E8", width: "30rem" }}>
        <MobileChanging />
      </div>
      <MobileSpend />
      <MobileFuture />
      <MobileEvents />
      <MobileFooter />
    </div>
  );
}
