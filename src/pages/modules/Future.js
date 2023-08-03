import BrighterBG from "../../assets/brighter-future-bg.svg";

export default function Future() {
  return (
    <div
      style={{
        width: "76.74rem",
        height: "23.04rem",
        flexShrink: 0,
        borderRadius: "1.2rem",
        marginTop: "5.76rem",
        marginBottom: "6.78rem",
        background: `url(${BrighterBG}), lightgray 0px -224.96px / 100% 222.049% no-repeat`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2.8125rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <h1
            style={{
              color: "var(--bg-color, #E8EBF0)",
              textAlign: "center",
              fontFamily: "Clash Display",
              fontSize: "2.88rem",
              fontWeight: "600",
              lineHeight: "3.456rem",
              letterSpacing: "0.0625rem",
            }}
          >
            A brighter future starts with you.
          </h1>
          <p
            style={{
              width: "61.9375rem",
              color: "var(--bg-color, #E8EBF0)",
              textAlign: "center",
              fontSize: "1.75rem",
              fontWeight: "500",
              lineHeight: "2.1rem",
            }}
          >
            Partner with us to make a lasting impact on African lives, ensuring
            access to education, essential skills, and better health.
          </p>
        </div>
        <div
          style={{
            width: "27.0275rem",
            height: "3.625rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            type="button"
            class="btn"
            disabled="true"
            style={{
              display: "inline-flex",
              padding: "1rem 1.75rem",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.6rem",
              borderRadius: "0.24rem",
              background: "var(--primary-color, #096A56)",
              backdropFilter: "blur(38.39999771118164px)",
              color: "#E8EBF0",
              fontSize: "1.375rem",
              fontWeight: "500",
              letterSpacing: "-0.0275rem",
            }}
          >
            Join as a volunteer
          </button>
          <button
            type="button"
            class="btn"
            disabled="true"
            style={{
              display: "inline-flex",
              padding: "1rem 2.5rem",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.6rem",
              borderRadius: "0.24rem",
              background: "var(--bg-color, #E8EBF0)",
              backdropFilter: "blur(38.39999771118164px)",
              color: "#var(--primary-color, #096A56)",
              fontSize: "1.375rem",
              fontWeight: "500",
              letterSpacing: "-0.0275rem",
            }}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}
