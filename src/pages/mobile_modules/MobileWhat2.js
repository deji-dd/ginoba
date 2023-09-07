import What2Card from "./MobileWhat2Card";

export default function What2() {
  return (
    <div
      style={{
        width: "30rem",
        background: "#EAF0E8",
        display: "inline-flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "1.52rem 1.8rem 2.61336rem",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.92rem",
        }}
      >
        <h1
          style={{
            color: "var(--22495-f, #22495F)",
            fontFamily: "Clash Display",
            fontSize: "1.92rem",
            fontWeight: "600",
            lineHeight: "2.81232rem",
            letterSpacing: "0.0768rem",
          }}
        >
          What we do for our Africa
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2.48rem",
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
  );
}
