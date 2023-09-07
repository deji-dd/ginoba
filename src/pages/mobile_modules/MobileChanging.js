import ChangingCard from "./MobileChangingCard";

export default function MobileChanging() {
  return (
    <div
      style={{
        display: "inline-flex",
        padding: "1.52rem 0rem 0rem 0rem",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.92rem",
        flexDirection: "column",
        width: "30rem",
        marginBottom: "3.36rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.64rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.48rem",
          }}
        >
          <hr
            style={{ width: "1.92rem", height: "0.048rem", color: "#096A56" }}
          />
          <p
            style={{
              color: "#096A56",
              fontSize: "0.96rem",
              fontWeight: "400",
              lineHeight: "1.152rem",
            }}
          >
            Projects we have carried out
          </p>
          <hr
            style={{ width: "1.92rem", height: "0.048rem", color: "#096A56" }}
          />
        </div>
        <h1
          style={{
            color: "#2E4049",
            fontFamily: "Clash Display",
            fontSize: "2.08rem",
            fontWeight: "600",
            letterSpacing: "0.0832rem",
            lineHeight: "2.81232rem",
            width: "24.88rem",
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
          height: "30rem",
          scrollSnapType: "x mandatory",
          overflow: "auto hidden",
          width: "29rem",
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
