import MobileEventsCard from "./MobileEventsCard";
import Event1 from "../../assets/event-1.svg";
import Event2 from "../../assets/event-2.svg";

export default function MobileMoreEvents() {
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
          gap: "1.68rem",
          height: "23rem",
          scrollSnapType: "x mandatory",
          overflow: "auto hidden",
          width: "29rem",
          scrollSnapAlign: "center",
        }}
      >
        <a href="/event-3">
          <MobileEventsCard
            img={Event1}
            day={"14"}
            month={"Dec 2023"}
            organizer={"Ginoba"}
            heading={"Festive donation in Oye-Ekiti"}
            desc={
              "In a bid to embrace the spirit of giving and bring joy to the less privileged during this festive season"
            }
          />
        </a>
        <a href="/event-2">
          <MobileEventsCard
            img={Event2}
            day={"06"}
            month={"Dec 2023"}
            organizer={"Ginoba"}
            heading={"Festive donation in Emure Ekiti"}
            desc={
              "In a bid to embrace the spirit of giving and bring joy to the less privileged during this festive season"
            }
          />
        </a>
        <a href="/event-1">
          <MobileEventsCard
            img={Event2}
            day={"05"}
            month={"Dec 2023"}
            organizer={"Ginoba"}
            heading={"Ginoba Foundation sponsors NGO"}
            desc={
              "Ginoba Foundation sponsors NGO to enroll 10 out-of-school children in Ibadan"
            }
          />
        </a>
      </div>
    </div>
  );
}
