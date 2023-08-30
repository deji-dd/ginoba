import Founder from "../../assets/founder.svg";

export default function Meet() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "3rem",
        marginTop: "3.74rem",
        justifyContent: "center",
        width: "30rem",
        padding: "1.52rem 2.08rem 1.92rem 2rem",
        flexDirection: "column",
        background: "#EAF0E8",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.96rem",
          width: "25.6rem",
        }}
      >
        <h1
          style={{
            color: "var(--22495-f, #22495F)",
            textAlign: "center",
            fontFamily: "Clash Display",
            fontSize: "2.2116rem",
            fontWeight: "600",
            lineHeight: "2.65392rem",
          }}
        >
          Meet The Founder
        </h1>
        <p
          style={{
            color: "var(--text-color, #374151)",
            fontSize: "1.04rem",
            fontWeight: "500",
            lineHeight: "1.742rem",
            opacity: "0.6",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img width={"100%"} src={Founder} />
        <div
          style={{
            width: "100%",
            display: "flex",
            background: "#000",
            gap: "0.75rem",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "8.72rem",
          }}
        >
          <h1 style={{ color: "#FFF", fontSize: "1.28rem", fontWeight: "600" }}>
            Lucas Oribamise
          </h1>
          <h1
            style={{
              color: "#E7B161",
              fontSize: "1.12rem",
              fontWeight: "600",
              fontStyle: "italic",
            }}
          >
            Founder & CEO
          </h1>
          <p
            style={{
              color: "#FFF",
              fontSize: "0.88rem",
              fontWeight: "500",
              textAlign: "center",
              width: "22.104rem",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.
          </p>
        </div>
      </div>
    </div>
  );
}
