import Title from "./Title";
import InvolvedBG from "../../assets/get-involved-bg.svg";

export default function Involved() {
  return (
    <div
      style={{
        width: "90rem",
        height: "38.8125rem",
        flexShrink: 0,
        background: "#EAF0E8",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "2.81rem",
      }}
    >
      <div
        style={{
          height: "30.99613rem",
          flexShrink: 0,
          display: "inline-flex",
          alignItems: "flex-start",
          gap: "12rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.9375rem",
            flexDirection: "column",
          }}
        >
          <Title title={"get involved"} />
          <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              gap: "2.4375rem",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.875rem",
                flexDirection: "column",
              }}
            >
              <h1
                style={{
                  width: "37.59388rem",
                  color: "var(--22495-f, #22495F)",
                  fontFamily: "Clash Display",
                  fontSize: "3.5rem",
                  fontWeight: "600",
                  lineHeight: "4.2rem",
                  letterSpacing: "0.035rem",
                }}
              >
                Your contribution can make a profound difference in Africa
              </h1>
              <p
                style={{
                  width: "36.75rem",
                  color: "var(--secondary-text, #525560)",
                  fontSize: "1.25rem",
                  fontWeight: "400",
                  lineHeight: "2rem",
                }}
              >
                Join us in creating lasting impact and empowering communities
                across Africa. Every donation counts – be a catalyst for
                positive change!
              </p>
            </div>
            <button
              style={{
                display: "flex",
                width: "18.1875rem",
                padding: "1rem 4.375rem",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.625rem",
                borderRadius: "0.125rem",
                background: "#096A56",
                border: "1px solid #096A56",
                color: "#FFF",
                fontFamily: "Manrope",
                fontSize: "1.25rem",
                fontWeight: "600",
              }}
            >
              Donate
            </button>
          </div>
        </div>
        <div
          style={{
            width: "31.625rem",
            height: "26.3125rem",
            flexShrink: 0,
            borderRadius: "1.25rem",
            background: `url(${InvolvedBG}), lightgray 50% / cover no-repeat`,
          }}
        ></div>
      </div>
    </div>
  );
}
