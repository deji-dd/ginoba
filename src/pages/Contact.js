import ContactForm from "./modules/ContactForm";
import ContactUs from "./modules/ContactUs";
import Navbar from "./modules/Navbar";
import Footer from "./modules/Footer";
import { useEffect, useState } from "react";
import MobileNavbar from "./mobile_modules/MobileNavbar";
import MobileContactUs from "./mobile_modules/MobileContactUs";
import MobileFooter from "./mobile_modules/MobileFooter";
import MobileContactForm from "./mobile_modules/MobileContactForm";

export default function Contact() {
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
    <div
      style={{
        background: "var(--bg, #FEFDFC)",
        width: "90rem",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <ContactUs />
      <ContactForm />
      <Footer />
    </div>
  ) : (
    <div>
      <MobileNavbar />
      <MobileContactUs />
      <MobileContactForm />
      <MobileFooter />
    </div>
  );
}
