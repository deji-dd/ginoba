import Articles from "../modules/Articles";
import Navbar from "../modules/Navbar";
import News from "../modules/News";
import Footer from "../modules/Footer";

export default function Blog() {
  return (
    <div
      style={{
        background: "var(--bg, #FEFDFC)",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "90rem",
        flexShrink: 0,
      }}
    >
      <Navbar />
      <News />
      <Articles />
      <Footer />
    </div>
  );
}
