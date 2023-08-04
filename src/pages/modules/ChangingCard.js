export default function ChangingCard(props) {
  return (
    <div
      style={{
        display: "flex",
        width: "36.5rem",
        flexDirection: "column",
        alignItems: "center",
        height: "40.375rem",
        flexShrink: 0,
      }}
    >
      <img alt={props.title} src={props.img} width={"100%"} />
      <div
        style={{
          display: "flex",
          width: "100%",
          padding: "1.875rem 2.375rem",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.625rem",
          background: "#FFF",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1.25rem",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <h1
              style={{
                color: "22495F",
                fontSize: "1.68rem",
                fontWeight: "600",
                lineHeight: "2.52rem",
                fontFamily: "Clash Display",
              }}
            >
              {props.title}
            </h1>
            <p
              style={{
                color: "22495F",
                fontSize: "1.25rem",
                fontWeight: "400",
                lineHeight: "2rem",
              }}
            >
              {props.desc}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <button
              disabled="true"
              style={{
                display: "flex",
                padding: "1rem 4.375rem",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.625rem",
                borderRadius: "0.125rem",
                background: "#096A56",
                color: "#FFF",
                fontFamily: "Manrope",
                fontSize: "1.25rem",
                fontWeight: "600",
                border: "none",
              }}
            >
              Learn more
            </button>
            <button
              disabled="true"
              style={{
                display: "flex",
                padding: "1rem 4.375rem",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.625rem",
                borderRadius: "0.125rem",
                color: "#2E4049",
                fontFamily: "Manrope",
                fontSize: "1.25rem",
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
