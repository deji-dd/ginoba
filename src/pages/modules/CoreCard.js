export default function CoreCard(props) {
  return (
    <div
      className="container-fluid px-0"
      style={{
        display: "flex",
        width: "34.3125rem",
        height: "27.3125rem",
        padding: "1.25rem 3rem",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "0.5rem",
        background: "#EAF0E8",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "24.8125rem",
          alignItems: "center",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        <div
          style={{
            height: "11.25rem",
            width: "16.29806rem",
            flexShrink: 0,
            background: `url(${props.img}), 100% 144.872% no-repeat`,
          }}
        ></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <h1
            style={{
              color: "#22495F",
              textAlign: "center",
              fontFamily: "Clash Display",
              fontSize: "1.875rem",
              fontWeight: "600",
              lineHeight: "2.4375rem",
            }}
          >
            {props.title}
          </h1>
          <p
            style={{
              color: "#6F6C90",
              textAlign: "center",
              fontSize: "1.25rem",
              fontWeight: "400",
              lineHeight: "1.875rem",
              width: "32rem",
              fontFeatureSettings: "'clig' off, 'liga' off",
              letterSpacing: "-0.0125rem",
            }}
          >
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
