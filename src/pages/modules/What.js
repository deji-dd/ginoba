import Title from "./Title";

export default function What() {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5.4375rem",
        width: "81.1rem",
        height: "29.3rem",
        margin: "3.7rem 4.29rem 5.05rem 4.6rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "1.87rem",
          flexDirection: "column",
        }}
      >
        <Title title={"What we do"} />
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.11rem",
            flexDirection: "column",
            marginLeft: "5.76rem",
          }}
        >
          <h1
            style={{
              color: "var(--22495-f, #22495F)",
              fontFamily: "Clash Display",
              fontSize: "2.75rem",
              fontWeight: "600",
              lineHeight: "3.575rem",
              width: "38.1rem",
            }}
          >
            We are building a Better{" "}
            <span style={{ color: "#096A56" }}>Africa</span> with Quality
            Education, Skills, and Healthcare
          </h1>
          <p
            style={{
              color: " var(--secondary-text, #525560)",
              fontSize: "1.2rem",
              fontWeight: "400",
              lineHeight: "1.92rem",
              width: "35.64rem",
            }}
          >
            At Ginoba, we are dedicated to empowering Africa's future through
            quality education, essential skills, and improved healthcare.
            Together, we are building a brighter Africa, where opportunities
            abound and individuals thrive.
          </p>
        </div>
      </div>
      <div
        style={{
          width: "31.875rem",
          height: "29.25rem",
          flexShrink: 0,
          background: `url("https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/8c1498a31e5a8ec9eb8666174820f751cd98ca2f/what-bg.svg?min=1"), lightgray 50% / cover no-repeat`,
        }}
      ></div>
    </div>
  );
}
