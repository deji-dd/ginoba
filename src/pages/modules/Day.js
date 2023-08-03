import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";

export default function Day() {
  return (
    <div
      style={{
        width: "90rem",
        height: "25rem",
        flexShrink: 0,
        background: "#EAF0E8",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          flexShrink: 0,
          display: "inline-flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <h1
          style={{
            width: "48rem",
            color: "var(--primary-text, #1D2130)",
            fontFamily: "Clash Display",
            fontSize: "3.5rem",
            fontWeight: "600",
            lineHeight: "4.2rem",
          }}
        >
          A day with our wonderful children
        </h1>
        <div
          style={{
            display: "inline-flex",
            gap: "5rem",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              gap: "0.5rem",
            }}
          >
            <LocationOnIcon />
            <p
              style={{
                color: "#22495F",
                fontSize: "1rem",
                fontWeight: "500",
                lineHeight: "1.6rem",
              }}
            >
              Opp Opolo round about, Yenagoa, Bayelsa, Africa
            </p>
          </div>
          <div
            style={{
              display: "inline-flex",
              gap: "0.5rem",
            }}
          >
            <DateRangeIcon />
            <p
              style={{
                color: "#22495F",
                fontSize: "1rem",
                fontWeight: "500",
                lineHeight: "1.6rem",
              }}
            >
              April 13, 2022 8:30 AM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
