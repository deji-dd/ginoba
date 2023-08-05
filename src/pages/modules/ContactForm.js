import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export default function ContactForm() {
  var [number, setNumber] = useState(Math.floor(Math.random() * 10));
  const form = useRef();
  const label_style = {
    color: "var(--secondary-text, #525560)",
    fontSize: "1.25rem",
    fontWeight: "400",
    lineHeight: "2rem",
  };
  const input_style = {
    display: "flex",
    padding: "0.625rem 0.875rem",
    alignItems: "center",
    gap: "0.5rem",
    flex: "1 0 0",
    alignSelf: "stretch",
    borderRadius: "0.25rem",
    border: "1px solid var(--outline, #A9C5DE)",
    background: "var(--base-white, #FFF)",
  };
  const div_style = {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.375rem",
    width: "26.25rem",
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

  return (
    <form
      ref={form}
      onSubmit={(e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAIL_USER_ID
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        e.target.reset();
        setNumber((number += 1));
      }}
      style={{
        display: "flex",
        width: "63.5625rem",
        height: "46.875rem",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.625rem",
        flexShrink: 0,
        borderRadius: "0.75rem",
        border: "6px solid #F1F5EF",
        background: "var(--base-white, #FFF)",
        marginTop: "3.31rem",
        marginBottom: "4.94rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          background: "var(--base-white, #FFF)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            background: "var(--base-white, #FFF)",
            padding: "1.5rem",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#EAF0E8",
              padding: "0.75rem",
              gap: "1rem",
              width: "3rem",
              height: "3rem",
              border: "8px solid #F0F6FD",
              borderRadius: "1.75rem",
            }}
          >
            <CheckCircleOutlineIcon
              style={{
                width: "1.5rem",
                height: "1.5rem",
                flexShrink: "0",
                color: "#096A56",
              }}
            />
          </div>
          <h3
            style={{
              color: "#096A56",
              fontFamily: "Clash Display",
              fontSize: "1.5rem",
              fontWeight: "600",
              lineHeight: "1.75rem",
              letterSpacing: "0.03rem",
            }}
          >
            Contact Form
          </h3>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          width: "57.25rem",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "4.75rem",
            alignSelf: "stretch",
          }}
        >
          <div style={div_style}>
            <input type="hidden" name="contact_number" value={makeid(number)} />
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
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.375rem",
            width: "57.25rem",
            flexDirection: "column",
          }}
        >
          <label style={label_style}>Email</label>
          <input
            style={input_style}
            required
            type="email"
            name="user_email"
            placeholder="Loremipsum@email.com"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.375rem",
            width: "57.25rem",
            flexDirection: "column",
            height: "16.5rem",
          }}
        >
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
          paddingTop: "1.5rem",
          alignItems: "center",
          flexDirection: "column",
          alignSelf: "stretch",
        }}
      >
        <input
          style={{
            display: "flex",
            width: "58.0625rem",
            height: "4.3125rem",
            padding: "0.625rem 1.3125rem",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            borderRadius: "0.25rem",
            border: "1px solid #096A56",
            background: "#096A56",
            boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
            color: "#FFF",
            fontSize: "1.5rem",
            fontWeight: "500",
            lineHeight: "2.4rem",
          }}
          required
          type="submit"
          value={"Send Message"}
        />
      </div>
    </form>
  );
}
