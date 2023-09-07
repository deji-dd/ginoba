import ChangingCard from "./ChangingCard";
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
          img="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/4c3843bb22244979fe06c7d5d75a7967ab73cd7b/changing-card-3.svg?min=1"
          title={"Big charity: build school for poor kids"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          }
        />
        <ChangingCard
          img="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/4c3843bb22244979fe06c7d5d75a7967ab73cd7b/changing-card-4.svg?min=1"
          title={"Mission : Clean up tarkwa bay"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          }
        />
        <ChangingCard
          img="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/4c3843bb22244979fe06c7d5d75a7967ab73cd7b/changing-card-1.svg?min=1"
          title={"Big charity: build school for poor kids"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          }
        />
        <ChangingCard
          img="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/4c3843bb22244979fe06c7d5d75a7967ab73cd7b/changing-card-3.svg?min=1"
          title={"Mission smile 1k: Outdoor charity"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          }
        />
      </div>
    </div>
  );
}
