export default function Member(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "23.9375rem",
        gap: "0.9375rem",
        flexDirection: "column",
      }}
    >
      <img
        src={props.img}
        alt={props.name}
        style={{
          width: "20rem",
          height: "19rem",
          borderRadius: "0.625rem",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "23.9375rem",
          gap: "0.25rem",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            color: "var(--Primary-text, #1D2130)",
            textAlign: "center",
            fontSize: "1.2rem",
            fontWeight: "500",
            lineHeight: "160%",
          }}
        >
          {props.name}
        </h1>
        <p
          style={{
            color: "var(--text-color, #374151)",
            fontSize: "0.875rem",
            fontWeight: "500",
            lineHeight: "160%",
            opacity: "0.6",
            textAlign: "center",
          }}
        >
          {props.desc}
        </p>
      </div>
    </div>
  );
}
