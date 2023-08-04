import Social from "./modules/Social";
import Why from "./modules/Why";
import Transform from "./modules/Transform";
import Donations from "./modules/Donations";
import Ways from "./modules/Ways";
import Changing from "./modules/Changing";
import Spend from "./modules/Spend";
import NavEmpower from "./modules/NavEmpower";
import LandingBottom from "./modules/LandingBottom";
import Footer from "./modules/Footer";

export default function Home() {
  return (
    <div>
      <Social />
      <NavEmpower />
      <Why />
      <Transform />
      <Donations />
      <Ways />
      <div style={{ background: "#EAF0E8", width: "90rem" }}>
        <Changing />
      </div>
      <Spend />
      <LandingBottom />
      <Footer />
    </div>
  );
}
