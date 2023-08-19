export default function CoreCard(props) {
  return (
    <div
      style={{
        display: "flex",
        width: "27.2rem",
        height: "23.65104rem",
        padding: "0.99088rem 2.37816rem",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "0.39632rem",
        background: "#EAF0E8",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "19.6692rem",
          alignItems: "center",
          flexDirection: "column",
          gap: "0.99088rem",
        }}
      >
        <div
          style={{
            height: "11rem",
            width: "15.91968rem",
            flexShrink: 0,
            background: `url(${props.img}), 100% 144.872% no-repeat`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "0.39632rem",
          }}
        >
          <h1
            style={{
              color: "#22495F",
              textAlign: "center",
              fontFamily: "Clash Display",
              fontSize: "1.48632rem",
              fontWeight: "600",
              lineHeight: "1.93224rem",
            }}
          >
            {props.title}
          </h1>
          <p
            style={{
              color: "#6F6C90",
              textAlign: "center",
              fontSize: "0.99088rem",
              fontWeight: "400",
              lineHeight: "1.48632rem",
              width: "25.36688rem",
              fontFeatureSettings: "'clig' off, 'liga' off",
              letterSpacing: "-0.00992rem",
            }}
          >
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
