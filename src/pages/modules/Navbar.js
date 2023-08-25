import { ReactComponent as Logo } from "../../assets/logo.svg";
import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function Navbar() {
  const link_style = {
    color: "#2E4049",
    fontSize: "1.125rem",
    fontWeight: "400",
    textDecoration: "none",
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
    if (reason && reason === "backdropClick") return;
    setOpen(false);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "90rem",
        height: "5.4375rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        flexShrink: 0,
        justifyContent: "center",
        alignItems: "center",
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
              href={"/"}
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
            <a href={"/contact-us"} style={link_style}>
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
              onClick={handleOpen}
              style={{
                width: "100%",
                height: "100%",
                background:
                  "#096A56 url(https://donorbox.org/images/white_logo.svg) no-repeat 45px",
                padding: "1rem 4.375rem",
                color: "white",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.625rem",
                fontFamily: "Verdana",
                fontSize: "1.25rem",
                fontWeight: "500",
                display: "flex",
                borderRadius: "8px",
                border: "none",
              }}
            >
              Donate
            </button>
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
          </div>
        </div>
      </div>
    </div>
  );
}
