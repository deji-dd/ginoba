import Founder from "../../assets/founder.svg";

export default function Meet() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5.75438rem",
        marginTop: "3.74rem",
        justifyContent: "center",
        width: "90rem",
        paddingTop: "4.15rem",
        paddingBottom: "6.17rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "1.5rem",
          width: "39.8125rem",
        }}
      >
        <h1
          style={{
            color: "var(--22495-f, #22495F)",
            textAlign: "center",
            fontFamily: "Clash Display",
            fontSize: "3.5rem",
            fontWeight: "600",
            lineHeight: "4.12725rem",
          }}
        >
          Meet The Founder
        </h1>
        <p
          style={{
            color: "var(--text-color, #374151)",
            fontSize: "1.25rem",
            fontWeight: "500",
            lineHeight: "2.5125rem",
            width: "39.8125rem",
            opacity: "0.6",
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
        <img alt="Founder" width={"100%"} src={Founder} />
        <div
          style={{
            width: "100%",
            display: "flex",
            background: "#000",
            gap: "0.45rem",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "11.12831rem",
          }}
        >
          <h1 style={{ color: "#FFF", fontSize: "1.3rem", fontWeight: "600" }}>
            Lucas Oribamise
          </h1>
          <h1
            style={{
              color: "#E7B161",
              fontSize: "1.3rem",
              fontWeight: "600",
              fontStyle: "italic",
            }}
          >
            Founder & CEO
          </h1>
          <p
            style={{
              color: "#FFF",
              fontSize: "0.9385rem",
              fontWeight: "500",
              textAlign: "center",
              width: "30.087rem",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.
          </p>
        </div>
      </div>
    </div>
  );
}
