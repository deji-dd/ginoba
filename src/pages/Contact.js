import ContactForm from "./modules/ContactForm";
import ContactUs from "./modules/ContactUs";
import Navbar from "./modules/Navbar";
import Footer from "./modules/Footer";

export default function Contact() {
  return (
    <div
      className="container-fluid px-0"
      style={{ background: "var(--bg, #FEFDFC)", width: "90rem" }}
    >
      <Navbar />
      <ContactUs />
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "90rem",
          marginTop: "3.31rem",
          marginBottom: "4.94rem",
        }}
      >
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
