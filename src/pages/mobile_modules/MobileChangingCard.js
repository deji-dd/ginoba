import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function MobileChangingCard(props) {
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
        display: "flex",
        width: "27.52rem",
        flexDirection: "column",
        alignItems: "center",
        flexShrink: 0,
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
      <img alt={props.title} src={props.img} width={"100%"} />
      <div
        style={{
          display: "flex",
          width: "27.52rem",
          padding: "1.23288rem 1.56168rem",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.41096rem",
          background: "#FFF",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.82rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.16rem",
            }}
          >
            <h1
              style={{
                color: "22495F",
                fontSize: "1.2rem",
                fontWeight: "600",
                lineHeight: "1.8rem",
                fontFamily: "Clash Display",
                width: "16.5rem",
              }}
            >
              {props.title}
            </h1>
            <p
              style={{
                color: "22495F",
                fontSize: "0.88rem",
                fontWeight: "400",
                lineHeight: "1.408rem",
                width: "21.84rem",
              }}
            >
              {props.desc}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1.23rem",
            }}
          >
            <button
              disabled={true}
              style={{
                display: "flex",
                padding: "0.65752rem 2.87672rem",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.41096rem",
                borderRadius: "0.08216rem",
                background: "#096A56",
                color: "#FFF",
                fontFamily: "Manrope",
                fontSize: "0.96rem",
                fontWeight: "600",
                border: "none",
              }}
            >
              Learn more
            </button>
            <button
              onClick={handleOpen}
              style={{
                display: "flex",
                padding: "0.65752rem 2.87672rem",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.41096rem",
                borderRadius: "0.08216rem",
                color: "#2E4049",
                fontFamily: "Manrope",
                fontSize: "0.96rem",
                fontWeight: "600",
                border: "2px solid #096A56",
                background: "#FFF",
              }}
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
