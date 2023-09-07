import MobileHomeNavbar from "./MobileHomeNavbar";
import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function MobileNavEmpower() {
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
    if (reason && reason === "backdropClick") {
      return;
    }
    setOpen(false);
  };

  return (
    <div
      style={{
        width: "30rem",
        height: "51.25rem",
        flexShrink: 0,
        boxShadow:
          "0px 3.2333767414093018px 3.2333767414093018px 0px rgba(0, 0, 0, 0.25)",
        background: `url("https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/7d6fbf4019b159b9fcc982c9bbdb9f415ed2f5da/nav-empower.svg?min=1"), lightgray 50% / cover no-repeat`,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "8.92rem",
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
      <MobileHomeNavbar />
      <div
        style={{
          display: "flex",
          flexShrink: 0,
          flexDirection: "column",
          gap: "0.91rem",
          alignSelf: "center",
        }}
      >
        <h1
          style={{
            color: "#FFF",
            fontFamily: "Clash Display",
            fontSize: "2.8rem",
            fontWeight: "600",
            letterSpacing: "0.1024rem",
            textAlign: "center",
          }}
        >
          Empowering <br />
          <div
            style={{
              background: "#096A56",
              display: "inline-flex",
              padding: "0.24031rem 0.72088rem",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.19225rem",
            }}
          >
            Africa
          </div>
          <br />
          One Step at a Time
        </h1>
        <p
          style={{
            color: "#FFF",
            fontSize: "1.28rem",
            fontWeight: "400",
            lineHeight: "1.78304rem",
            letterSpacing: "-0.0128rem",
            textAlign: "center",
            width: "27.04rem",
          }}
        >
          Together, let's empower the next generation of leaders, innovators,
          and change-makers in Africa through education, skill development, and
          improved healthcare.
        </p>
        <button
          onClick={handleOpen}
          style={{
            display: "flex",
            padding: "1.2rem 5.04rem",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5536rem",
            borderRadius: "0.06152rem",
            border: "1.153px solid rgba(9, 106, 86, 0.50)",
            background: "#FFF",
            color: "#096A56",
            fontFamily: "Manrope",
            fontSize: "1.28rem",
            fontWeight: "600",
          }}
        >
          Donate
          <img
            alt="donate icon"
            src="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/d00cc7196f0f5fc45eeb49487667ea5bdee6b021/donate-icon.svg?min=1"
            style={{ width: "1.28rem" }}
          />
        </button>
      </div>
    </div>
  );
}
