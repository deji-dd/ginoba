import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Title from "./Title";

export default function ContactUs() {
  const contact_heading = {
    color: "var(--22495-f, #22495F)",
    fontSize: "1.5rem",
    fontWeight: "600",
    lineHeight: "2.4rem",
    fontFamily: "Clash Display",
    letterSpacing: "0.0625rem",
  };
  const contact_text = {
    color: "var(--22495-f, #22495F)",
    fontSize: "1.25rem",
    fontWeight: "400",
    lineHeight: "1.75rem",
  };
  const icon_styles = {
    width: "1.25rem",
    height: "1.25rem",
    flexShrink: 0,
    color: "22495F",
  };
  const contact_div = {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "1rem",
  };

  return (
    <div
      style={{
        width: "90rem",
        height: "40.75rem",
        flexShrink: "0",
        background: "#EAF0E8",
        display: "inline-flex",
        gap: "6.96rem",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "6rem",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          gap: "1.9375rem",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Title title={"Contact us"} />
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              color: "#22495F",
              fontFamily: "Clash Display",
              fontSize: "3.5rem",
              fontWeight: "600",
              letterSpacing: "0.035rem",
              width: "38.4375rem",
              lineHeight: "4.2rem",
            }}
          >
            We'd love to hear from you
          </h1>
          <p
            style={{
              color: "#22495F",
              fontSize: "1.25rem",
              fontWeight: "500",
              width: "37.8125rem",
              lineHeight: "2rem",
              opacity: "0.699999988079071",
            }}
          >
            Have any question in mind or want to enquire? Please feel free to
            contact us through the form or the following details.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "3.125rem",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <div style={contact_div}>
          <h1 style={contact_heading}>Let's talk!</h1>
          <p style={contact_text}>+1-(612)-450-4186</p>
          <p style={contact_text}>president@ginobafoundation.com</p>
          <p style={contact_text}>coordinator@ginobafoundation.com</p>
        </div>
        <div style={contact_div}>
          <h1 style={contact_heading}>Address</h1>
          <p style={{ ...contact_text, width: "26.75rem" }}>
            220 Robert Street South, Suite 107, St Paul, MN 55107.
          </p>
        </div>
        <div style={contact_div}>
          <h1 style={contact_heading}>Social media</h1>
          <div
            style={{
              display: "flex",
              gap: "1.25rem",
            }}
          >
            <FacebookOutlinedIcon style={icon_styles} />
            <TwitterIcon style={icon_styles} />
            <InstagramIcon style={icon_styles} />
          </div>
        </div>
      </div>
    </div>
  );
}
