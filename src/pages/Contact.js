import ContactForm from "./modules/ContactForm";
import ContactUs from "./modules/ContactUs";
import Navbar from "./modules/Navbar";

export default function Contact() {
  return (
    <div
      className="container-fluid px-0"
      style={{ background: "var(--bg, #FEFDFC)" }}
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
    </div>
  );
}
