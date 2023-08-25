import Modal from "@mui/material/Modal";
import { useState } from "react";

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
    width: "fit-content",
  };
  const link_div = {
    flexShrink: 0,
    display: "flex",
    gap: "1.26rem",
    flexDirection: "column",
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
        height: "24.12rem",
        flexShrink: 0,
        display: "flex",
        gap: "20rem",
        background: "#0B0706",
        justifyContent: "center",
        alignItems: "center",
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
            Blog
          </a>
        </div> */}
        <div style={link_div}>
          <p style={head_link_style}>Connect</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=61550478897095"
            style={link_style}
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/ginobafoundation"
            target="_blank"
            rel="noreferrer"
            style={link_style}
          >
            Instagram
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/ginobafoundatio"
            style={link_style}
          >
            Twitter
          </a>
          <button
            onClick={handleOpen}
            style={{
              ...link_style,
              background: "none",
              border: "none",
              padding: "0",
            }}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}
