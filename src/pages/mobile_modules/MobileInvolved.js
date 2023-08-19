import MobileTitle from "./MobileTitle";
import InvolvedBG from "../../assets/get-involved-bg.svg";

export default function MobileInvolved() {
  return (
    <div
      style={{
        width: "30rem",
        flexShrink: 0,
        background: "#EAF0E8",
        display: "inline-flex",
        alignItems: "flex-start",
        marginBottom: "2.56rem",
        padding: "1.2rem",
        marginTop: "5rem",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          gap: "1.4rem",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.64rem",
            flexDirection: "column",
          }}
        >
          <MobileTitle title={"get involved"} />
          <h1
            style={{
              width: "27.12rem",
              color: "var(--22495-f, #22495F)",
              fontFamily: "Clash Display",
              fontSize: "1.76rem",
              fontWeight: "600",
              lineHeight: "2.81232rem",
              letterSpacing: "0.0704rem",
            }}
          >
            Your contribution can make a profound difference in Africa
          </h1>
        </div>
        <div
          style={{
            width: "27.2rem",
            height: "22.6308rem",
            flexShrink: 0,
            borderRadius: "0.9rem",
            background: `url(${InvolvedBG}), lightgray 50% / cover no-repeat`,
            backgroundSize: "cover",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.17rem",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              width: "26.16rem",
              color: "var(--secondary-text, #525560)",
              fontSize: "1.2rem",
              fontWeight: "400",
              lineHeight: "1.974rem",
            }}
          >
            Join us in creating lasting impact and empowering communities across
            Africa. Every donation counts – be a catalyst for positive change!
          </p>
          <button
            style={{
              display: "flex",
              width: "27.5rem",
              padding: "0.96rem 5.6rem",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.8rem",
              borderRadius: "0.16rem",
              background: "#096A56",
              border: "1px solid #096A56",
              color: "#FFF",
              fontFamily: "Manrope",
              fontSize: "1.6rem",
              fontWeight: "600",
            }}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}
