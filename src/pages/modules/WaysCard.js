export default function WaysCard(props) {
  return (
    <div
      className="container-fluid px-0"
      style={{
        display: "flex",
        width: "23rem",
        flexShrink: 0,
        alignItems: "center",
        gap: "1rem",
        flexDirection: "column",
      }}
    >
      <div
        className="container-fluid px-0"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "0.9375rem",
          flexDirection: "column",
        }}
      >
        <img
          alt={props.alt}
          src={props.icon}
          style={{ width: "3rem", height: "3rem" }}
        />
        <h1
          className="my-0"
          style={{
            color: "#2E4049",
            fontFamily: "Clash Display",
            fontSize: "1.5625rem",
            fontWeight: "500",
            lineHeight: "1.875rem",
          }}
        >
          {props.way}
        </h1>
      </div>
      <p
        className="my-0"
        style={{
          width: "100%",
          color: "#727272",
          textAlign: "center",
          fontSize: "1.25rem",
          fontWeight: "400",
          lineHeight: "1.625rem",
        }}
      >
        {props.desc}
      </p>
    </div>
  );
}
