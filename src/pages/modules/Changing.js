import ChangingCard from "./ChangingCard";
import Title from "./Title";
import Project1 from "../../assets/project1-img.png";
import Project2 from "../../assets/project2-img.png";

export default function Changing() {
  return (
    <div
      style={{
        display: "inline-flex",
        padding: "3.75rem 0rem 4.875rem 4.4375rem",
        paddingLeft: "4.4375rem",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        gap: "4.75rem",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "1.81rem",
        }}
      >
        <a href="/projects">
          <Title title={"More Projects"} />
        </a>
        <h1
          style={{
            color: "#2E4049",
            fontFamily: "Clash Display",
            fontSize: "4rem",
            fontWeight: "600",
            letterSpacing: "0.0625rem",
            lineHeight: "4.8rem",
            width: "44.9375rem",
            marginLeft: "5.76rem",
          }}
        >
          Changing Lives, One Initiative at a Time
        </h1>
      </div>
      <div
        className="changing-scroll"
        style={{
          display: "inline-flex",
          alignItems: "flex-start",
          gap: "3rem",
          scrollSnapType: "x mandatory",
          overflow: "auto hidden",
          width: "85rem",
          scrollSnapAlign: "center",
          paddingLeft: "4.25rem",
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
