import Modal from "@mui/material/Modal";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";

export default function MobileHomeNavbar() {
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
        width: "30rem",
        height: "5rem",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        background: "rgba(73, 91, 87, 0.71)",
        borderBottom: "0.2px solid var(--stroke, #A9C5DE)",
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
          width: "27.76rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "8.91432rem",
            display: "flex",
          }}
        >
          <a
            href={"/"}
            style={{
              color: "#FFF",
              fontFamily: "Clash Display",
              fontSize: "1.44rem",
              textDecoration: "none",
              fontWeight: "500",
              letterSpacing: "0.0576rem",
            }}
          >
            <img
              alt="logo"
              src="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/cc097bf1f359c768c74ca03daadfee7ce9529421/logo.svg?min=1"
              style={{
                width: "0.9448remrem",
                height: "1.97952remrem",
                marginRight: "0.5rem",
              }}
            />
            Ginoba
          </a>
        </div>
        <div style={{ display: "flex", gap: "1.25rem" }}>
          <button
            onClick={handleOpen}
            style={{
              display: "flex",
              paddingLeft: "2rem",
              paddingBottom: "0.1rem",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.20832rem",
              borderRadius: "8px",
              background:
                "#096A56 url(https://donorbox.org/images/white_logo.svg) no-repeat 10px",
              color: "white",
              fontFamily: "Verdana",
              fontSize: "1.04rem",
              fontWeight: "500",
              border: "none",
              width: "7rem",
              height: "3rem",
            }}
          >
            Donate
          </button>
          <MobileSidebar icon="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/4b2a4cb1deef9de35196f8916acc3114bf9aa09e/navbar-toggler.svg?min=1" />
        </div>
      </div>
    </div>
  );
}
