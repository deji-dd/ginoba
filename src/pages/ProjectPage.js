import Navbar from "./modules/Navbar";
import { useEffect, useState } from "react";
import Title from "./modules/Title";
import LocationIcon from "../assets/event-location-icon.svg";
import DateIcon from "../assets/event-date-icon.svg";
import Changing from "./modules/Changing";
import Future from "./modules/Future";
import Footer from "./modules/Footer";
import MobileNavbar from "./mobile_modules/MobileNavbar";
import MobileChanging from "./mobile_modules/MobileChanging";
import MobileFuture from "./mobile_modules/MobileFuture";
import MobileFooter from "./mobile_modules/MobileFooter";

export default function ProjectPage(props) {
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
    document.title = "Ginoba | Projects";
  }, []);

  return size > 481 ? (
    <div
      style={{
        width: "90rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4.36rem",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.89rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "2.18rem",
            }}
          >
            <Title title={"Our Project"} />
            <h1
              style={{
                color: "var(--Primary-text, #1D2130)",
                fontFamily: "Clash Display",
                fontSize: "3.76163rem",
                fontWeight: "600",
                lineHeight: "120%",
                width: "55.88731rem",
                marginLeft: "3.43rem",
              }}
            >
              {props.title}
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
              background: "#EAF0E8",
              padding: "1.25rem 2.6875rem",
              width: "72.0625rem",
            }}
          >
            <h1
              style={{
                color: "var(--Primary-text, #1D2130)",
                fontFamily: "Clash Display",
                fontSize: "3rem",
                fontWeight: "600",
                lineHeight: "134%",
              }}
            >
              {props.title2}
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
        </div>
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            flexDirection: "column",
            width: "68.6875rem",
          }}
        >
          <p
            style={{
              color: "var(--Secondary-text, #525560)",
              fontSize: "1.875rem",
              fontWeight: "400",
              fontStyle: "normal",
              lineHeight: "160%",
              whiteSpace: "pre-line",
            }}
          >
            {props.desc1}
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexDirection: "column",
            }}
          >
            <img src={props.img1} alt={props.img1desc} />
            <p
              style={{
                color: "#7F8188",
                fontSize: "1.375rem",
                fontWeight: "400",
                fontStyle: "italic",
                lineHeight: "160%",
                textAlign: "center",
              }}
            >
              {props.img1desc}
            </p>
          </div>
          <p
            style={{
              color: "var(--Secondary-text, #525560)",
              fontSize: "1.875rem",
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
              gap: "0.75rem",
              flexDirection: "column",
            }}
          >
            <img src={props.img2} alt={props.img2desc} />
            <p
              style={{
                color: "#7F8188",
                fontSize: "1.375rem",
                fontWeight: "400",
                fontStyle: "italic",
                lineHeight: "160%",
                textAlign: "center",
              }}
            >
              {props.img2desc}
            </p>
          </div>
          <p
            style={{
              color: "var(--Secondary-text, #525560)",
              fontSize: "1.875rem",
              fontWeight: "400",
              fontStyle: "normal",
              lineHeight: "160%",
              whiteSpace: "pre-line",
            }}
          >
            {props.desc3}
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexDirection: "column",
            }}
          >
            <img src={props.img3} alt={props.img3desc} />
            <p
              style={{
                color: "#7F8188",
                fontSize: "1.375rem",
                fontWeight: "400",
                fontStyle: "italic",
                lineHeight: "160%",
                textAlign: "center",
              }}
            >
              {props.img3desc}
            </p>
          </div>
          <p
            style={{
              color: "var(--Secondary-text, #525560)",
              fontSize: "1.875rem",
              fontWeight: "400",
              fontStyle: "normal",
              lineHeight: "160%",
              whiteSpace: "pre-line",
            }}
          >
            {props.desc4}
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexDirection: "column",
            }}
          >
            <img src={props.img4} alt={props.img4desc} />
            <p
              style={{
                color: "#7F8188",
                fontSize: "1.375rem",
                fontWeight: "400",
                fontStyle: "italic",
                lineHeight: "160%",
                textAlign: "center",
              }}
            >
              {props.img4desc}
            </p>
          </div>
          <p
            style={{
              color: "var(--Secondary-text, #525560)",
              fontSize: "1.875rem",
              fontWeight: "400",
              fontStyle: "normal",
              lineHeight: "160%",
              whiteSpace: "pre-line",
            }}
          >
            {props.desc5}
          </p>
        </div>
      </div>
      <Changing />
      <Future />
      <Footer />
    </div>
  ) : (
    <div
      style={{
        width: "30rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <MobileNavbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
          marginTop: "6.68rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "1.4rem",
            }}
          >
            <Title title={"Our Project"} />
            <h1
              style={{
                color: "var(--Primary-text, #1D2130)",
                fontFamily: "Clash Display",
                fontSize: "1.92rem",
                fontWeight: "600",
                lineHeight: "2.81232rem",
                width: "27.84rem",
                marginLeft: "1.2rem",
                letterSpacing: "0.0384rem",
              }}
            >
              {props.title}
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.9rem",
              background: "#EAF0E8",
              padding: "1.9rem 1.25rem",
              width: "30rem",
            }}
          >
            <h1
              style={{
                color: "var(--Primary-text, #1D2130)",
                fontFamily: "Clash Display",
                fontSize: "1.76rem",
                fontWeight: "600",
                lineHeight: "2.81232rem",
                width: "26.8rem",
                letterSpacing: "0.0704rem",
              }}
            >
              {props.title2}
            </h1>
            <div
              style={{
                display: "flex",
                gap: "1.6rem",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.96rem",
                }}
              >
                <img src={LocationIcon} alt="location icon" />
                <p
                  style={{
                    color: "var(--22495F, #22495F)",
                    fontSize: "1.2rem",
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
                  gap: "0.96rem",
                }}
              >
                <img src={DateIcon} alt="date icon" />
                <p
                  style={{
                    color: "var(--Primary-text, #1D2130)",
                    fontSize: "1.2rem",
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
        </div>
        <div
          style={{
            display: "flex",
            gap: "1.9rem",
            flexDirection: "column",
            width: "27.2rem",
          }}
        >
          <p
            style={{
              color: "var(--22495F, #22495F)",
              fontSize: "1.28rem",
              fontWeight: "400",
              fontStyle: "normal",
              lineHeight: "164.5%",
              whiteSpace: "pre-line",
              opacity: "0.7",
            }}
          >
            {props.desc1}
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexDirection: "column",
            }}
          >
            <img src={props.img1} alt={props.img1desc} />
            <p
              style={{
                color: "#7F8188",
                fontSize: "0.88rem",
                fontWeight: "400",
                fontStyle: "italic",
                lineHeight: "160%",
                textAlign: "center",
              }}
            >
              {props.img1desc}
            </p>
          </div>
          <p
            style={{
              color: "var(--22495F, #22495F)",
              fontSize: "1.28rem",
              fontWeight: "400",
              fontStyle: "normal",
              lineHeight: "164.5%",
              whiteSpace: "pre-line",
              opacity: "0.7",
            }}
          >
            {props.desc2}
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexDirection: "column",
            }}
          >
            <img src={props.img2} alt={props.img2desc} />
            <p
              style={{
                color: "#7F8188",
                fontSize: "0.88rem",
                fontWeight: "400",
                fontStyle: "italic",
                lineHeight: "160%",
                textAlign: "center",
              }}
            >
              {props.img2desc}
            </p>
          </div>
          <p
            style={{
              color: "var(--22495F, #22495F)",
              fontSize: "1.28rem",
              fontWeight: "400",
              fontStyle: "normal",
              lineHeight: "164.5%",
              whiteSpace: "pre-line",
              opacity: "0.7",
            }}
          >
            {props.desc3}
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexDirection: "column",
            }}
          >
            <img src={props.img3} alt={props.img3desc} />
            <p
              style={{
                color: "#7F8188",
                fontSize: "0.88rem",
                fontWeight: "400",
                fontStyle: "italic",
                lineHeight: "160%",
                textAlign: "center",
              }}
            >
              {props.img3desc}
            </p>
          </div>
          <p
            style={{
              color: "var(--22495F, #22495F)",
              fontSize: "1.28rem",
              fontWeight: "400",
              fontStyle: "normal",
              lineHeight: "164.5%",
              whiteSpace: "pre-line",
              opacity: "0.7",
            }}
          >
            {props.desc4}
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexDirection: "column",
            }}
          >
            <img src={props.img4} alt={props.img4desc} />
            <p
              style={{
                color: "#7F8188",
                fontSize: "0.88rem",
                fontWeight: "400",
                fontStyle: "italic",
                lineHeight: "160%",
                textAlign: "center",
              }}
            >
              {props.img4desc}
            </p>
          </div>
          <p
            style={{
              color: "var(--22495F, #22495F)",
              fontSize: "1.28rem",
              fontWeight: "400",
              fontStyle: "normal",
              lineHeight: "164.5%",
              whiteSpace: "pre-line",
              opacity: "0.7",
            }}
          >
            {props.desc5}
          </p>
        </div>
      </div>
      <MobileChanging />
      <MobileFuture />
      <MobileFooter />
    </div>
  );
}
