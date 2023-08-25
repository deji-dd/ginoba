import BrighterBG from "../../assets/brighter-future-bg.svg";
import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function MobileFuture() {
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
        width: "27.2rem",
        height: "12.72rem",
        flexShrink: 0,
        borderRadius: "0.42536rem",
        background: `url(${BrighterBG}), lightgray 0px -224.96px / 100% 222.049% no-repeat`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundPosition: "center",
        alignSelf: "center",
        marginLeft: "1.4rem",
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
          flexDirection: "column",
          alignItems: "center",
          gap: "1.31rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.64rem",
          }}
        >
          <h1
            style={{
              color: "var(--bg-color, #E8EBF0)",
              textAlign: "center",
              fontFamily: "Clash Display",
              fontSize: "1.44rem",
              fontWeight: "600",
              lineHeight: "1.728rem",
              letterSpacing: "0.02216rem",
            }}
          >
            A brighter future starts with you.
          </h1>
          <p
            style={{
              width: "21.95336rem",
              color: "var(--bg-color, #E8EBF0)",
              textAlign: "center",
              fontSize: "0.88rem",
              fontWeight: "500",
              lineHeight: "1.056rem",
            }}
          >
            Partner with us to make a lasting impact on African lives, ensuring
            access to education, essential skills, and better health.
          </p>
        </div>
        <div
          style={{
            width: "22.53456rem",
            height: "2.72rem",
            display: "flex",
            justifyContent: "center",
            gap: "1.62rem",
          }}
        >
          <button
            type="button"
            disabled={true}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.46656rem",
              borderRadius: "0.18664rem",
              background: "var(--primary-color, #096A56)",
              border: "none",
              backdropFilter: "blur(23.329105377197266px)",
              color: "#E8EBF0",
              fontSize: "1.06928rem",
              fontWeight: "500",
              letterSpacing: "-0.02136rem",
              height: "2.72rem",
            }}
          >
            Join as a volunteer
          </button>
          <button
            onClick={handleOpen}
            style={{
              display: "inline-flex",
              padding: "0.7776rem 1.94408rem",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.46656rem",
              borderRadius: "0.18664rem",
              background: "var(--bg-color, #E8EBF0)",
              border: "none",
              backdropFilter: "blur(23.329105377197266px)",
              color: "var(--primary-color, #096A56)",
              fontSize: "1.06928rem",
              fontWeight: "500",
              letterSpacing: "-0.02136rem",
              width: "8.72rem",
              height: "2.72rem",
            }}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}
