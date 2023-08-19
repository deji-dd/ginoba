export default function What2Card(props) {
  return (
    <div
      style={{
        width: "25.6rem",
        height: "8.16rem",
        display: "inline-flex",
        alignItems: "flex-start",
        gap: "1.6rem",
      }}
    >
      <img
        alt={props.alt}
        src={props.icon}
        style={{ width: "1.86664rem", height: "1.86664rem", flexShrink: 0 }}
      />
      <div
        style={{
          width: "22.13336rem",
          height: "8.16rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "0.8rem",
        }}
      >
        <h1
          style={{
            color: "var(--22495-f, #22495F)",
            fontFamily: "Clash Display",
            fontSize: "1.28rem",
            fontWeight: "600",
            textAlign: "left",
          }}
        >
          {props.title}
        </h1>
        <p
          style={{
            color: "var(--secondary-text, #525560)",
            fontSize: "1.2rem",
            fontWeight: "400",
            lineHeight: "1.92rem",
            width: "22.13336rem",
          }}
        >
          {props.desc}
        </p>
      </div>
    </div>
  );
}
