import Lucas from "../../assets/lucas.jpeg";
import MobileMember from "./MobileMember";
import Sahr from "../../assets/sahr.jpeg";
import Bukola from "../../assets/bukola.jpeg";
import Victoria from "../../assets/victoria.jpg";
import Andrew from "../../assets/andrew.jpg";
import Samson from "../../assets/samson.jpg";

export default function Meet() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5rem",
        marginTop: "3.74rem",
        justifyContent: "center",
        width: "30rem",
        padding: "1.52rem 2.08rem 1.92rem 2rem",
        flexDirection: "column",
        background: "#EAF0E8",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "3rem",
          justifyContent: "center",
          width: "30rem",
          flexDirection: "column",
          background: "#EAF0E8",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.96rem",
            width: "25.6rem",
          }}
        >
          <h1
            style={{
              color: "var(--22495-f, #22495F)",
              textAlign: "center",
              fontFamily: "Clash Display",
              fontSize: "2.2116rem",
              fontWeight: "600",
              lineHeight: "2.65392rem",
            }}
          >
            Meet The Founder
          </h1>
          <p
            style={{
              color: "var(--text-color, #374151)",
              fontSize: "1.04rem",
              fontWeight: "500",
              lineHeight: "1.742rem",
              opacity: "0.6",
              textAlign: "center",
            }}
          >
            Lucas Oribamise is the founder of Ginoba Foundation, whose main
            objective is to help the less privileged across the continent of
            Africa with emphasis on quality healthcare, scholarship, capacity
            building, education and mentorship.
            <br />
            <br />
            He is a seasoned entrepreneur and has twenty years experience in
            business and investment across the globe. He is passionate about
            impacting this generation and adding value to their lives. He is
            married with children.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "20rem",
          }}
        >
          <img
            alt="Founder"
            style={{ height: "12.64088rem", width: "100%" }}
            src={Lucas}
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              background: "#000",
              gap: "0.75rem",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "5rem",
            }}
          >
            <h1
              style={{ color: "#FFF", fontSize: "1.28rem", fontWeight: "600" }}
            >
              Lucas Oribamise
            </h1>
            <h1
              style={{
                color: "#E7B161",
                fontSize: "1.12rem",
                fontWeight: "600",
                fontStyle: "italic",
              }}
            >
              Founder & CEO
            </h1>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              color: "var(--22495-f, #22495F)",
              textAlign: "center",
              fontFamily: "Clash Display",
              fontSize: "1.625rem",
              fontWeight: "600",
              lineHeight: "120%",
            }}
          >
            Meet our team
          </h1>
          <p
            style={{
              color: "var(--text-color, #374151)",
              fontSize: "0.8125rem",
              fontWeight: "500",
              lineHeight: "160%",
              width: "20rem",
              opacity: "0.6",
              textAlign: "center",
            }}
          >
            Our team is comprised of dedicated individuals who share a common
            passion for creating positive change in Africa.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              justifyContent: "center",
            }}
          >
            <MobileMember
              img={Lucas}
              name={"Lucas Oribamise"}
              desc={"Founder/President"}
            />
            <MobileMember
              img={Sahr}
              name={"Sahr Thomas"}
              desc={"Board Member"}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              justifyContent: "center",
            }}
          >
            <MobileMember
              img={Bukola}
              name={"Bukola Jennifer Daramola"}
              desc={"Board Member"}
            />
            <MobileMember
              img={Victoria}
              name={"Victoria Olayinka"}
              desc={"Board Member"}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              justifyContent: "center",
            }}
          >
            <MobileMember
              img={Andrew}
              name={"Andrew Daramola"}
              desc={"Board Member"}
            />
            <MobileMember
              img={Samson}
              name={"Samson Oluwagbemiga Alayande"}
              desc={"Board Member"}
            />
          </div>
        </div>
        <a href="/team">
          <button
            style={{
              display: "flex",
              padding: "1rem 2.5rem",
              color: "#FFF",
              fontFamily: "Manrope",
              fontSize: "0.75rem",
              fontWeight: "600",
              background: "#096A56",
              border: "none",
            }}
          >
            Team Page
          </button>
        </a>
      </div>
    </div>
  );
}
