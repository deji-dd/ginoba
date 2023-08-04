import ChangingCard from "./ChangingCard";
import Card1 from "../../assets/changing-card-1.svg";
import Card2 from "../../assets/changing-card-2.svg";
import Card3 from "../../assets/changing-card-3.svg";
import Card4 from "../../assets/changing-card-4.svg";
import Title from "./Title";

export default function Changing() {
  return (
    <div
      style={{
        display: "inline-flex",
        padding: "3.75rem 0rem 4.875rem 4.4375rem",
        paddingLeft: "4.4375rem",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        gap: "4.75rem",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "1.81rem",
        }}
      >
        <Title title={"Projects we have carried out"} />
        <h1
          style={{
            color: "#2E4049",
            fontFamily: "Clash Display",
            fontSize: "4rem",
            fontWeight: "600",
            letterSpacing: "0.0625rem",
            lineHeight: "4.8rem",
            width: "44.9375rem",
            marginLeft: "5.76rem",
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
          img={Card3}
          title={"Big charity: build school for poor kids"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          }
        />
        <ChangingCard
          img={Card4}
          title={"Mission : Clean up tarkwa bay"}
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
