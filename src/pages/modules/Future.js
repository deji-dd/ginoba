import BrighterBG from "../../assets/brighter-future-bg.svg";
import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function Future() {
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
        width: "76.74rem",
        height: "23.04rem",
        flexShrink: 0,
        borderRadius: "1.2rem",
        marginTop: "5.76rem",
        marginBottom: "6.78rem",
        background: `url(${BrighterBG}), lightgray 0px -224.96px / 100% 222.049% no-repeat`,
        display: "flex",
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
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2.8125rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <h1
            style={{
              color: "var(--bg-color, #E8EBF0)",
              textAlign: "center",
              fontFamily: "Clash Display",
              fontSize: "2.88rem",
              fontWeight: "600",
              lineHeight: "3.456rem",
              letterSpacing: "0.0625rem",
            }}
          >
            A brighter future starts with you.
          </h1>
          <p
            style={{
              width: "61.9375rem",
              color: "var(--bg-color, #E8EBF0)",
              textAlign: "center",
              fontSize: "1.75rem",
              fontWeight: "500",
              lineHeight: "2.1rem",
            }}
          >
            Partner with us to make a lasting impact on African lives, ensuring
            access to education, essential skills, and better health.
          </p>
        </div>
        <div
          style={{
            width: "27.0275rem",
            height: "3.625rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <a href="/contact-us">
            <button
              type="button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
                borderRadius: "0.24rem",
                border: "none",
                backdropFilter: "blur(38.39999771118164px)",
                fontSize: "1.375rem",
                fontWeight: "500",
                letterSpacing: "-0.0275rem",
                padding: "0.8rem 1.75rem",
                background: "var(--primary-color, #096A56)",
                color: "#E8EBF0",
              }}
            >
              Join as a volunteer
            </button>
          </a>
          <button
            onClick={handleOpen}
            style={{
              display: "inline-flex",
              padding: "1rem 2.5rem",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.6rem",
              borderRadius: "0.24rem",
              background: "var(--bg-color, #E8EBF0)",
              border: "none",
              backdropFilter: "blur(38.39999771118164px)",
              color: "var(--primary-color, #096A56)",
              fontSize: "1.375rem",
              fontWeight: "500",
              letterSpacing: "-0.0275rem",
            }}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}
