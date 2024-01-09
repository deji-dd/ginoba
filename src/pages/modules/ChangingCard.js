import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function ChangingCard(props) {
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
        display: "flex",
        width: "36.5rem",
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1.071px solid #096A56",
        }}
      >
        <img alt={props.title} src={props.img} width={"100%"} />
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: "1.875rem 2.375rem",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.625rem",
            background: "#FFF",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "1.25rem",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <h1
                style={{
                  color: "var(--22495F, #22495F)",
                  fontSize: "2.304rem",
                  fontWeight: "600",
                  lineHeight: "150%",
                  fontFamily: "Clash Display",
                }}
              >
                {props.title}
              </h1>
              <p
                style={{
                  color: "var(--22495F, #22495F)",
                  fontSize: "1.71432rem",
                  fontWeight: "400",
                  lineHeight: "160%",
                }}
              >
                {props.desc}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <a href={props.link}>
                <button
                  style={{
                    display: "flex",
                    padding: "1rem 4.375rem",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.625rem",
                    borderRadius: "0.125rem",
                    background: "#096A56",
                    color: "#FFF",
                    fontFamily: "Manrope",
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    border: "none",
                  }}
                >
                  Learn more
                </button>
              </a>
              <button
                onClick={handleOpen}
                style={{
                  display: "flex",
                  padding: "1rem 4.375rem",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.625rem",
                  borderRadius: "0.125rem",
                  color: "#2E4049",
                  fontFamily: "Manrope",
                  fontSize: "1.25rem",
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
    </div>
  );
}
