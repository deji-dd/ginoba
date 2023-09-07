import What2Card from "./What2Card";

export default function What2() {
  return (
    <div
      style={{
        width: "90rem",
        height: "37.5625rem",
        flexShrink: "0",
        background: "#EAF0E8",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4.5rem",
        }}
      >
        <h1
          style={{
            color: "var(--22495-f, #22495F)",
            fontFamily: "Clash Display",
            fontSize: "2.88rem",
            fontWeight: "600",
            lineHeight: "3.456rem",
            letterSpacing: "0.125rem",
          }}
        >
          What we do for our Africa
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "3.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "5rem",
            }}
          >
            <What2Card
              icon="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/8c1498a31e5a8ec9eb8666174820f751cd98ca2f/what-2-card-1.svg?min=1"
              title={"Quality Education"}
              desc={
                "We focus on improving access to quality education for non-privileged children and young adults."
              }
              alt={"Quality Education Icon"}
            />
            <What2Card
              icon="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/8c1498a31e5a8ec9eb8666174820f751cd98ca2f/what-2-card-2.svg?min=1"
              title={"Healthcare Accessibility"}
              desc={
                "We strive to enhance healthcare outcomes for communities in rural and semi-urban areas."
              }
              alt={"Healthcare Accessibility Icon"}
            />
            <What2Card
              icon="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/8c1498a31e5a8ec9eb8666174820f751cd98ca2f/what-2-card-3.svg?min=1"
              title={"Community Empowerment"}
              desc={
                "We involve local communities in our projects, listening to their needs and aspirations."
              }
              alt={"Community Empowerment Icon"}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "5rem",
            }}
          >
            <What2Card
              icon="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/8c1498a31e5a8ec9eb8666174820f751cd98ca2f/what-2-card-4.svg?min=1"
              title={"Entrepreneurship Support"}
              desc={
                "By nurturing innovation and entrepreneurship, we contribute to the economic prosperity of Africa."
              }
              alt={"Entrepreneurship Support Icon"}
            />
            <What2Card
              icon="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/8c1498a31e5a8ec9eb8666174820f751cd98ca2f/what-2-card-5.svg?min=1"
              title={"National Security"}
              desc={
                "We are committed to supporting national security by investing in relevant and modern infrastructure"
              }
              alt={"National Security Icon"}
            />
            <What2Card
              icon="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/8c1498a31e5a8ec9eb8666174820f751cd98ca2f/what-2-card-6.svg?min=1"
              title={"Sustainable Projects"}
              desc={
                "We focus on creating lasting impact and positive change that extends beyond project completion"
              }
              alt={"Sustainable Projects Icon"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
