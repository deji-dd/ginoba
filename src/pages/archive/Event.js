import About from "../modules/About";
import Day from "../modules/Day";
import Navbar from "../modules/Navbar";
import Events from "../modules/Events";
import Footer from "../modules/Footer";

export default function Event() {
  return (
    <div
      style={{
        width: "90rem",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Navbar />
      <Day />
      <About />
      <Events />
      <Footer />
    </div>
  );
}
