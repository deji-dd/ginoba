import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Social() {
  const icon_style = {
    width: "0.75625rem",
    height: "0.75625rem",
    color: "#126360",
    display: "inline-flex",
    marginRight: "0.375rem",
    marginTop: "0.435rem",
  };
  const text_style = {
    color: "#126360",
    fontSize: "1rem",
    fontWeight: "400",
    display: "inline-flex",
    margin: 0,
  };
  const col_style = { display: "inline-flex", margin: "0.75rem 0" };
  const social_icon = {
    width: "1.48113rem",
    height: "1.48113rem",
    color: "#126360",
    marginBottom: "0.1875rem",
  };

  return (
    <div
      style={{
        height: "3.12rem",
        background: "#EAF0E8",
        width: "90rem",
        flexShrink: 0,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "81.3125rem",
          height: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "flex-start", gap: "2.125rem" }}
        >
          <div style={{ ...col_style }}>
            <PhoneIcon style={icon_style} />
            <p style={text_style}>+01 123 456</p>
          </div>
          <div style={{ ...col_style }}>
            <MailIcon style={icon_style} />
            <p style={text_style}>president@ginobafoundation.com</p>
          </div>
          <div style={{ ...col_style }}>
            <MailIcon style={icon_style} />
            <p style={text_style}>coordinator@ginobafoundation.com</p>
          </div>
        </div>
        <div
          style={{
            height: "100%",
            backgroundColor: "#BAD0B3",
            display: "flex",
            padding: "1.26563rem 1.78125rem",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: "0.46875rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "2.99106rem",
              flexShrink: "0",
              height: "1.50463rem",
            }}
          >
            <InstagramIcon style={social_icon} />
            <FacebookOutlinedIcon style={social_icon} />
            <TwitterIcon style={social_icon} />
          </div>
        </div>
      </div>
    </div>
  );
}
