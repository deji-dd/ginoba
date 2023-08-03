export default function FeaturesCard(props) {
  return (
    <div
      style={{
        display: "flex",
        flexShrink: 0,
        alignItems: "flex-start",
        gap: "0.44rem",
      }}
    >
      <img alt={props.title} src={props.icon} style={{ marginTop: "0.2rem" }} />
      <div
        style={{
          display: "flex",
          flexShrink: 0,
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <h3
          style={{
            color: "var(--primary-text, #1D2130)",
            fontFamily: "Clash Display",
            fontSize: "1.5rem",
            fontWeight: "600",
            lineHeight: "2.4rem",
          }}
        >
          {props.title}
        </h3>
        <p
          style={{
            color: "var(--secondary-text, #525560)",
            fontFamily: "Roboto",
            fontSize: "1.25rem",
            fontWeight: "400",
            lineHeight: "2rem",
            width: "27.25rem",
          }}
        >
          {props.desc}
        </p>
      </div>
    </div>
  );
}
