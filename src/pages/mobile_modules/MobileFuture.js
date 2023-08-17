import BrighterBG from "../../assets/brighter-future-bg.svg";

export default function MobileFuture() {
  return (
    <div
      style={{
        width: "27.2rem",
        height: "12.72rem",
        flexShrink: 0,
        borderRadius: "0.42536rem",
        background: `url(${BrighterBG}), lightgray 0px -224.96px / 100% 222.049% no-repeat`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundPosition: "center",
        alignSelf: "center",
        marginLeft: "1.4rem",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.31rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.64rem",
          }}
        >
          <h1
            style={{
              color: "var(--bg-color, #E8EBF0)",
              textAlign: "center",
              fontFamily: "Clash Display",
              fontSize: "1.44rem",
              fontWeight: "600",
              lineHeight: "1.728rem",
              letterSpacing: "0.02216rem",
            }}
          >
            A brighter future starts with you.
          </h1>
          <p
            style={{
              width: "21.95336rem",
              color: "var(--bg-color, #E8EBF0)",
              textAlign: "center",
              fontSize: "0.88rem",
              fontWeight: "500",
              lineHeight: "1.056rem",
            }}
          >
            Partner with us to make a lasting impact on African lives, ensuring
            access to education, essential skills, and better health.
          </p>
        </div>
        <div
          style={{
            width: "22.53456rem",
            height: "2.72rem",
            display: "flex",
            justifyContent: "center",
            gap: "1.62rem",
          }}
        >
          <button
            type="button"
            disabled={true}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.46656rem",
              borderRadius: "0.18664rem",
              background: "var(--primary-color, #096A56)",
              border: "none",
              backdropFilter: "blur(23.329105377197266px)",
              color: "#E8EBF0",
              fontSize: "1.06928rem",
              fontWeight: "500",
              letterSpacing: "-0.02136rem",
              height: "2.56624rem",
            }}
          >
            Join as a volunteer
          </button>
          <button
            type="button"
            disabled={true}
            style={{
              display: "inline-flex",
              padding: "0.7776rem 1.94408rem",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.46656rem",
              borderRadius: "0.18664rem",
              background: "var(--bg-color, #E8EBF0)",
              border: "none",
              backdropFilter: "blur(23.329105377197266px)",
              color: "#var(--primary-color, #096A56)",
              fontSize: "1.06928rem",
              fontWeight: "500",
              letterSpacing: "-0.02136rem",
              width: "8.72rem",
              height: "2.72rem",
            }}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}
