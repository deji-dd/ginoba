import Title from "./Title";
import InvolvedBG from "../../assets/get-involved-bg.svg";
import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function Involved() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    setOpen(false);
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

  return (
    <div
      style={{
        width: "90rem",
        height: "38.8125rem",
        flexShrink: 0,
        background: "#EAF0E8",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "2.81rem",
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
          height: "30.99613rem",
          flexShrink: 0,
          display: "inline-flex",
          alignItems: "flex-start",
          gap: "12rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.9375rem",
            flexDirection: "column",
          }}
        >
          <Title title={"get involved"} />
          <div
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              gap: "2.4375rem",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.875rem",
                flexDirection: "column",
              }}
            >
              <h1
                style={{
                  width: "37.59388rem",
                  color: "var(--22495-f, #22495F)",
                  fontFamily: "Clash Display",
                  fontSize: "3.5rem",
                  fontWeight: "600",
                  lineHeight: "4.2rem",
                  letterSpacing: "0.035rem",
                }}
              >
                Your contribution can make a profound difference in Africa
              </h1>
              <p
                style={{
                  width: "36.75rem",
                  color: "var(--secondary-text, #525560)",
                  fontSize: "1.25rem",
                  fontWeight: "400",
                  lineHeight: "2rem",
                }}
              >
                Join us in creating lasting impact and empowering communities
                across Africa. Every donation counts – be a catalyst for
                positive change!
              </p>
            </div>
            <button
              onClick={handleOpen}
              style={{
                width: "14rem",
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
          </div>
        </div>
        <div
          style={{
            width: "31.625rem",
            height: "26.3125rem",
            flexShrink: 0,
            borderRadius: "1.25rem",
            background: `url(${InvolvedBG}), lightgray 50% / cover no-repeat`,
          }}
        ></div>
      </div>
    </div>
  );
}
