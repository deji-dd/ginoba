import Events from "./Events";
import Future from "./Future";

export default function LandingBottom() {
  return (
    <div
      className="container-fluid"
      style={{
        width: "90rem",
        background: "#FFF",
        padding: "0 6.6rem",
        marginBottom: "7.29rem",
      }}
    >
      <Future />
      <Events />
    </div>
  );
}
