import WaysCard from "../modules/WaysCard";

export default function MobileWays() {
  return (
    <div
      style={{
        display: "flex",
        width: "30rem",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.52rem 2.56rem 3.64936rem 2.56rem",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
          flexShrink: "0",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.38rem",
            width: "24.88rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.48rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <hr
              style={{
                width: "1.92rem",
                height: "0.048rem",
                color: "#096A56",
              }}
            />
            <p
              style={{
                color: "#096A56",
                fontSize: "0.96rem",
                fontWeight: "400",
                lineHeight: "1.152rem",
              }}
            >
              What we do
            </p>
            <hr
              style={{
                width: "1.92rem",
                height: "0.048rem",
                color: "#096A56",
              }}
            />
          </div>
          <h1
            style={{
              color: "var(--black, #373737)",
              fontFamily: "Clash Display",
              fontSize: "1.92rem",
              fontWeight: "600",
              lineHeight: "2.81232rem",
              letterSpacing: "0.0768rem",
              width: "26.4rem",
              textAlign: "center",
            }}
          >
            These are the ways we help
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            gap: "5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "22.8rem",
              justifyContent: "center",
              alignItems: "center",
              gap: "3.46728rem",
              flexDirection: "column",
            }}
          >
            <WaysCard
              icon="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/4b2a4cb1deef9de35196f8916acc3114bf9aa09e/navbar-toggler.svg?min=1"
              way={"Quality healthcare"}
              desc={
                "We work tirelessly to address pressing health challenges faced by communities across Africa."
              }
              alt={"Quality healthcare icon"}
            />
            <WaysCard
              icon="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/4b2a4cb1deef9de35196f8916acc3114bf9aa09e/schorlaships.svg?min=1"
              way={"Scholarships"}
              desc={
                "We strive to provide quality learning to young minds, to empower them as the future generation of leaders."
              }
              alt={"Scholarships icon"}
            />
            <WaysCard
              icon="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/4c3843bb22244979fe06c7d5d75a7967ab73cd7b/capacity.svg?min=1"
              way={"Capacity Building"}
              desc={
                "We believe in empowering service men with skills and training, to serve and protect our nations."
              }
              alt={"Capacity Building"}
            />
            <WaysCard
              icon="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/8c1498a31e5a8ec9eb8666174820f751cd98ca2f/widows.svg?min=1"
              way={"Widows Support"}
              desc={
                "We support widows of service men by providing them with the care, support, and resources they need."
              }
              alt={"Widows Support"}
            />
            <WaysCard
              icon="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/cc097bf1f359c768c74ca03daadfee7ce9529421/loans.svg?min=1"
              way={"Single-digit loans"}
              desc={
                "We offer loans to allow entrepreneurs bring their business ideas to life and foster innovation."
              }
              alt={"Single-digit loans"}
            />
            <WaysCard
              icon="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/cc097bf1f359c768c74ca03daadfee7ce9529421/mentorship.svg?min=1"
              way={"Mentorship Initiatives"}
              desc={
                "We support mentorship programs that nurture and equip young ones with essential knowledge."
              }
              alt={"Mentorship Initiatives"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
