import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Title from "./MobileTitle";

export default function MobileContactUs() {
  const contact_heading = {
    color: "var(--22495-f, #22495F)",
    fontSize: "1.6rem",
    fontWeight: "600",
    lineHeight: "2.56rem",
    fontFamily: "Clash Display",
    letterSpacing: "0.08rem",
  };
  const contact_text = {
    color: "var(--22495-f, #22495F)",
    fontSize: "1.44rem",
    fontWeight: "400",
    lineHeight: "2.24rem",
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
    gap: "1rem",
  };

  return (
    <div
      style={{
        width: "30rem",
        background: "#EAF0E8",
        display: "inline-flex",
        alignItems: "flex-start",
        padding: "1.92rem 1.2rem 3.2rem",
        marginTop: "5rem",
        flexDirection: "column",
        gap: "4rem",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          gap: "0.64rem",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Title title={"Contact us"} />
        <h1
          style={{
            color: "#22495F",
            fontFamily: "Clash Display",
            fontSize: "1.76rem",
            fontWeight: "600",
            letterSpacing: "0.0704rem",
            width: "27.84rem",
            lineHeight: "2.81232rem",
          }}
        >
          We'd love to hear from you
        </h1>
        <p
          style={{
            color: "#22495F",
            fontSize: "1.04rem",
            fontWeight: "500",
            width: "27.92rem",
            lineHeight: "1.664rem",
            opacity: "0.7",
          }}
        >
          Have any question in mind or want to enquire? Please feel free to
          contact us through the form or the following details.
        </p>
      </div>
      <div style={contact_div}>
        <h1 style={contact_heading}>Let's talk!</h1>
        <p style={contact_text}>+123 456 789000</p>
        <p style={contact_text}>president@ginobafoundation.com</p>
        <p style={contact_text}>coordinator@ginobafoundation.com</p>
      </div>
      <div style={contact_div}>
        <h1 style={contact_heading}>Address</h1>
        <p style={{ ...contact_text, width: "26.75rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
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
  );
}
