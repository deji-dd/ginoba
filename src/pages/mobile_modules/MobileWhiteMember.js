export default function MobileWhiteMember(props) {
  return (
    <div
      style={{
        display: "flex",
        width: "30rem",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.75rem",
        background: "#FFF",
        padding: "1rem 1.7rem",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0.25rem",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            color: "#096A56",
            fontSize: "1.75rem",
            fontWeight: "900",
            lineHeight: "120%",
            fontFamily: "Clash Display",
            textAlign: "center",
          }}
        >
          {props.name}
        </h1>
        <p
          style={{
            color: "var(--Primary-text, #1D2130)",
            fontSize: "0.9375rem",
            fontWeight: "500",
            lineHeight: "160%",
            opacity: "0.6",
            textAlign: "center",
          }}
        >
          {props.role}
        </p>
      </div>
      <p
        style={{
          color: "#4D4D4D",
          fontSize: "0.875rem",
          fontWeight: "500",
          lineHeight: "167.5%",
          width: "20rem",
          textAlign: "center",
        }}
      >
        {props.desc}
      </p>
      <img
        src={props.img}
        style={{
          width: "19.47919rem",
          height: "17rem",
          borderRadius: "0.35419rem",
        }}
        alt={props.name}
      />
    </div>
  );
}
