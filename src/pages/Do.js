import Changing from "./modules/Changing";
import Navbar from "./modules/Navbar";
import What from "./modules/What";
import What2 from "./modules/What2";
import Events from "./modules/Events";
import Future from "./modules/Future";
import Footer from "./modules/Footer";

export default function Do() {
  return (
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
  );
}
