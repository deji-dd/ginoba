export default function WhyCard(props) {
  return (
    <div
      style={{
        width: "27.76rem",
        height: "8.4rem",
        flexShrink: 0,
        borderRadius: "0.27825rem",
        background: "var(--whit, #FFF)",
        boxShadow:
          "0px 0.44519317150115967px 1.7807726860046387px 0px rgba(0, 0, 0, 0.10)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.77906rem",
          alignItems: "center",
        }}
      >
        <img
          alt="why icon"
          src="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/8c1498a31e5a8ec9eb8666174820f751cd98ca2f/why-icon.svg?min=1"
          style={{ width: "1.13968rem", height: "0.89038rem" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.27825rem",
          }}
        >
          <h1
            style={{
              color: "color: var(--neutral-900, #111827)",
              fontFeatureSettings: "'liga' off",
              fontFamily: "Clash Display",
              fontSize: "1.06848rem",
              fontWeight: "500",
              lineHeight: "1.42464rem",
              letterSpacing: "0.04272rem",
            }}
          >
            {props.stat}
          </h1>
          <p
            style={{
              width: "23.2rem",
              color: "var(--neutral-700, #374151)",
              textAlign: "center",
              fontFeatureSettings: "'liga' off",
              fontSize: "0.96rem",
              fontWeight: "400",
              lineHeight: "1.0548rem",
              letterSpacing: "-0.0192rem",
            }}
          >
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
