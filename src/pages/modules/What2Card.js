export default function What2Card(props) {
  return (
    <div
      style={{
        width: "23.04rem",
        height: "7.5975rem",
        display: "inline-flex",
        alignItems: "flex-start",
        gap: "1.44rem",
      }}
    >
      <img
        alt={props.alt}
        src={props.icon}
        style={{ width: "1.68rem", height: "1.68rem", flexShrink: 0 }}
      />
      <div
        style={{
          width: "19.92rem",
          height: "7.5975rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "0.41rem",
        }}
      >
        <h1
          style={{
            color: "var(--22495-f, #22495F)",
            fontFamily: "Clash Display",
            fontSize: "1.44rem",
            fontWeight: "600",
            textAlign: "left",
          }}
        >
          {props.title}
        </h1>
        <p
          style={{
            color: "var(--secondary-text, #525560)",
            fontSize: "1.125rem",
            fontWeight: "400",
            lineHeight: "1.8rem",
          }}
        >
          {props.desc}
        </p>
      </div>
    </div>
  );
}
