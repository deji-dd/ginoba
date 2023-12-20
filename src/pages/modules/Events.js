import EventsCard from "./EventsCard";
import Event1 from "../../assets/event-1.svg";
import Event2 from "../../assets/event-2.svg";

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
          <a href="/event-2">
            <EventsCard
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
          <a href="/event-1">
            <EventsCard
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
        </div>
      </div>
    </div>
  );
}
