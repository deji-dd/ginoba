import Bg from "../../assets/nav-empower.png";
import { ReactComponent as DonateIcon } from "../../assets/donate-icon.svg";
import MobileHomeNavbar from "./MobileHomeNavbar";

export default function MobileNavEmpower() {
  return (
    <div
      style={{
        width: "30rem",
        height: "51.25rem",
        flexShrink: 0,
        boxShadow:
          "0px 3.2333767414093018px 3.2333767414093018px 0px rgba(0, 0, 0, 0.25)",
        background: `url(${Bg}), lightgray 50% / cover no-repeat`,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "8.92rem",
      }}
    >
      <MobileHomeNavbar />
      <div
        style={{
          display: "flex",
          flexShrink: 0,
          flexDirection: "column",
          gap: "0.91rem",
          alignSelf: "center",
        }}
      >
        <h1
          style={{
            color: "#FFF",
            fontFamily: "Clash Display",
            fontSize: "2.8rem",
            fontWeight: "600",
            letterSpacing: "0.1024rem",
            textAlign: "center",
          }}
        >
          Empowering <br />
          <div
            style={{
              background: "#096A56",
              display: "inline-flex",
              padding: "0.24031rem 0.72088rem",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.19225rem",
            }}
          >
            Africa
          </div>
          <br />
          One Step at a Time
        </h1>
        <p
          style={{
            color: "#FFF",
            fontSize: "1.28rem",
            fontWeight: "400",
            lineHeight: "1.78304rem",
            letterSpacing: "-0.0128rem",
            textAlign: "center",
            width: "27.04rem",
          }}
        >
          Together, let's empower the next generation of leaders, innovators,
          and change-makers in Africa through education, skill development, and
          improved healthcare.
        </p>
        <button
          type="button"
          style={{
            display: "flex",
            padding: "1.2rem 5.04rem",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5536rem",
            borderRadius: "0.06152rem",
            border: "1.153px solid rgba(9, 106, 86, 0.50)",
            background: "#FFF",
            color: "#096A56",
            fontFamily: "Manrope",
            fontSize: "1.28rem",
            fontWeight: "600",
          }}
        >
          Donate
          <DonateIcon style={{ width: "1.28rem" }} />
        </button>
      </div>
    </div>
  );
}
