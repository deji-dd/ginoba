import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function MeetCard(props) {
  const icon_styles = { width: "1.2rem", height: "1.2rem", flexShrink: 0 };
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.9375rem",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "17.76rem",
          height: "19.2rem",
          borderRadius: "0.625rem",
          background: `url(${props.img}), lightgray 50% / cover no-repeat`,
        }}
      ></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              color: "var(--primary-text, #1D2130)",
              textAlign: "center",
              fontSize: "1.2rem",
              fontWeight: "500",
              lineHeight: "1.92rem",
            }}
          >
            {props.name}
          </h1>
          <p
            style={{
              color: "var(--primary-text, #1D2130)",
              textAlign: "center",
              fontSize: "0.875rem",
              fontWeight: "500",
              lineHeight: "1.4rem",
              opacity: "0.6000000238418579",
            }}
          >
            {props.title}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.2rem",
          }}
        >
          <FacebookOutlinedIcon style={icon_styles} />
          <TwitterIcon style={icon_styles} />
          <LinkedInIcon style={icon_styles} />
        </div>
      </div>
    </div>
  );
}
