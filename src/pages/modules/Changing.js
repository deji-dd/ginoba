import ChangingCard from "./ChangingCard";
import Card1 from "../../assets/changing-card-1.svg";
import Card2 from "../../assets/changing-card-2.svg";

export default function Changing() {
  return (
    <div
      className="container-fluid px-0"
      style={{
        display: "inline-flex",
        padding: "3.75rem 0rem 4.875rem 4.4375rem",
        justifyContent: "flex-end",
        alignItems: "center",
        background: "#EAF0E8",
        gap: "4.75rem",
        flexDirection: "column",
        width: "90rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.81rem",
        }}
      >
        <p
          className="why-paragraph-1 my-0"
          style={{
            width: "27rem",
            color: "#2E4049",
            fontFamily: "Clash Display",
            fontSize: "1rem",
            fontWeight: "600",
            letterSpacing: "0.12rem",
            textTransform: "uppercase",
            display: "flex",
            gap: "0.625rem",
          }}
        >
          Projects we have carried out
        </p>
        <h1
          style={{
            color: "#2E4049",
            fontFamily: "Clash Display",
            fontSize: "4rem",
            fontWeight: "600",
            letterSpacing: "0.0625rem",
            lineHeight: "4.8rem",
            width: "44.9375rem",
            textAlign: "center",
          }}
        >
          Changing Lives, One Initiative at a Time
        </h1>
      </div>
      <div
        className="changing-scroll"
        style={{
          display: "inline-flex",
          alignItems: "flex-start",
          gap: "3rem",
          height: "40.375rem",
          scrollSnapType: "x mandatory",
          overflow: "auto hidden",
          width: "85rem",
          scrollSnapAlign: "center",
        }}
      >
        <ChangingCard
          img={Card1}
          title={"Big charity: build school for poor kids"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          }
        />
        <ChangingCard
          img={Card2}
          title={"Mission smile 1k: Outdoor charity"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          }
        />
        <ChangingCard
          img={Card1}
          title={"Big charity: build school for poor kids"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          }
        />
        <ChangingCard
          img={Card2}
          title={"Mission smile 1k: Outdoor charity"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          }
        />
        <ChangingCard
          img={Card1}
          title={"Big charity: build school for poor kids"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          }
        />
        <ChangingCard
          img={Card2}
          title={"Mission smile 1k: Outdoor charity"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          }
        />
      </div>
    </div>
  );
}
