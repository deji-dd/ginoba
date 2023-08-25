import Modal from "@mui/material/Modal";
import { useState } from "react";

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
    width: "fit-content",
    padding: 0,
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
    if (reason && reason == "backdropClick") {
      return;
    }
    setOpen(false);
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
            style={{ ...link_style, background: "none", border: "none" }}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}
