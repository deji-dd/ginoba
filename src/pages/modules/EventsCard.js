export default function EventsCard(props) {
  return (
    <div
      style={{
        display: "flex",
        width: "35rem",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1.25rem",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: "34.9rem",
          height: "21.5rem",
          flexShrink: "0",
          background: `url(${props.img}), lightgray 0px -133.308px / 100% 213.187% no-repeat`,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "7.25rem",
            padding: "1.3125rem 1.1875rem",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.625rem",
            background: "#096A56",
          }}
        >
          <h1
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Clash Display",
              fontSize: "3.75rem",
              fontWeight: "600",

              lineHeight: "1rem",
              paddingTop: "1.57rem",
            }}
          >
            {props.day}
            <span style={{ fontSize: "1.5625rem" }}> {props.month}</span>
          </h1>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "35rem",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "35rem",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1.75rem",
          }}
        >
          <p
            style={{
              color: "#727272",
              fontSize: "1.25rem",
              fontWeight: "400",
              lineHeight: "1.625rem",
            }}
          >
            Organized By :{" "}
            <span style={{ color: "#096A56", fontWeight: "400" }}>
              {props.organizer}
            </span>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            width: "35rem",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.75rem",
          }}
        >
          <h1
            style={{
              color: "#096A56",
              fontSize: "1.5625rem",
              fontWeight: "600",
              lineHeight: "1.875rem",
              fontFamily: "Clash Display",
            }}
          >
            {props.heading}
          </h1>
          <p
            style={{
              color: "#727272",
              fontSize: "1.25rem",
              fontWeight: "400",
              lineHeight: "1.625rem",
            }}
          >
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
