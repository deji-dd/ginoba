export default function MobileSpend() {
  const icon_style = {
    width: "1rem",
    height: "1rem",
    flexShrink: 0,
    borderRadius: "0.17976rem",
    marginTop: "0.15rem",
  };
  const label_style = {
    color: "#FFF",
    fontSize: "1rem",
    fontWeight: "500",
    lineHeight: "1.28rem",
  };

  return (
    <div
      style={{
        width: "30rem",
        background: "#096A56",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "3.12rem 1.44rem 2.41264rem 1.36rem",
        gap: "1.56rem",
        flexDirection: "column",
        marginBottom: "1.76rem",
      }}
    >
      <img
        alt="Spend Graph"
        src="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/7d6fbf4019b159b9fcc982c9bbdb9f415ed2f5da/ring-chart.svg?min=1"
        style={{ flexShrink: 0, width: "15rem" }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "1.6rem",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.64rem",
          }}
        >
          <h1
            style={{
              width: "27.5rem",
              color: "var(--bg-color, #E8EBF0)",
              fontFamily: "Clash Display",
              fontSize: "2.3rem",
              fontWeight: "600",
              letterSpacing: "0.07792rem",
              lineHeight: "2.112rem",
              textAlign: "center",
            }}
          >
            How we spend your donations and where it goes
          </h1>
          <p
            style={{
              width: "29rem",
              color: "#FFF",
              fontSize: "1.2rem",
              fontWeight: "400",
              lineHeight: "1.536rem",
              textAlign: "center",
            }}
          >
            We understand that when you make a donation, you want to know
            exactly where your money is going and we pledge to be transparent.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.72rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "3.44rem",
              }}
            >
              <div style={{ display: "flex", gap: "0.48rem" }}>
                <div
                  style={{
                    ...icon_style,
                    background: "var(--green-secondary, #BEF3C0)",
                  }}
                ></div>
                <p style={label_style}>40% child care home</p>
              </div>

              <div style={{ display: "flex", gap: "0.48rem" }}>
                <div
                  style={{
                    ...icon_style,
                    background: "#AC94F1",
                  }}
                ></div>
                <p style={label_style}>35% cleanliness program</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "3.44rem",
              }}
            >
              <div style={{ display: "flex", gap: "0.48rem" }}>
                <div style={{ ...icon_style, background: "#FFF0CA" }}></div>
                <p style={label_style}>5% feeding the poor</p>
              </div>
              <div style={{ display: "flex", gap: "0.48rem" }}>
                <div
                  style={{
                    ...icon_style,
                    background: "#F9CF64",
                  }}
                ></div>
                <p style={label_style}>10% helping people</p>
              </div>
            </div>
            <div
              style={{ display: "flex", gap: "0.48rem", alignSelf: "center" }}
            >
              <div
                style={{
                  ...icon_style,
                  background: "#F38FBF",
                }}
              ></div>
              <p style={label_style}>10% excursions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
