export default function MobileMember(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "10.4945rem",
        gap: "0.411rem",
        flexDirection: "column",
        height: "11.0625rem",
      }}
    >
      <img
        src={props.img}
        alt={props.name}
        style={{
          width: "10.41231rem",
          height: "8.41206rem",
          borderRadius: "0.274rem",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.10963rem",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            color: "var(--Primary-text, #1D2130)",
            textAlign: "center",
            fontSize: "0.75rem",
            fontWeight: "500",
            lineHeight: "160%",
          }}
        >
          {props.name}
        </h1>
        <p
          style={{
            color: "var(--text-color, #374151)",
            fontSize: "0.625rem",
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
