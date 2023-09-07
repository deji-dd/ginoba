import EventsCard from "./EventsCard";

export default function Events() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.875rem",
        marginBottom: "7.29rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
        <h3
          style={{
            color: "var(--title-color, #22495F)",
            fontFamily: "Nunito Sans",
            fontSize: "2.4rem",
            fontWeight: "600",
            lineHeight: "3.36rem",
          }}
        >
          Our Events
        </h3>
        <hr
          style={{
            width: "61.44rem",
            height: "0rem",
            borderColor: "#096A56",
            opacity: "0.7",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "3.125rem",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "75.0625rem",
            justifyContent: "center",
            alignItems: "center",
            gap: "5.0625rem",
          }}
        >
          <EventsCard
            img="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/7d6fbf4019b159b9fcc982c9bbdb9f415ed2f5da/footer-card-1.svg?min=1"
            day={"18"}
            month={"June"}
            organizer={"Ginoba"}
            heading={"Education for Poor Children"}
            desc={
              "There are many varieations of passages of injected Lorem Ipsum available, but the majority have."
            }
          />
          <EventsCard
            img="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/7d6fbf4019b159b9fcc982c9bbdb9f415ed2f5da/footer-card-2.svg?min=1"
            day={"21"}
            month={"June"}
            organizer={"African Government"}
            heading={"Healthy Food for Growing"}
            desc={
              "There are many varieations of passages of injected Lorem Ipsum available, but the majority have."
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "75.0625rem",
            justifyContent: "center",
            alignItems: "center",
            gap: "5.0625rem",
          }}
        >
          <EventsCard
            img="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/7d6fbf4019b159b9fcc982c9bbdb9f415ed2f5da/footer-card-3.svg?min=1"
            day={"28"}
            month={"June"}
            organizer={"Ginoba"}
            heading={"Cloth Comming"}
            desc={
              "There are many varieations of passages of injected Lorem Ipsum available, but the majority have."
            }
          />
          <EventsCard
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
    </div>
  );
}
