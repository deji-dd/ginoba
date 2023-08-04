import WaysCard from "./WaysCard";
import Quality from "../../assets/quality-icon.svg";
import Scholarships from "../../assets/schorlaships.svg";
import Capacity from "../../assets/capacity.svg";
import Widows from "../../assets/widows.svg";
import Loans from "../../assets/loans.svg";
import Mentorship from "../../assets/mentorship.svg";

export default function Ways() {
  return (
    <div
      style={{
        display: "flex",
        width: "90rem",
        height: "46.875rem",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2.75rem",
        padding: "2.75rem 9.125rem 5.6875rem 9.125rem",
      }}
    >
      <div
        style={{
          width: "78rem",
          height: "38.4375rem",
          display: "flex",
          flexDirection: "column",
          gap: "3.75rem",
          flexShrink: "0",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            width: "37rem",
            height: "5.6875rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.62rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <hr
              style={{
                width: "2.5rem",
                height: "0.0625rem",
                background: "#096A56",
              }}
            />
            <p
              style={{
                color: "#096A56",
                fontSize: "1rem",
                fontWeight: "400",
                lineHeight: "1.5rem",
              }}
            >
              What we do
            </p>
            <hr
              style={{
                width: "2.5rem",
                height: "0.0625rem",
                color: "#096A56",
              }}
            />
          </div>
          <h1
            style={{
              color: "var(--black, #373737)",
              fontFamily: "Clash Display",
              fontSize: "2.5rem",
              fontWeight: "600",
              lineHeight: "3.66188rem",
              letterSpacing: "0.1rem",
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
              width: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "4.5rem",
            }}
          >
            <WaysCard
              icon={Quality}
              way={"Quality healthcare"}
              desc={
                "We work tirelessly to address pressing health challenges faced by communities across Africa."
              }
              alt={"Quality healthcare icon"}
            />
            <WaysCard
              icon={Scholarships}
              way={"Scholarships"}
              desc={
                "We strive to provide quality learning to young minds, to empower them as the future generation of leaders."
              }
              alt={"Scholarships icon"}
            />
            <WaysCard
              icon={Capacity}
              way={"Capacity Building"}
              desc={
                "We believe in empowering service men with skills and training, to serve and protect our nations."
              }
              alt={"Capacity Building"}
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "4.5rem",
            }}
          >
            <WaysCard
              icon={Widows}
              way={"Widows Support"}
              desc={
                "We support widows of service men by providing them with the care, support, and resources they need."
              }
              alt={"Widows Support"}
            />
            <WaysCard
              icon={Loans}
              way={"Single-digit loans"}
              desc={
                "We offer loans to allow entrepreneurs bring their business ideas to life and foster innovation."
              }
              alt={"Single-digit loans"}
            />
            <WaysCard
              icon={Mentorship}
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
