export default function MobileEventsCard(props) {
  return (
    <div
      style={{
        display: "flex",
        width: "24rem",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0.85712rem",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: "24rem",
          height: "15rem",
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
              fontSize: "1.92rem",
              fontWeight: "600",
            }}
          >
            {props.day}
            <br />
            <span style={{ fontSize: "0.96rem", display: "block" }}>
              {" "}
              {props.month}
            </span>
          </h1>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "24rem",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "0.68568rem",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "23.91432rem",
            alignItems: "flex-start",
          }}
        >
          <p
            style={{
              color: "#727272",
              fontSize: "0.88rem",
              fontWeight: "400",
              lineHeight: "1.144rem",
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
            width: "24rem",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.51432rem",
          }}
        >
          <h1
            style={{
              color: "#096A56",
              fontSize: "1.28rem",
              fontWeight: "600",
              lineHeight: "1.536rem",
              fontFamily: "Clash Display",
            }}
          >
            {props.heading}
          </h1>
          <p
            style={{
              color: "#727272",
              fontSize: "0.96rem",
              fontWeight: "400",
              lineHeight: "1.248rem",
            }}
          >
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
