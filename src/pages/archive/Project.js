import Features from "../modules/Features";
import Navbar from "../modules/Navbar";
import ProjectBody from "../modules/ProjectBody";
import Changing from "../modules/Changing";
import Future from "../modules/Future";
import Footer from "../modules/Footer";

export default function Project() {
  return (
    <div
      style={{
        width: "90rem",
        background: "var(--bg, #FEFDFC)",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Navbar />
      <ProjectBody />
      <Features />
      <Changing />
      <Future />
      <Footer />
    </div>
  );
}
