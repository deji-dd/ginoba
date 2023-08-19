import MobileEventsCard from "./MobileEventsCard";
import Card1 from "../../assets/footer-card-1.png";
import Card2 from "../../assets/footer-card-2.png";
import Card3 from "../../assets/footer-card-3.png";
import Card4 from "../../assets/footer-card-4.png";

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
          img={Card1}
          day={"18"}
          month={"June"}
          organizer={"Ginoba"}
          heading={"Education for Poor Children"}
          desc={
            "There are many varieations of passages of injected Lorem Ipsum available, but the majority have."
          }
        />
        <MobileEventsCard
          img={Card2}
          day={"21"}
          month={"June"}
          organizer={"African Government"}
          heading={"Healthy Food for Growing"}
          desc={
            "There are many varieations of passages of injected Lorem Ipsum available, but the majority have."
          }
        />
        <MobileEventsCard
          img={Card3}
          day={"28"}
          month={"June"}
          organizer={"Ginoba"}
          heading={"Cloth Comming"}
          desc={
            "There are many varieations of passages of injected Lorem Ipsum available, but the majority have."
          }
        />
        <MobileEventsCard
          img={Card4}
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
