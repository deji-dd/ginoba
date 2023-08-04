import { ReactComponent as WhyIcon } from "../../assets/why_icon.svg";

export default function WhyCard(props) {
  return (
    <div
      style={{
        width: "23.125rem",
        height: "14.0625rem",
        flexShrink: 0,
        borderRadius: "0.625rem",
        background: "var(--whit, #FFF)",
        boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.10)",
        padding: "2.12rem 3.75rem 2.06rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.75rem",
          alignItems: "center",
        }}
      >
        <WhyIcon style={{ width: "2rem", height: "2rem" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.625rem",
          }}
        >
          <h1
            style={{
              color: "color: var(--neutral-900, #111827)",
              fontFeatureSettings: "'liga' off",
              fontFamily: "Clash Display",
              fontSize: "1.875rem",
              fontWeight: "500",
              lineHeight: "2.5rem",
              letterSpacing: "0.075rem",
            }}
          >
            {props.stat}
          </h1>
          <p
            style={{
              width: "20.9375rem",
              color: "var(--neutral-700, #374151)",
              textAlign: "center",
              fontFeatureSettings: "'liga' off",
              fontSize: "1.25rem",
              fontWeight: "400",
              lineHeight: "1.5rem",
            }}
          >
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
