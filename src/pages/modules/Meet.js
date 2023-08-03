import MeetCard from "./MeetCard";
import MeetCardIMG from "../../assets/meet-card-img.png";

export default function Meet() {
  return (
    <div
      className="container-fluid px-0"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3rem",
        marginTop: "3.31rem",
        marginBottom: "5.07rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5625rem",
        }}
      >
        <h1
          style={{
            color: "#22495F",
            textAlign: "center",
            fontFamily: "Clash Display",
            fontSize: "3.25rem",
            fontWeight: "600",
            lineHeight: "3.9rem",
          }}
        >
          Meet our team
        </h1>
        <p
          style={{
            color: "var(--text-color, #374151)",
            textAlign: "center",
            fontSize: "1.25rem",
            fontWeight: "500",
            lineHeight: "2rem",
            width: "37.625rem",
            opacity: "0.6000000238418579",
          }}
        >
          Our team is comprised of dedicated individuals who share a common
          passion for creating positive change in Africa.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "3.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "3.25rem",
          }}
        >
          <MeetCard
            img={MeetCardIMG}
            name={"Lorem Ipsum Lorem"}
            title={"Cofounder, CEO"}
          />
          <MeetCard
            img={MeetCardIMG}
            name={"Lorem Ipsum Lorem"}
            title={"Cofounder, CEO"}
          />
          <MeetCard
            img={MeetCardIMG}
            name={"Lorem Ipsum Lorem"}
            title={"Cofounder, CEO"}
          />
          <MeetCard
            img={MeetCardIMG}
            name={"Lorem Ipsum Lorem"}
            title={"Cofounder, CEO"}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "3.25rem",
          }}
        >
          <MeetCard
            img={MeetCardIMG}
            name={"Lorem Ipsum Lorem"}
            title={"Cofounder, CEO"}
          />
          <MeetCard
            img={MeetCardIMG}
            name={"Lorem Ipsum Lorem"}
            title={"Cofounder, CEO"}
          />
          <MeetCard
            img={MeetCardIMG}
            name={"Lorem Ipsum Lorem"}
            title={"Cofounder, CEO"}
          />
          <MeetCard
            img={MeetCardIMG}
            name={"Lorem Ipsum Lorem"}
            title={"Cofounder, CEO"}
          />
        </div>
      </div>
    </div>
  );
}
