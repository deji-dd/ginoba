import ChangingCard from "./MobileChangingCard";
import Project1 from "../../assets/project1-img.png";
import Project2 from "../../assets/project2-img.png";

export default function MobileChanging() {
  return (
    <div
      style={{
        display: "inline-flex",
        padding: "1.52rem 0rem 0rem 0rem",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.92rem",
        flexDirection: "column",
        width: "30rem",
        marginBottom: "3.36rem",
      }}
    >
      <a href="/projects">
        <h1
          style={{
            color: "var(--Black, #373737)",
            fontSize: "2.08rem",
            fontWeight: "600",
            lineHeight: "2.81232rem",
            textAlign: "center",
            fontFamily: "Clash Display",
            letterSpacing: "0.0832rem",
          }}
        >
          Our projects
        </h1>
      </a>
      <div
        className="changing-scroll"
        style={{
          display: "inline-flex",
          alignItems: "flex-start",
          gap: "3rem",
          height: "30rem",
          scrollSnapType: "x mandatory",
          overflow: "auto hidden",
          width: "29rem",
          scrollSnapAlign: "center",
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
          link={"/project-2"}
        />
      </div>
    </div>
  );
}
