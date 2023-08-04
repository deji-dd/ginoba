import CoreCard from "./CoreCard";
import Card1 from "../../assets/core-card-1.svg";
import Card2 from "../../assets/core-card-2.svg";
import Card3 from "../../assets/core-card-3.svg";
import Card4 from "../../assets/core-card-4.svg";

export default function Core() {
  return (
    <div
      style={{
        display: "inline-flex",
        padding: "4.42375rem 8.0625rem 3.26375rem 8.125rem",
        justifyContent: "center",
        alignItems: "center",
        background: "#FFF",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "2.25rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "0.5625rem",
          }}
        >
          <h1
            style={{
              color: "#22495F",
              textAlign: "center",
              fontFamily: "Clash Display",
              fontSize: "3.25rem",
              fontWeight: "600",
              lineHeight: "3.9rem",
            }}
          >
            Our Core Values
          </h1>
          <p
            style={{
              color: "var(--text-color, #374151)",
              textAlign: "center",
              fontSize: "1.5rem",
              fontWeight: "500",
              lineHeight: "2.4rem",
              width: "55.625rem",
              letterSpacing: "-0.0625rem",
              opacity: "0.6000000238418579",
            }}
          >
            At Ginoba, these core values are not just words on a page; they
            guide our actions and shape our vision for a better future
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "5.1875rem",
            }}
          >
            <CoreCard
              img={Card1}
              title={"Partnership"}
              desc={
                "We believe that meaningful change can only be achieved through strong partnerships. We foster relationships with like-minded individuals, organizations, and communities, working collaboratively to address challenges."
              }
            />
            <CoreCard
              img={Card2}
              title={"Engagement"}
              desc={
                "Engaging with the people we serve is at the core of our approach. We actively listen to the needs and aspirations of individuals and communities, so we can tailor our initiatives to address their unique challenges and opportunities."
              }
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "5.1875rem",
            }}
          >
            <CoreCard
              img={Card3}
              title={"Integrity"}
              desc={
                "Integrity forms the foundation of everything we do. We are committed to upholding the highest ethical standards, transparency, and accountability. Our actions are guided by a genuine desire to serve those we aim to empower."
              }
            />
            <CoreCard
              img={Card4}
              title={"Collaboration"}
              desc={
                "Collaboration is the heartbeat of our NGO. We recognise that no single entity can tackle the  issues facing Africa. We work hand in hand with governments, corporations, and local communities to leverage diverse expertise to amplify our impact."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
