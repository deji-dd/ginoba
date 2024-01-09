import Navbar from "./modules/Navbar";
import Future from "./modules/Future";
import Footer from "./modules/Footer";
import EventsCard from "./modules/EventsCard";
import Event1 from "../assets/event-1.svg";
import Event2 from "../assets/event-2.svg";
import { useEffect, useState } from "react";
import MobileNavbar from "./mobile_modules/MobileNavbar";
import MobileFuture from "./mobile_modules/MobileFuture";
import MobileFooter from "./mobile_modules/MobileFooter";
import MobileEventsCard from "./mobile_modules/MobileEventsCard";

export default function Events() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
      console.log(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    document.title = "Ginoba | Events";
  }, []);

  return size > 481 ? (
    <div
      style={{
        width: "90rem",
        background: "var(--bg, #FEFDFC)",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10.56rem",
          paddingLeft: "5.6rem",
          background: "#EAF0E8",
          paddingBottom: "10.21rem",
          paddingTop: "6.24rem",
          width: "90rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
          }}
        >
          <h1
            style={{
              color: "var(--22495F, #22495F)",
              fontFamily: "Clash Display",
              fontSize: "4.3008rem",
              fontWeight: "600",
              lineHeight: "120%",
              letterSpacing: "0.04304rem",
            }}
          >
            Our Events
          </h1>
          <p
            style={{
              color: "var(--Primary-text, #1D2130)",
              fontFamily: "Clash Display",
              fontSize: "3.2rem",
              fontWeight: "600",
              lineHeight: "120%",
              letterSpacing: "0.08rem",
            }}
          >
            Changing Lives, One Initiative at a Time
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.8rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "3.58rem",
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
      <Future />
      <Footer />
    </div>
  ) : (
    <div
      style={{
        width: "30rem",
        background: "var(--bg, #FEFDFC)",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <MobileNavbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          padding: "2.3rem 1.25rem",
          background: "#EAF0E8",
          width: "30rem",
          margin: "5rem 0 2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.3rem",
          }}
        >
          <h1
            style={{
              color: "var(--22495F, #22495F)",
              fontFamily: "Clash Display",
              fontSize: "1.92rem",
              fontWeight: "600",
              lineHeight: "2.81232rem",
              letterSpacing: "0.0384rem",
            }}
          >
            Our Events
          </h1>
          <p
            style={{
              color: "var(--Primary-text, #1D2130)",
              fontFamily: "Clash Display",
              fontSize: "1.6rem",
              fontWeight: "600",
              lineHeight: "2.81232rem",
              letterSpacing: "0.032rem",
              width: "26rem",
            }}
          >
            Changing Lives, One Initiative at a Time
          </p>
        </div>
        <a href="/event-2">
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
        <a href="/event-1">
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
      </div>
      <MobileFuture />
      <MobileFooter />
    </div>
  );
}
