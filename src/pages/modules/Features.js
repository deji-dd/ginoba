import Card1 from "../../assets/features-card-1.svg";
import Card2 from "../../assets/features-card-2.svg";
import Card3 from "../../assets/features-card-3.svg";
import Card4 from "../../assets/features-card-4.svg";
import FeaturesCard from "./FeaturesCard";

export default function Features() {
  return (
    <div
      style={{
        width: "90rem",
        height: "27.25rem",
        flexShrink: "0",
        background: "#EAF0E8",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          flexShrink: "0",
          display: "inline-flex",
          alignItems: "flex-start",
          gap: "2.5rem",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flexShrink: "0",
            display: "inline-flex",
            alignItems: "flex-start",
            gap: "4.25rem",
          }}
        >
          <FeaturesCard
            icon={Card1}
            title={"20+ orphanage visit in 2 months"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            }
          />
          <FeaturesCard
            icon={Card2}
            title={"230 People Have donated"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            }
          />
        </div>
        <div
          style={{
            flexShrink: "0",
            display: "inline-flex",
            alignItems: "flex-start",
            gap: "4.25rem",
          }}
        >
          <FeaturesCard
            icon={Card3}
            title={"30+ people joined"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            }
          />
          <FeaturesCard
            icon={Card4}
            title={"1.2m Raised for this initiate"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            }
          />
        </div>
      </div>
    </div>
  );
}
