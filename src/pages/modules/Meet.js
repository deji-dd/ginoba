import Member from "./Member";
import Lucas from "../../assets/lucas.jpeg";
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
        gap: "2.3rem",
        marginTop: "3.74rem",
        justifyContent: "center",
        width: "90rem",
        paddingTop: "4.15rem",
        paddingBottom: "6.17rem",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5.75438rem",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "1.5rem",
            width: "39.8125rem",
          }}
        >
          <h1
            style={{
              color: "var(--22495-f, #22495F)",
              textAlign: "center",
              fontFamily: "Clash Display",
              fontSize: "3.5rem",
              fontWeight: "600",
              lineHeight: "4.12725rem",
            }}
          >
            Meet The Founder
          </h1>
          <p
            style={{
              color: "var(--text-color, #374151)",
              fontSize: "1.25rem",
              fontWeight: "500",
              lineHeight: "2.5125rem",
              width: "39.8125rem",
              opacity: "0.6",
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
          }}
        >
          <img
            alt="Founder"
            style={{ width: "35rem", height: "25rem" }}
            src={Lucas}
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              background: "#000",
              gap: "0.45rem",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "8.5rem",
            }}
          >
            <h1
              style={{ color: "#FFF", fontSize: "1.3rem", fontWeight: "600" }}
            >
              Lucas Oribamise
            </h1>
            <h1
              style={{
                color: "#E7B161",
                fontSize: "1.3rem",
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
          gap: "3rem",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5625rem",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              color: "var(--22495-f, #22495F)",
              textAlign: "center",
              fontFamily: "Clash Display",
              fontSize: "3.25rem",
              fontWeight: "600",
              lineHeight: "120%",
            }}
          >
            Meet our team
          </h1>
          <p
            style={{
              color: "var(--text-color, #374151)",
              fontSize: "1.25rem",
              fontWeight: "500",
              lineHeight: "160%",
              width: "37.625rem",
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
            gap: "3.5rem",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4.375rem",
              justifyContent: "center",
            }}
          >
            <Member
              img={Lucas}
              name={"Lucas Oribamise"}
              desc={"Founder/President"}
            />
            <Member img={Sahr} name={"Sahr Thomas"} desc={"Board Member"} />
            <Member
              img={Bukola}
              name={"Bukola Jennifer Daramola"}
              desc={"Board Member"}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4.375rem",
              justifyContent: "center",
            }}
          >
            <Member
              img={Victoria}
              name={"Victoria Olayinka"}
              desc={"Board Member"}
            />
            <Member
              img={Andrew}
              name={"Andrew Daramola"}
              desc={"Board Member"}
            />
            <Member
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
              fontSize: "1.25rem",
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
