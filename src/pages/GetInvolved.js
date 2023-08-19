import Contribute from "./modules/Contribute";
import Involved from "./modules/Involved";
import Navbar from "./modules/Navbar";
import ContactForm from "./modules/ContactForm";
import Future from "./modules/Future";
import Footer from "./modules/Footer";
import { useEffect, useState } from "react";
import MobileNavbar from "./mobile_modules/MobileNavbar";
import MobileInvolved from "./mobile_modules/MobileInvolved";
import MobileContribute from "./mobile_modules/MobileContribute";
import MobileContactForm from "./mobile_modules/MobileContactForm";
import MobileFuture from "./mobile_modules/MobileFuture";
import MobileFooter from "./mobile_modules/MobileFooter";

export default function GetInvolved() {
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
    <div style={{ background: "var(--bg, #FEFDFC)", width: "90rem" }}>
      <Navbar />
      <Involved />
      <Contribute />
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "6rem",
          flexDirection: "column",
        }}
      >
        <ContactForm />
        <Future />
        <Footer />
      </div>
    </div>
  ) : (
    <div>
      <MobileNavbar />
      <MobileInvolved />
      <MobileContribute />
      <MobileContactForm />
      <MobileFuture />
      <MobileFooter />
    </div>
  );
}
