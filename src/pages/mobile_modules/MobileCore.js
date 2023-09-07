import CoreCard from "./MobileCoreCard";

export default function MobileCore() {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        flexDirection: "column",
        width: "27.12rem",
        gap: "1.92rem",
        marginTop: "4rem",
        marginLeft: "1.4rem",
        marginBottom: "2.26rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "0.64rem",
        }}
      >
        <h1
          style={{
            color: "#22495F",
            textAlign: "center",
            fontFamily: "Clash Display",
            fontSize: "2.08rem",
            fontWeight: "600",
            lineHeight: "2.81232rem",
            letterSpacing: "0.0832rem",
          }}
        >
          Our Core Values
        </h1>
        <p
          style={{
            color: "var(--text-color, #374151)",
            textAlign: "center",
            fontSize: "1.04rem",
            fontWeight: "500",
            lineHeight: "1.664rem",
            width: "24.08rem",
            opacity: "0.6",
          }}
        >
          At Ginoba, these core values are not just words on a page; they guide
          our actions and shape our vision for a better future
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "1.28rem",
          width: "27.2rem",
          justifyContent: "center",
        }}
      >
        <CoreCard
          img="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/4c3843bb22244979fe06c7d5d75a7967ab73cd7b/core-card-1.svg?min=1"
          title={"Partnership"}
          desc={
            "We believe that meaningful change can only be achieved through strong partnerships. We foster relationships with like-minded individuals, organizations, and communities, working collaboratively to address challenges."
          }
        />
        <CoreCard
          img="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/4c3843bb22244979fe06c7d5d75a7967ab73cd7b/core-card-2.svg?min=1"
          title={"Engagement"}
          desc={
            "Engaging with the people we serve is at the core of our approach. We actively listen to the needs and aspirations of individuals and communities, so we can tailor our initiatives to address their unique challenges and opportunities."
          }
        />

        <CoreCard
          img="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/4c3843bb22244979fe06c7d5d75a7967ab73cd7b/core-card-3.svg?min=1"
          title={"Integrity"}
          desc={
            "Integrity forms the foundation of everything we do. We are committed to upholding the highest ethical standards, transparency, and accountability. Our actions are guided by a genuine desire to serve those we aim to empower."
          }
        />
        <CoreCard
          img="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/4c3843bb22244979fe06c7d5d75a7967ab73cd7b/core-card-4.svg?min=1"
          title={"Collaboration"}
          desc={
            "Collaboration is the heartbeat of our NGO. We recognise that no single entity can tackle the  issues facing Africa. We work hand in hand with governments, corporations, and local communities to leverage diverse expertise to amplify our impact."
          }
        />
      </div>
    </div>
  );
}
