export default function Footer() {
  const head_link_style = {
    color: "#FFF",
    fontFamily: "Clash Display",
    fontSize: "0.96rem",
    fontWeight: "600",
    letterSpacing: "0.01919rem",
    lineHeight: "1.536rem",
    marginBottom: "0.18rem",
    textDecoration: "none",
  };
  const link_style = {
    color: "#FFF",
    fontSize: "0.9375rem",
    fontWeight: "400",
    letterSpacing: "-0.00938rem",
    lineHeight: "1.5rem",
    textDecoration: "none",
  };
  const link_div = {
    flexShrink: 0,
    display: "flex",
    gap: "1.26rem",
    flexDirection: "column",
  };
  const disabled_link = {
    pointerEvents: "none",
  };

  return (
    <div
      style={{
        width: "90rem",
        height: "24.12rem",
        flexShrink: 0,
        display: "flex",
        gap: "20rem",
        background: "#0B0706",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          width: "16.44rem",
          color: "var(--bg-color, #E8EBF0)",
          fontFamily: "Clash Display",
          fontSize: "1.75rem",
          fontWeight: "500",
          letterSpacing: "0.07rem",
          marginBottom: "7rem",
        }}
      >
        Ginoba Foundation
      </h1>
      <div
        style={{
          flexShrink: 0,
          display: "inline-flex",
          justifyContent: "space-between",
          width: "25rem",
        }}
      >
        <div style={link_div}>
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
        {/* <div style={link_div}>
          <p style={head_link_style}>More</p>
          <a href="/project" style={{ ...link_style, ...disabled_link }}>
            Projects
          </a>
          <a href="/event" style={{ ...link_style, ...disabled_link }}>
            Events
          </a>
          <a href="/" style={{ ...link_style, ...disabled_link }}>
            Donate
          </a>
          <a href="/" style={{ ...link_style, ...disabled_link }}>
            Blog
          </a>
        </div> */}
        <div style={link_div}>
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
