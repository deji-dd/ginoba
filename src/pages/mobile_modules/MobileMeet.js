import MeetCard from "./MobileMeetCard";
import MeetCardIMG from "../../assets/meet-card-img.png";

export default function MobileMeet() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1.52rem 1.36rem 1.44rem 1.12rem",
        justifyContent: "center",
        background: "#EAF0E8",
        width: "30rem",
        marginTop: "2.92rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.92rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.64rem",
          }}
        >
          <h1
            style={{
              color: "#22495F",
              textAlign: "center",
              fontFamily: "Clash Display",
              fontSize: "2.08rem",
              fontWeight: "600",
              lineHeight: "2.81232rem",
              letterSpacing: "0.0832rem",
            }}
          >
            Meet our team
          </h1>
          <p
            style={{
              color: "var(--text-color, #374151)",
              textAlign: "center",
              fontSize: "1.04rem",
              fontWeight: "500",
              lineHeight: "1.664rem",
              width: "24.08rem",
              opacity: "0.6",
            }}
          >
            Our team is comprised of dedicated individuals who share a common
            passion for creating positive change in Africa.
          </p>
        </div>
        <div
          className="changing-scroll"
          style={{
            display: "inline-flex",
            alignItems: "flex-start",
            gap: "3rem",
            height: "25rem",
            scrollSnapType: "x mandatory",
            overflow: "auto hidden",
            width: "29rem",
            scrollSnapAlign: "center",
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
