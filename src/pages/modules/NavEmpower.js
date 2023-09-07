import Modal from "@mui/material/Modal";
import { useState } from "react";

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
        width: "90rem",
        height: "53.125rem",
        flexShrink: 0,
        boxShadow:
          "0px 3.2333767414093018px 3.2333767414093018px 0px rgba(0, 0, 0, 0.25)",
        background: `url(https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/7d6fbf4019b159b9fcc982c9bbdb9f415ed2f5da/nav-empower.svg?min=1), lightgray 50% / cover no-repeat`,
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
                href={"/"}
                style={{
                  color: "#FFF",
                  fontFamily: "Clash Display",
                  fontSize: "2.1875rem",
                  textDecoration: "none",
                  fontWeight: "500",
                  letterSpacing: "0.0875rem",
                }}
              >
                <img
                  alt="logo"
                  src="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/cc097bf1f359c768c74ca03daadfee7ce9529421/logo.svg?min=1"
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
                      src="https://donorbox.org/embed/empowering-africa-one-step-at-a-time?default_interval=o&hide_donation_meter=true"
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
            onClick={handleOpen}
            type="button"
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
              fontFamily: "Verdana",
              fontSize: "2rem",
              fontWeight: "500",
            }}
          >
            Donate
            <img
              alt="donate icon"
              src="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/d00cc7196f0f5fc45eeb49487667ea5bdee6b021/donate-icon.svg?min=1"
              style={{ width: "2rem", height: "2rem" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
