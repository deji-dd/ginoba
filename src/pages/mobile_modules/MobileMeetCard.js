import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function MobileMeetCard(props) {
  const icon_styles = {
    width: "1.08112rem",
    height: "1.08112rem",
    flexShrink: 0,
  };
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.84456rem",
        flexDirection: "column",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: "16rem",
          height: "17.29728rem",
          borderRadius: "0.56304rem",
          background: `url(${props.img}), lightgray 50% / cover no-repeat`,
        }}
      ></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.9rem",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.2252rem",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              color: "var(--primary-text, #1D2130)",
              textAlign: "center",
              fontSize: "1.12rem",
              fontWeight: "500",
              lineHeight: "1.792rem",
            }}
          >
            {props.name}
          </h1>
          <p
            style={{
              color: "var(--primary-text, #1D2130)",
              textAlign: "center",
              fontSize: "0.96rem",
              fontWeight: "500",
              lineHeight: "1.536rem",
              opacity: "0.6",
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
