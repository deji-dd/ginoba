import MobileEventsCard from "./MobileEventsCard";

export default function MobileEvents() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.12rem",
        marginTop: "1.76rem",
        width: "30rem",
      }}
    >
      <h3
        style={{
          color: "var(--black, #373737)",
          fontFamily: "Nunito Sans",
          fontSize: "2.08rem",
          fontWeight: "600",
          lineHeight: "2.81232rem",
          letterSpacing: "0.0832rem",
          textAlign: "0.0832rem",
        }}
      >
        Our Events
      </h3>
      <div
        className="changing-scroll"
        style={{
          display: "inline-flex",
          alignItems: "flex-start",
          gap: "3rem",
          height: "23rem",
          scrollSnapType: "x mandatory",
          overflow: "auto hidden",
          width: "29rem",
          scrollSnapAlign: "center",
        }}
      >
        <MobileEventsCard
          img="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/7d6fbf4019b159b9fcc982c9bbdb9f415ed2f5da/footer-card-1.svg?min=1"
          day={"18"}
          month={"June"}
          organizer={"Ginoba"}
          heading={"Education for Poor Children"}
          desc={
            "There are many varieations of passages of injected Lorem Ipsum available, but the majority have."
          }
        />
        <MobileEventsCard
          img="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/7d6fbf4019b159b9fcc982c9bbdb9f415ed2f5da/footer-card-2.svg?min=1"
          day={"21"}
          month={"June"}
          organizer={"African Government"}
          heading={"Healthy Food for Growing"}
          desc={
            "There are many varieations of passages of injected Lorem Ipsum available, but the majority have."
          }
        />
        <MobileEventsCard
          img="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/7d6fbf4019b159b9fcc982c9bbdb9f415ed2f5da/footer-card-3.svg?min=1"
          day={"28"}
          month={"June"}
          organizer={"Ginoba"}
          heading={"Cloth Comming"}
          desc={
            "There are many varieations of passages of injected Lorem Ipsum available, but the majority have."
          }
        />
        <MobileEventsCard
          img="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/7d6fbf4019b159b9fcc982c9bbdb9f415ed2f5da/footer-card-4.svg?min=1"
          day={"09"}
          month={"July"}
          organizer={"Ginoba"}
          heading={"Love to Help Awarness Event"}
          desc={
            "There are many varieations of passages of injected Lorem Ipsum available, but the majority have."
          }
        />
      </div>
    </div>
  );
}
