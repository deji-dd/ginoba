import Contact from "./modules/Contact";
import Empower from "./modules/Empower";
import Navbar from "./modules/Navbar";
import Why from "./modules/Why";
import Transform from "./modules/Transform";
import Donations from "./modules/Donations";
import Ways from "./modules/Ways";
import Changing from "./modules/Changing";
import Spend from "./modules/Spend";

export default function Home() {
  return (
    <div>
      <Contact />
      <Navbar />
      <Empower />
      <Why />
      <Transform />
      <Donations />
      <Ways />
      <Changing />
      <Spend />
    </div>
  );
}
