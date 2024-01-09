import Events from "./MoreEvents";
import Future from "./Future";

export default function LandingBottom() {
  return (
    <div
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
