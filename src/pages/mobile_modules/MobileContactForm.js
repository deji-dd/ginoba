import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { Navigate } from "react-router-dom";

export default function MobileContactForm() {
  var [number] = useState(Math.floor(Math.random() * 10));
  let [state, setState] = useState(true);
  let [header, setHeader] = useState("Contact Form");
  let [disabled, setDisabled] = useState(false);
  const form = useRef();
  const label_style = {
    color: "var(--secondary-text, #525560)",
    fontSize: "0.96rem",
    fontWeight: "400",
    lineHeight: "1.536rem",
  };
  const input_style = {
    display: "flex",
    padding: "0.26744rem 0.3744rem",
    alignItems: "center",
    gap: "0.214rem",
    flex: "1 0 0",
    alignSelf: "stretch",
    borderRadius: "0.2rem",
    border: "0.5px solid var(--outline, #A9C5DE)",
    background: "var(--base-white, #FFF)",
  };
  const div_style = {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.16048rem",
    width: "24.64rem",
    flexDirection: "column",
  };

  function makeid(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  return state ? (
    <form
      ref={form}
      onSubmit={(e) => {
        e.preventDefault();
        setDisabled(true);
        setHeader("Thank you for your message!");
        emailjs
          .sendForm(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAIL_USER_ID
          )
          .then(
            () => {
              setTimeout(() => {
                setHeader("Contact Form");
                setDisabled(false);
              }, 5000);
            },
            () => {
              setState(false);
            }
          );
        e.target.reset();
      }}
      style={{
        display: "flex",
        width: "27.2rem",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.26744rem",
        flexShrink: 0,
        borderRadius: "0.32096rem",
        border: "2.006px solid #F1F5EF",
        background: "var(--base-white, #FFF)",
        marginTop: "2.8rem",
        marginBottom: "4.9rem",
        marginLeft: "1.4rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          padding: "0.56rem 0rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            padding: "0.64192rem",
            gap: "1.2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#DCE8D9",
              padding: "0.48rem",
              width: "1.92rem",
              height: "1.92rem",
              border: "4px solid #F1F5F0",
              borderRadius: "1.12rem",
            }}
          >
            <CheckCircleOutlineIcon
              style={{
                width: "0.96rem",
                height: "0.96rem",
                flexShrink: "0",
                color: "#096A56",
              }}
            />
          </div>
          <h3
            style={{
              color: "#096A56",
              fontFamily: "Clash Display",
              fontSize: "1.6rem",
              fontWeight: "600",
              letterSpacing: "0.032rem",
            }}
          >
            {header}
          </h3>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.6rem",
          alignSelf: "stretch",
        }}
      >
        <div style={div_style}>
          <input type="hidden" name="ticket" value={makeid(number)} />
          <label style={label_style}>First Name</label>
          <input
            style={input_style}
            required
            type="text"
            name="first_name"
            placeholder="Lorem"
          />
        </div>
        <div style={div_style}>
          <label style={label_style}>Last Name</label>
          <input
            style={input_style}
            required
            type="text"
            name="last_name"
            placeholder="Ipsuum"
          />
        </div>
        <div style={div_style}>
          <label style={label_style}>Email</label>
          <input
            style={input_style}
            required
            type="email"
            name="user_email"
            placeholder="Loremipsum@email.com"
          />
        </div>
        <div style={{ ...div_style, height: "7.92rem" }}>
          <label style={label_style}>Message</label>
          <textarea
            style={input_style}
            required
            type="email"
            name="message"
            placeholder="Type your message"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          padding: "0.42792rem",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "0.32096rem",
          alignSelf: "stretch",
        }}
      >
        <input
          disabled={disabled}
          style={{
            display: "flex",
            width: "24.8rem",
            height: "2.5rem",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.214rem",
            borderRadius: "0.10696rem",
            border: "0.334px solid #096A56",
            background: "#096A56",
            boxShadow:
              "0px 0.3343166708946228px 0.6686333417892456px 0px rgba(16, 24, 40, 0.05)",
            color: "#FFF",
            fontSize: "1.2rem",
            fontWeight: "500",
            lineHeight: "1.664rem",
          }}
          type="submit"
          value={"Send Message"}
        />
      </div>
    </form>
  ) : (
    <Navigate to={"/error"} />
  );
}
