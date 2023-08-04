import { ReactComponent as Logo } from "../../assets/logo.svg";

export default function Navbar() {
  const link_style = {
    color: "#2E4049",
    fontSize: "1.125rem",
    fontWeight: "400",
    textDecoration: "none",
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "white",
        width: "90rem",
        height: "5.4375rem",
        padding: "0.5rem 4.375rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0.5rem",
        flexShrink: 0,
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
              href={"/ginoba"}
              style={{
                color: "#2E4049",
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
          <div style={{ display: "flex", gap: "2.94rem" }}>
            <a href={"/ginoba"} style={link_style}>
              Home
            </a>
            <a href={"/ginoba/about-us"} style={link_style}>
              About us
            </a>
            <a href={"/ginoba/get-involved"} style={link_style}>
              Get involved
            </a>
            <a href={"/ginoba/what-we-do"} style={link_style}>
              What we do
            </a>
            <a href={"/ginoba/contact-us"} style={link_style}>
              Contact us
            </a>
          </div>
          <div
            style={{
              width: "13.125rem",
              height: "100%",
            }}
          >
            <button
              type="button"
              disabled="true"
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
                borderRadius: "0.125rem",
                border: "1px solid #096A56",
              }}
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
