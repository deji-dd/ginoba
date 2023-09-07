export default function Spend() {
  const icon_style = {
    width: "0.96rem",
    height: "0.96rem",
    flexShrink: 0,
    borderRadius: "0.24rem",
    marginTop: "0.25rem",
  };
  const label_style = {
    color: "#FFF",
    fontSize: "0.96rem",
    fontWeight: "500",
    lineHeight: "1.536rem",
  };

  return (
    <div
      style={{
        width: "90rem",
        height: "34.02rem",
        background: "#096A56",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "76.75rem",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.75rem",
            }}
          >
            <h1
              style={{
                width: "43.625rem",
                color: "var(--bg-color, #E8EBF0)",
                fontFamily: "Clash Display",
                fontSize: "2.88rem",
                fontWeight: "600",
                letterSpacing: "0.125rem",
                lineHeight: "3.456rem",
              }}
            >
              How we spend your donations and where it goes
            </h1>
            <p
              style={{
                width: "37.25263rem",
                color: "#FFF",
                fontSize: "1.25rem",
                fontWeight: "400",
                lineHeight: "2rem",
                opacity: "0.800000011920929",
              }}
            >
              We understand that when you make a donation, you want to know
              exactly where your money is going and we pledge to be transparent.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.625rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "2.5rem",
              }}
            >
              <div style={{ display: "flex", gap: "0.48rem" }}>
                <div
                  style={{
                    ...icon_style,
                    background: "var(--green-secondary, #BEF3C0)",
                  }}
                ></div>
                <p style={label_style}>40% quality education</p>
              </div>

              <div style={{ display: "flex", gap: "0.48rem" }}>
                <div
                  style={{
                    ...icon_style,
                    background: "#AC94F1",
                  }}
                ></div>
                <p style={label_style}>35% healthcare accessibility</p>
              </div>
              <div style={{ display: "flex", gap: "0.48rem" }}>
                <div style={{ ...icon_style, background: "#FFF0CA" }}></div>
                <p
                  style={{
                    ...label_style,
                    width: "12.0625rem",
                  }}
                >
                  10% Widows and Families of Service Men
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "2.5rem",
              }}
            >
              <div style={{ display: "flex", gap: "0.48rem" }}>
                <div
                  style={{
                    ...icon_style,
                    background: "#F9CF64",
                  }}
                ></div>
                <p style={{ ...label_style, width: "10.5rem" }}>
                  10% National Security and Capacity Building
                </p>
              </div>

              <div style={{ display: "flex", gap: "0.48rem" }}>
                <div
                  style={{
                    ...icon_style,
                    background: "#F38FBF",
                  }}
                ></div>
                <p style={label_style}>5% Empowering Leaders</p>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="Spend Graph"
          src="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/7d6fbf4019b159b9fcc982c9bbdb9f415ed2f5da/ring-chart.svg?min=1"
          style={{ flexShrink: 0, width: "22.5rem" }}
        />
      </div>
    </div>
  );
}
