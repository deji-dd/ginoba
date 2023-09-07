export default function MobileWhat() {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        width: "30rem",
        padding: "1.28rem 1.28rem 1.28rem 1.28rem",
        flexDirection: "column",
        marginTop: "5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "1.4rem",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.64rem",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.48rem",
            }}
          >
            <hr
              style={{ width: "1.92rem", height: "0.048rem", color: "#096A56" }}
            />
            <p
              style={{
                color: "var(--title-color, #22495F)",
                fontFamily: "Clash Display",
                fontSize: "0.96rem",
                fontWeight: "500",
                letterSpacing: "0.1536rem",
                textTransform: "uppercase",
              }}
            >
              What we do
            </p>
            <hr
              style={{ width: "1.92rem", height: "0.048rem", color: "#096A56" }}
            />
          </div>
          <h1
            style={{
              color: "var(--22495-f, #22495F)",
              fontFamily: "Clash Display",
              fontSize: "1.76rem",
              fontWeight: "600",
              lineHeight: "2.81232rem",
              width: "27.84rem",
              letterSpacing: "0.0704rem",
            }}
          >
            We are building a Better{" "}
            <span style={{ color: "#096A56" }}>Africa</span> with Quality
            Education, Skills, and Healthcare
          </h1>
        </div>
        <div
          style={{
            width: "27.2rem",
            height: "17.76rem",
            flexShrink: 0,
            background: `url("https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/8c1498a31e5a8ec9eb8666174820f751cd98ca2f/what-bg.svg?min=1"), lightgray 50% / cover no-repeat`,
          }}
        />
        <p
          style={{
            color: " var(--secondary-text, #525560)",
            fontSize: "1.2rem",
            fontWeight: "400",
            lineHeight: "1.92rem",
            width: "27.2rem",
          }}
        >
          At Ginoba, we are dedicated to empowering Africa's future through
          quality education, essential skills, and improved healthcare.
          Together, we are building a brighter Africa, where opportunities
          abound and individuals thrive.
        </p>
      </div>
    </div>
  );
}
