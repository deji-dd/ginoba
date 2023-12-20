import Navbar from "./modules/Navbar";
import LocationIcon from "../assets/event-location-icon.svg";
import DateIcon from "../assets/event-date-icon.svg";
import Events from "./modules/Events";
import { useEffect, useState } from "react";
import MobileNavbar from "./mobile_modules/MobileNavbar";
import MobileEvents from "./mobile_modules/MobileEvents";

export default function Event(props) {
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
    <div style={{ width: "90rem", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div
        style={{
          height: "25rem",
          background: "#EAF0E8",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "2.3rem",
          paddingLeft: "8rem",
        }}
      >
        <h1
          style={{
            width: "73.1875rem",
            color: "var(--Primary-text, #1D2130)",
            fontFamily: "Clash Display",
            fontSize: "3rem",
            fontWeight: "600",
            fontStyle: "normal",
            lineHeight: "134%",
          }}
        >
          {props.title}
        </h1>
        <div
          style={{
            display: "flex",
            gap: "11.3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <img src={LocationIcon} alt="location icon" />
            <p
              style={{
                color: "var(--22495F, #22495F)",
                fontSize: "1.375rem",
                fontWeight: "500",
                fontStyle: "normal",
                lineHeight: "160%",
              }}
            >
              {props.location}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <img src={DateIcon} alt="date icon" />
            <p
              style={{
                color: "var(--Primary-text, #1D2130)",
                fontSize: "1.375rem",
                fontWeight: "500",
                fontStyle: "normal",
                lineHeight: "160%",
              }}
            >
              {props.date}
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "4rem 0",
          display: "flex",
          flexDirection: "column",
          gap: "1.75rem",
          width: "73rem",
          alignSelf: "center",
        }}
      >
        <h1
          style={{
            color: "var(--Primary-text, #1D2130)",
            fontFamily: "Clash Display",
            fontSize: "2.5rem",
            fontWeight: "600",
            fontStyle: "normal",
            lineHeight: "120%",
          }}
        >
          About event
        </h1>
        <p
          style={{
            width: "73rem",
            color: "var(--Secondary-text, #525560)",
            fontSize: "2.125rem",
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: "160%",
          }}
        >
          {props.desc1}
        </p>
        <div
          style={{
            display: "flex",
            gap: "1.75rem",
          }}
        >
          <img src={props.img1} alt={props.location} />
          <img src={props.img2} alt={props.location} />
          <img src={props.img3} alt={props.location} />
        </div>
        <p
          style={{
            width: "73rem",
            color: "var(--Secondary-text, #525560)",
            fontSize: "2.125rem",
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: "160%",
            whiteSpace: "pre-line",
          }}
        >
          {props.desc2}
        </p>
        <div
          style={{
            display: "flex",
            gap: "1.75rem",
          }}
        >
          <img src={props.img4} alt={props.location} />
          <img src={props.img5} alt={props.location} />
          <img src={props.img6} alt={props.location} />
        </div>
      </div>
      <Events />
    </div>
  ) : (
    <div style={{ width: "30rem", display: "flex", flexDirection: "column" }}>
      <MobileNavbar />
      <div
        style={{
          background: "#EAF0E8",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1.5rem",
          padding: "1rem",
          marginTop: "5rem",
        }}
      >
        <h1
          style={{
            width: "27.84rem",
            color: "var(--Primary-text, #1D2130)",
            fontFamily: "Clash Display",
            fontSize: "1.375rem",
            fontWeight: "600",
            fontStyle: "normal",
            lineHeight: "2.19713rem",
            letterSpacing: "0.055rem",
          }}
        >
          {props.title}
        </h1>
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
            }}
          >
            <img src={LocationIcon} alt="location icon" />
            <p
              style={{
                color: "var(--22495F, #22495F)",
                fontSize: "0.9375rem",
                fontWeight: "500",
                fontStyle: "normal",
                lineHeight: "160%",
              }}
            >
              {props.location}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
            }}
          >
            <img src={DateIcon} alt="date icon" />
            <p
              style={{
                color: "var(--22495F, #22495F)",
                fontSize: "0.9375rem",
                fontWeight: "500",
                fontStyle: "normal",
                lineHeight: "160%",
              }}
            >
              {props.date}
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "1.25rem 1.4rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "27.2rem",
        }}
      >
        <h1
          style={{
            color: "var(--22495F, #22495F)",
            fontFamily: "Clash Display",
            fontSize: "1.375rem",
            fontWeight: "600",
            fontStyle: "normal",
            lineHeight: "2.19713rem",
            letterSpacing: "0.055rem",
          }}
        >
          About event
        </h1>
        <p
          style={{
            width: "27.2rem",
            color: "var(--22495F, #22495F)",
            fontSize: "1rem",
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: "164.5%",
          }}
        >
          {props.desc1}
        </p>
        <div
          style={{
            display: "flex",
            gap: "0.67rem",
          }}
        >
          <img
            style={{ width: "8.8rem", height: "9.76rem" }}
            src={props.img1}
            alt={props.location}
          />
          <img
            style={{ width: "8.8rem", height: "9.76rem" }}
            src={props.img2}
            alt={props.location}
          />
          <img
            style={{ width: "8.8rem", height: "9.76rem" }}
            src={props.img3}
            alt={props.location}
          />
        </div>
        <p
          style={{
            width: "27.2rem",
            color: "var(--22495F, #22495F)",
            fontSize: "1rem",
            fontWeight: "400",
            fontStyle: "normal",
            lineHeight: "164.5%",
            whiteSpace: "pre-line",
          }}
        >
          {props.desc2}
        </p>
        <div
          style={{
            display: "flex",
            gap: "0.67rem",
          }}
        >
          <img
            style={{ width: "8.8rem", height: "9.76rem" }}
            src={props.img4}
            alt={props.location}
          />
          <img
            style={{ width: "8.8rem", height: "9.76rem" }}
            src={props.img5}
            alt={props.location}
          />
          <img
            style={{ width: "8.8rem", height: "9.76rem" }}
            src={props.img6}
            alt={props.location}
          />
        </div>
      </div>
      <MobileEvents />
    </div>
  );
}
