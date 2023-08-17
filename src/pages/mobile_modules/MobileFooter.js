export default function MobileFooter() {
  const head_link_style = {
    color: "#FFF",
    fontFamily: "Clash Display",
    fontSize: "1.2288rem",
    fontWeight: "600",
    letterSpacing: "0.02456rem",
    lineHeight: "1.96608rem",
    marginBottom: "0.18rem",
    textDecoration: "none",
  };
  const link_style = {
    color: "#FFF",
    fontSize: "1.2rem",
    fontWeight: "400",
    letterSpacing: "-0.012rem",
    lineHeight: "1.92rem",
    textDecoration: "none",
  };
  const disabled_link = {
    pointerEvents: "none",
  };

  return (
    <div
      style={{
        width: "30rem",
        height: "30.88rem",
        flexShrink: 0,
        display: "flex",
        gap: "3.04rem",
        background: "#0B0706",
        marginTop: "2.96rem",
        flexDirection: "column",
        padding: "2.56rem 2.16rem",
      }}
    >
      <h1
        style={{
          width: "16.44rem",
          color: "var(--bg-color, #E8EBF0)",
          fontFamily: "Clash Display",
          fontSize: "2.24rem",
          fontWeight: "500",
          letterSpacing: "0.0896rem",
        }}
      >
        Ginoba
        <br />
        Foundation
      </h1>
      <div
        style={{
          flexShrink: 0,
          display: "inline-flex",
          gap: "12.72rem",
          alignSelf: "center",
        }}
      >
        <div
          style={{
            flexShrink: 0,
            display: "inline-flex",
            flexDirection: "column",
            gap: "1.84rem",
          }}
        >
          <a href="/" style={head_link_style}>
            Home
          </a>
          <a href="/about-us" style={link_style}>
            About us
          </a>
          <a href="/get-involved" style={link_style}>
            Get involved
          </a>
          <a href="/what-we-do" style={link_style}>
            What we do
          </a>
          <a href="/contact-us" style={link_style}>
            Contact
          </a>
        </div>
        <div
          style={{
            flexShrink: 0,
            display: "inline-flex",
            flexDirection: "column",
            gap: "1.84rem",
          }}
        >
          <p style={head_link_style}>Connect</p>
          <a href="/" style={{ ...link_style, ...disabled_link }}>
            Facebook
          </a>
          <a href="/" style={{ ...link_style, ...disabled_link }}>
            Instagram
          </a>
          <a href="/" style={{ ...link_style, ...disabled_link }}>
            Twitter
          </a>
          <a href="/" style={{ ...link_style, ...disabled_link }}>
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
