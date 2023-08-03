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

  return (
    <div
      style={{
        width: "90rem",
        height: "24.12rem",
        flexShrink: 0,
        display: "flex",
        gap: "6rem",
        background: "#0B0706",
        padding: "5.2rem 6.6rem",
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
        }}
      >
        Ginoba Foundation
      </h1>
      <div
        style={{
          flexShrink: 0,
          display: "flex",
          gap: "6rem",
        }}
      >
        <div style={link_div}>
          <a href="/home" style={head_link_style}>
            Home
          </a>
          <a href="/about-us" style={link_style}>
            About us
          </a>
          <a href="#" style={link_style}>
            Team
          </a>
          <a href="/what-we-do" style={link_style}>
            What we do
          </a>
          <a href="/contact-us" style={link_style}>
            Contact
          </a>
        </div>
        <div style={link_div}>
          <a href="#" style={head_link_style}>
            More
          </a>
          <a href="#" style={link_style}>
            Projects
          </a>
          <a href="#" style={link_style}>
            Events
          </a>
          <a href="#" style={link_style}>
            Donate
          </a>
          <a href="#" style={link_style}>
            Blog
          </a>
        </div>
        <div style={link_div}>
          <a href="#" style={head_link_style}>
            Connect
          </a>
          <a href="#" style={link_style}>
            Facebook
          </a>
          <a href="#" style={link_style}>
            Instagram
          </a>
          <a href="#" style={link_style}>
            Twitter
          </a>
          <a href="#" style={link_style}>
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
