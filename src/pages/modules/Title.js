export default function Title(props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1.14rem",
        alignItems: "center",
      }}
    >
      <hr
        style={{
          width: "4.32rem",
          flexShrink: 0,
          strokeWidth: "2px",
          stroke: "var(--22495-f, #22495F)",
          borderColor: "#22495F",
        }}
      />
      <p
        style={{
          color: "var(--22495-f, #22495F)",
          fontFamily: "Clash Display",
          fontSize: "1rem",
          fontWeight: "600",
          letterSpacing: "0.125rem",
          textTransform: "uppercase",
        }}
      >
        {props.title}
      </p>
    </div>
  );
}
