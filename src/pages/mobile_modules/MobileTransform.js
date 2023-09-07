import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function MobileTransform() {
  const icon_style = {
    width: "1.02144rem",
    flexShrink: 0,
    color: "#EAF0E8",
  };
  const text_style = {
    fontSize: "0.88rem",
    color: "#727272",
    fontWeight: "500",
    lineHeight: "1.892rem",
  };
  const div_style = {
    display: "flex",
    gap: "0.38rem",
    alignItems: "center",
  };

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        flexDirection: "column",
        marginTop: "2rem",
        width: "30rem",
      }}
    >
      <div style={{ width: "20.332rem" }}>
        <img
          src="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/7d6fbf4019b159b9fcc982c9bbdb9f415ed2f5da/transform-pic.svg?min=1"
          width={"100%"}
          style={{ transform: "rotate(-0.66deg)", flexShrink: 0 }}
          alt="Transform"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "0.75rem",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              width: "27.2rem",
              color: "#2E4049",
              fontFamily: "Clash Display",
              fontSize: "1.44rem",
              fontWeight: "600",
              letterSpacing: "0.0576rem",
              lineHeight: "1.8576rem",
              textAlign: "center",
            }}
          >
            Transforming Communities: Empowering Africans with Education,
            Skills, and Health Support
          </h1>
          <p
            style={{
              width: "23.36rem",
              color: "#2E4049",
              fontSize: "0.96rem",
              fontWeight: "400",
              textAlign: "center",
              lineHeight: "1.25088rem",
            }}
          >
            Together, we can transform communities across Nigeria, empowering
            individuals with education, valuable skills, and vital health
            resources.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3.75rem",
          }}
        >
          <div>
            <div style={div_style}>
              <div>
                <CheckCircleIcon style={icon_style} />
              </div>
              <div>
                <h3 style={text_style}>Food Donation</h3>
              </div>
            </div>
            <div style={div_style}>
              <div>
                <CheckCircleIcon style={icon_style} />
              </div>
              <div>
                <h3 style={text_style}>Money Donation</h3>
              </div>
            </div>
            <div style={div_style}>
              <div>
                <CheckCircleIcon style={icon_style} />
              </div>
              <div>
                <h3 style={text_style}>Dress Donation</h3>
              </div>
            </div>
          </div>
          <div>
            <div style={div_style}>
              <div>
                <CheckCircleIcon style={icon_style} />
              </div>
              <div>
                <h3 style={text_style}>Water Supply</h3>
              </div>
            </div>
            <div style={div_style}>
              <div>
                <CheckCircleIcon style={icon_style} />
              </div>
              <div>
                <h3 style={text_style}>Education Donation</h3>
              </div>
            </div>
            <div style={div_style}>
              <div>
                <CheckCircleIcon style={icon_style} />
              </div>
              <div>
                <h3 style={text_style}>Toys Donation</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
