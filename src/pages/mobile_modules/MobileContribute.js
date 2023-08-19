import What2Card from "./MobileWhat2Card";
import Card1 from "../../assets/what-2-card-1.svg";
import Card2 from "../../assets/what-2-card-2.svg";
import Card3 from "../../assets/what-2-card-3.svg";
import Card4 from "../../assets/what-2-card-4.svg";
import Card5 from "../../assets/what-2-card-5.svg";
import Card6 from "../../assets/what-2-card-6.svg";

export default function MobileContribute() {
  return (
    <div
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.52rem 1.2rem 3.5744rem",
        width: "30rem",
        background: "#EAF0E8",
        marginTop: "2.56rem",
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
            justifyContent: "center",
            gap: "0.64rem",
          }}
        >
          <h1
            style={{
              color: "var(--22495-f, #22495F)",
              textAlign: "center",
              fontFamily: "Clash Display",
              fontSize: "1.92rem",
              fontWeight: "600",
              lineHeight: "2.81232rem",
              letterSpacing: "0.0768rem",
            }}
          >
            How you can contribute
          </h1>
          <p
            style={{
              width: "26.96rem",
              color: "var(--secondary-text, #525560)",
              textAlign: "center",
              fontSize: "1.12rem",
              fontWeight: "400",
              lineHeight: "1.792rem",
            }}
          >
            Your support, in any form, is valued and deeply appreciated There
            are several ways you can make a meaningful contribution to Ginoba.{" "}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.56rem",
              flexDirection: "column",
            }}
          >
            <What2Card
              icon={Card1}
              title={"Make a Donation"}
              desc={
                "You can make a secure online donation through our website using various payment methods."
              }
              alt={"Make a Donation Icon"}
            />
            <What2Card
              icon={Card2}
              title={"In-Kind Donations"}
              desc={
                "We welcome in-kind donations, such as educational and medical supplies, and other resources."
              }
              alt={"In-Kind Donations Icon"}
            />
            <What2Card
              icon={Card3}
              title={"Volunteer with Us"}
              desc={
                "Your skills can make a significant impact in areas such as teaching, healthcare, and more."
              }
              alt={"Volunteer with Us Icon"}
            />
            <What2Card
              icon={Card4}
              title={"Corporate Partnerships"}
              desc={
                "For organizations looking to make a broader impact, consider partnering with us."
              }
              alt={"Corporate Partnerships Icon"}
            />
            <What2Card
              icon={Card5}
              title={"Spread Awareness"}
              desc={
                "Share our updates, and impact on social media platforms and among your network of friends and family"
              }
              alt={"Spread Awareness Icon"}
            />
            <What2Card
              icon={Card6}
              title={"Fundraising Campaigns"}
              desc={
                "Organise a fundraising campaign to support our cause. Such as birthday fundraisers and charity events."
              }
              alt={"Fundraising Campaigns Icon"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
