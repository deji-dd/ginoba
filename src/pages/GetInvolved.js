import Contribute from "./modules/Contribute";
import Involved from "./modules/Involved";
import Navbar from "./modules/Navbar";
import ContactForm from "./modules/ContactForm";
import Future from "./modules/Future";
import Footer from "./modules/Footer";

export default function GetInvolved() {
  return (
    <div
      className="container-fluid px-0"
      style={{ background: "var(--bg, #FEFDFC)" }}
    >
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
  );
}
