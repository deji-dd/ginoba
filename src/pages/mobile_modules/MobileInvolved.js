import MobileTitle from "./MobileTitle";
import InvolvedBG from "../../assets/get-involved-bg.svg";
import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function MobileInvolved() {
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
        width: "30rem",
        flexShrink: 0,
        background: "#EAF0E8",
        display: "inline-flex",
        alignItems: "flex-start",
        marginBottom: "2.56rem",
        padding: "1.2rem",
        marginTop: "5rem",
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
          display: "inline-flex",
          gap: "1.4rem",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.64rem",
            flexDirection: "column",
          }}
        >
          <MobileTitle title={"get involved"} />
          <h1
            style={{
              width: "27.12rem",
              color: "var(--22495-f, #22495F)",
              fontFamily: "Clash Display",
              fontSize: "1.76rem",
              fontWeight: "600",
              lineHeight: "2.81232rem",
              letterSpacing: "0.0704rem",
            }}
          >
            Your contribution can make a profound difference in Africa
          </h1>
        </div>
        <div
          style={{
            width: "27.2rem",
            height: "22.6308rem",
            flexShrink: 0,
            borderRadius: "0.9rem",
            background: `url(${InvolvedBG}), lightgray 50% / cover no-repeat`,
            backgroundSize: "cover",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.17rem",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              width: "26.16rem",
              color: "var(--secondary-text, #525560)",
              fontSize: "1.2rem",
              fontWeight: "400",
              lineHeight: "1.974rem",
            }}
          >
            Join us in creating lasting impact and empowering communities across
            Africa. Every donation counts – be a catalyst for positive change!
          </p>
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
    </div>
  );
}
