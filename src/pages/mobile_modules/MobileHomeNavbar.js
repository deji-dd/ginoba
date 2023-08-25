import { ReactComponent as Logo } from "../../assets/logo.svg";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import NavbarToggler from "../../assets/navbar-toggler.svg";
import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function MobileHomeNavbar() {
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
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "26.5rem",
    border: "none",
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "30rem",
        height: "5rem",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        background: "rgba(73, 91, 87, 0.71)",
        borderBottom: "0.2px solid var(--stroke, #A9C5DE)",
      }}
    >
      <Modal
        disableEscapeKeyDown={true}
        open={open}
        onClose={handleClose}
        keepMounted={true}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        <div style={style}>
          <div style={{ width: "26.5rem" }}>
            <iframe
              src="https://donorbox.org/embed/empowering-africa?default_interval=o&hide_donation_meter=true"
              name="donorbox"
              allowpaymentrequest="allowpaymentrequest"
              seamless="seamless"
              title="Donation"
              frameborder="0"
              width="100%"
            ></iframe>
          </div>
          <button
            type="button"
            style={{
              width: "26.5rem",
              background: "#096A56",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.625rem",
              fontFamily: "Verdana",
              fontSize: "1.25rem",
              fontWeight: "500",
              display: "flex",
              borderRadius: "0",
              border: "none",
              height: "3rem",
            }}
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </Modal>
      <div
        style={{
          display: "flex",
          width: "27.76rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "8.91432rem",
            display: "flex",
          }}
        >
          <a
            href={"/"}
            style={{
              color: "#FFF",
              fontFamily: "Clash Display",
              fontSize: "1.44rem",
              textDecoration: "none",
              fontWeight: "500",
              letterSpacing: "0.0576rem",
            }}
          >
            <Logo
              style={{
                width: "0.9448remrem",
                height: "1.97952remrem",
                marginRight: "0.5rem",
              }}
            />
            Ginoba
          </a>
        </div>
        <div style={{ display: "flex", gap: "1.25rem" }}>
          <button
            onClick={handleOpen}
            style={{
              display: "flex",
              paddingLeft: "2rem",
              paddingBottom: "0.1rem",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.20832rem",
              borderRadius: "8px",
              background:
                "#096A56 url(https://donorbox.org/images/white_logo.svg) no-repeat 10px",
              color: "white",
              fontFamily: "Verdana",
              fontSize: "1.04rem",
              fontWeight: "500",
              border: "none",
              width: "7rem",
              height: "3rem",
            }}
          >
            Donate
          </button>
          <nav className="navbar navbar-dark p-0">
            <div
              style={{ paddingTop: "0.3125rem" }}
              className="container-fluid px-0"
            >
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
                    background: `url(${NavbarToggler})`,
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
                      <Logo
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
                        <p style={text_style}>+01 123 456</p>
                      </div>
                      <div style={{ ...col_style }}>
                        <MailIcon style={icon_style} />
                        <p style={text_style}>president@ginobafoundation.com</p>
                      </div>
                      <div style={{ ...col_style }}>
                        <MailIcon style={icon_style} />
                        <p style={text_style}>
                          coordinator@ginobafoundation.com
                        </p>
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
                        <InstagramIcon style={social_icon} />
                        <FacebookOutlinedIcon style={social_icon} />
                        <TwitterIcon style={social_icon} />
                      </div>
                    </div>
                    {/* <button
                      onClick={handleOpen}
                      style={{
                        display: "flex",
                        width: "15.4375rem",
                        padding: "0.7rem 4.375rem",
                        paddingBottom: "0.9rem",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.625rem",
                        borderRadius: "8px",
                        background:
                          "#096A56 url(https://donorbox.org/images/white_logo.svg) no-repeat 45px",
                        color: "white",
                        fontFamily: "Verdana",
                        fontSize: "1.6rem",
                        fontWeight: "500",
                        border: "none",
                      }}
                    >
                      Donate
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
