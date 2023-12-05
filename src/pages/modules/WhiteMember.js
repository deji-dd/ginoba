export default function WhiteMember(props) {
  return (
    <div
      style={{
        display: "flex",
        width: "90rem",
        height: "40",
        justifyContent: "center",
        alignItems: "center",
        gap: "7.5rem",
        background: "#FFF",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          flexDirection: "column",
          width: "40rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              color: "#096A56",
              fontSize: "2.5rem",
              fontWeight: "900",
              lineHeight: "120%",
              fontFamily: "Clash Display",
            }}
          >
            {props.name}
          </h1>
          <p
            style={{
              color: "var(--Primary-text, #1D2130)",
              fontSize: "1.5rem",
              fontWeight: "500",
              lineHeight: "160%",
              opacity: "0.6",
            }}
          >
            {props.role}
          </p>
          <p
            style={{
              color: "#4D4D4D",
              fontSize: "1.25rem",
              fontWeight: "500",
              lineHeight: "2.3125rem",
            }}
          >
            {props.desc}
          </p>
        </div>
      </div>
      <img
        src={props.img}
        style={{
          width: "34.375rem",
          height: "30rem",
          borderRadius: "0.625rem",
        }}
        alt={props.name}
      />
    </div>
  );
}
