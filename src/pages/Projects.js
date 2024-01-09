import Navbar from "./modules/Navbar";
import Future from "./modules/Future";
import Footer from "./modules/Footer";
import ChangingCard from "./modules/ChangingCard";
import Project1 from "../assets/project1-img.png";
import Project2 from "../assets/project2-img.png";
import { useEffect, useState } from "react";
import MobileNavbar from "./mobile_modules/MobileNavbar";
import MobileFuture from "./mobile_modules/MobileFuture";
import MobileFooter from "./mobile_modules/MobileFooter";
import MobileChangingCard from "./mobile_modules/MobileChangingCard";

export default function Projects() {
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
            Our Projects
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
            <ChangingCard
              img={Project1}
              title={"Back to Books: Reigniting Futures, One Child at a Time."}
              desc={
                "Ginoba Foundation sponsors NGO to enroll 10 out-of-school children in Ibadan."
              }
              link={"/project-1"}
            />
            <ChangingCard
              img={Project2}
              title={
                "Sustainable Sanitation: Building Boreholes and  Modernising Toilets."
              }
              desc={
                "Ginoba Foundation builds multiple boreholes and toilets in churches within Oye-Ekiti"
              }
            />
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
            Our Projects
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
        <MobileChangingCard
          img={Project1}
          title={"Back to Books: Reigniting Futures, One Child at a Time."}
          desc={
            "Ginoba Foundation sponsors NGO to enroll 10 out-of-school children in Ibadan."
          }
          link={"/project-1"}
        />
        <MobileChangingCard
          img={Project2}
          title={
            "Sustainable Sanitation: Building Boreholes and  Modernising Toilets."
          }
          desc={
            "Ginoba Foundation builds multiple boreholes and toilets in churches within Oye-Ekiti"
          }
        />
      </div>
      <MobileFuture />
      <MobileFooter />
    </div>
  );
}
