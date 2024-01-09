import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function MobileSidebar(props) {
  const link_style = {
    color: "#374151",
    fontSize: "1.2remrem",
    fontWeight: "500",
    textDecoration: "none",
    lineHeight: "1.44rem",
  };

  const icon_style = {
    width: "0.84rem",
    color: "#126360",
    display: "inline-flex",
  };
  const text_style = {
    color: "#126360",
    fontSize: "0.96rem",
    fontWeight: "400",
  };
  const col_style = { display: "flex", gap: "0.5rem" };
  const social_icon = {
    width: "1.36496rem",
    height: "1.3144rem",
    color: "#126360",
  };

  return (
    <nav className="navbar navbar-dark p-0">
      <div style={{ paddingTop: "0.3125rem" }} className="container-fluid px-0">
        <button
          style={{
            width: "1.375rem",
            border: "none",
          }}
          className="navbar-toggler p-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span
            style={{
              width: "1.375rem",
              height: "1.92rem",
              background: `url(${props.icon})`,
            }}
            className="navbar-toggler-icon"
          ></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                justifyContent: "space-between",
                width: "20.1rem",
              }}
            >
              <a
                href={"/"}
                style={{
                  color: "#096A56",
                  fontFamily: "Clash Display",
                  fontSize: "1.44rem",
                  textDecoration: "none",
                  fontWeight: "500",
                  letterSpacing: "0.0576rem",
                }}
              >
                <img
                  alt="logo"
                  src="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/cc097bf1f359c768c74ca03daadfee7ce9529421/logo.svg?min=1"
                  style={{
                    width: "0.9448rem",
                    marginRight: "0.39rem",
                  }}
                />
                Ginoba
              </a>
              <button
                style={{ marginTop: "0.5rem" }}
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2.75rem",
              }}
            >
              <a href={"/"} style={link_style}>
                Home
              </a>
              <a href={"/about-us"} style={link_style}>
                About us
              </a>
              <a href={"/get-involved"} style={link_style}>
                Get involved
              </a>
              <a href={"/what-we-do"} style={link_style}>
                What we do
              </a>
              <a href={"/team"} style={link_style}>
                Team
              </a>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <a href={"/contact-us"} style={link_style}>
                  Contact us
                </a>
                <div style={{ ...col_style }}>
                  <PhoneIcon style={icon_style} />
                  <p style={text_style}>+1-(612)-450-4186</p>
                </div>
                <div style={{ ...col_style }}>
                  <MailIcon style={icon_style} />
                  <p style={text_style}>president@ginobafoundation.org</p>
                </div>

                <div
                  style={{
                    display: "flex",
                    height: "2.25rem",
                    width: "10.14rem",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2.15rem",
                    background: "#BAD0B3",
                  }}
                >
                  <a
                    href="https://www.instagram.com/ginobafoundation"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon style={social_icon} />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/profile.php?id=61550478897095"
                  >
                    <FacebookOutlinedIcon style={social_icon} />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/ginobafoundatio"
                  >
                    <TwitterIcon style={social_icon} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
