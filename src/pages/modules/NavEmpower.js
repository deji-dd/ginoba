import Bg from "../../assets/nav-empower.png";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as DonateIcon } from "../../assets/donate-icon.svg";

export default function NavEmpower() {
  const link_style = {
    color: "#EAF0E8",
    fontSize: "1.125rem",
    fontWeight: "500",
    textDecoration: "none",
  };

  const div_link_style = {
    display: "flex",
    padding: "0.4375rem 0.625rem",
    alignItems: "flex-start",
    gap: "0.5rem",
  };

  return (
    <div
      className="container-fluid px-0"
      style={{
        width: "90rem",
        height: "53.125rem",
        flexShrink: 0,
        boxShadow:
          "0px 3.2333767414093018px 3.2333767414093018px 0px rgba(0, 0, 0, 0.25)",
        background: `url(${Bg}), lightgray 50% / cover no-repeat`,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "7.25rem",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "90rem",
          height: "5.625rem",
          padding: "0.5rem 4.375rem ",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
          flexShrink: 0,
          background: "rgba(73, 91, 87, 0.41)",
        }}
      >
        <div
          style={{
            height: "4.4375rem",
            padding: "0.5rem 0rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            flexShrink: 0,
            width: "81.1875rem",
          }}
        >
          <div
            style={{
              height: "3.1875rem",
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "12rem" }}>
              <a
                href={"/home"}
                style={{
                  color: "#FFF",
                  fontFamily: "Clash Display",
                  fontSize: "2.1875rem",
                  textDecoration: "none",
                  fontWeight: "500",
                  letterSpacing: "0.0875rem",
                }}
              >
                <Logo
                  style={{
                    width: "1.3125rem",
                    height: "2.75rem",
                    marginRight: "0.5rem",
                  }}
                />
                Ginoba
              </a>
            </div>
            <div
              style={{
                display: "flex",
                padding: "0.125rem 0rem",
                alignItems: "flex-start",
                gap: "2.75rem",
              }}
            >
              <div style={div_link_style}>
                <a
                  href={"/"}
                  style={{
                    ...link_style,
                    borderBottom: "2px solid #EAF0E8",
                    background: "rgba(186, 208, 179, 0.29)",
                  }}
                >
                  Home
                </a>
              </div>
              <div style={div_link_style}>
                <a href={"/about-us"} style={link_style}>
                  About us
                </a>
              </div>
              <div style={div_link_style}>
                <a href={"/get-involved"} style={link_style}>
                  Get involved
                </a>
              </div>
              <div style={div_link_style}>
                <a href={"/what-we-do"} style={link_style}>
                  What we do
                </a>
              </div>
              <div style={div_link_style}>
                <a href={"/contact-us"} style={link_style}>
                  Contact us
                </a>
              </div>
            </div>
            <div
              style={{
                width: "13.125rem",
                height: "100%",
              }}
            >
              <button
                type="button"
                class="btn"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#096A56",
                  padding: "1rem 4.375rem",
                  color: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.625rem",
                  fontFamily: "Manrope",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  display: "flex",
                  borderRadius: "0",
                }}
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "55.75rem",
          height: "29.75rem",
          flexShrink: 0,
          marginLeft: "4.38rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "2.375rem",
          }}
        >
          <h1
            style={{
              color: "#FFF",
              fontFamily: "Clash Display",
              fontSize: "5rem",
              fontWeight: "600",
              letterSpacing: "0.2rem",
            }}
          >
            Empowering{" "}
            <div
              style={{
                background: "#096A56",
                display: "inline-flex",
                padding: "0.625rem 1.875rem",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Africa
            </div>{" "}
            One Step at a Time
          </h1>
          <p
            style={{
              width: "50.5625rem",
              color: "#FFF",
              fontSize: "1.75rem",
              fontWeight: "400",
              lineHeight: "2.43775rem",
              letterSpacing: "-0.0175rem",
            }}
          >
            Together, let's empower the next generation of leaders, innovators,
            and change-makers in Africa through education, skill development,
            and improved healthcare.
          </p>
          <button
            type="button"
            class="btn"
            style={{
              display: "flex",
              padding: "1rem 7.5rem",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.125rem",
              borderRadius: "0.125rem",
              border: "3px solid rgba(9, 106, 86, 0.50)",
              background: "#FFF",
              color: "#096A56",
              fontFamily: "Manrope",
              fontSize: "2rem",
              fontWeight: "600",
            }}
          >
            Donate
            <DonateIcon style={{ width: "2rem", height: "2rem" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
