import ContactForm from "./modules/ContactForm";
import ContactUs from "./modules/ContactUs";
import Navbar from "./modules/Navbar";
import Footer from "./modules/Footer";

export default function Contact() {
  return (
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
  );
}
