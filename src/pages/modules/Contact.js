import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Contact() {
  let [icon_style] = useState({
    width: "0.75625rem",
    height: "0.75625rem",
    color: "#126360",
    display: "inline-flex",
    marginRight: "0.375rem",
    marginTop: "0.435rem",
  });
  let [text_style] = useState({
    color: "#126360",
    fontSize: "1rem",
    fontWeight: "400",
    display: "inline-flex",
    margin: 0,
  });
  let [col_style] = useState({ display: "inline-flex", margin: "0.75rem 0" });
  let [social_icon] = useState({
    width: "1.48113rem",
    height: "1.48113rem",
    color: "#126360",
    marginBottom: "0.1875rem",
  });

  return (
    <div className="container-fluid" style={{ height: "3.12rem" }}>
      <div
        className="row justify-content-between"
        style={{ width: "81.125rem", margin: "0 auto", height: "100%" }}
      >
        <div className="col col-6">
          <div
            className="col col-1"
            style={{ ...col_style, width: "7rem", marginRight: "2.11rem" }}
          >
            <PhoneIcon style={icon_style} />
            <p style={text_style}>+01 123 456</p>
          </div>
          <div className="col col-1" style={{ ...col_style, width: "15rem" }}>
            <MailIcon style={icon_style} />
            <p style={text_style}>info@ginobafoundation.com</p>
          </div>
        </div>
        <div
          className="col col-3"
          style={{
            width: "14.1rem",
            height: "100%",
            backgroundColor: "#BAD0B3",
            padding: "0.9rem 1.78rem",
          }}
        >
          <InstagramIcon style={social_icon} />
          <FacebookOutlinedIcon
            style={{
              ...social_icon,
              marginLeft: "2.99rem",
              marginRight: "2.99rem",
            }}
          />
          <TwitterIcon style={social_icon} />
        </div>
      </div>
    </div>
  );
}
