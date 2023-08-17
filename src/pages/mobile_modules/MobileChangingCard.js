export default function ChangingCard(props) {
  return (
    <div
      style={{
        display: "flex",
        width: "24rem",
        flexDirection: "column",
        alignItems: "center",
        height: "24.64rem",
        flexShrink: 0,
      }}
    >
      <img alt={props.title} src={props.img} width={"100%"} />
      <div
        style={{
          display: "flex",
          width: "24rem",
          padding: "1.23288rem 1.56168rem",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.41096rem",
          background: "#FFF",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.82rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.16rem",
            }}
          >
            <h1
              style={{
                color: "22495F",
                fontSize: "1.2rem",
                fontWeight: "600",
                lineHeight: "1.8rem",
                fontFamily: "Clash Display",
                width: "16.5rem",
              }}
            >
              {props.title}
            </h1>
            <p
              style={{
                color: "22495F",
                fontSize: "0.88rem",
                fontWeight: "400",
                lineHeight: "1.408rem",
                width: "21.84rem",
              }}
            >
              {props.desc}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1.23rem",
            }}
          >
            <button
              disabled={true}
              style={{
                display: "flex",
                padding: "0.65752rem 2.87672rem",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.41096rem",
                borderRadius: "0.08216rem",
                background: "#096A56",
                color: "#FFF",
                fontFamily: "Manrope",
                fontSize: "0.96rem",
                fontWeight: "600",
                border: "none",
              }}
            >
              Learn more
            </button>
            <button
              disabled={true}
              style={{
                display: "flex",
                padding: "0.65752rem 2.87672rem",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.41096rem",
                borderRadius: "0.08216rem",
                color: "#2E4049",
                fontFamily: "Manrope",
                fontSize: "0.96rem",
                fontWeight: "600",
                border: "2px solid #096A56",
                background: "#FFF",
              }}
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
