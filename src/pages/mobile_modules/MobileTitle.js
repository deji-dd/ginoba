export default function MobileTitle(props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.48rem",
        alignItems: "center",
      }}
    >
      <hr
        style={{
          width: "1.92rem",
          height: "0.048rem",
          color: "#096A56",
        }}
      />
      <p
        style={{
          color: "var(--22495-f, #22495F)",
          fontFamily: "Clash Display",
          fontSize: "0.96rem",
          fontWeight: "600",
          letterSpacing: "0.1536rem",
          textTransform: "uppercase",
        }}
      >
        {props.title}
      </p>
      <hr
        style={{
          width: "1.92rem",
          height: "0.048rem",
          color: "#096A56",
        }}
      />
    </div>
  );
}
