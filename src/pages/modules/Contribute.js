import What2Card from "./What2Card";

export default function Contribute() {
  return (
    <div
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 5.38rem 4.6175rem 5.4375rem",
        width: "90rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <h1
            style={{
              width: "70.5rem",
              color: "var(--22495-f, #22495F)",
              textAlign: "center",
              fontFamily: "Clash Display",
              fontSize: "3rem",
              fontWeight: "600",
              lineHeight: "3.6rem",
            }}
          >
            How you can contribute
          </h1>
          <p
            style={{
              width: "45.8125rem",
              color: "var(--secondary-text, #525560)",
              textAlign: "center",
              fontSize: "1.25rem",
              fontWeight: "400",
              lineHeight: "2rem",
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
              alignItems: "flex-start",
              gap: "5rem",
            }}
          >
            <What2Card
              icon="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/8c1498a31e5a8ec9eb8666174820f751cd98ca2f/what-2-card-1.svg?min=1"
              title={"Make a Donation"}
              desc={
                "You can make a secure online donation through our website using various payment methods."
              }
              alt={"Make a Donation Icon"}
            />
            <What2Card
              icon="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/8c1498a31e5a8ec9eb8666174820f751cd98ca2f/what-2-card-2.svg?min=1"
              title={"In-Kind Donations"}
              desc={
                "We welcome in-kind donations, such as educational and medical supplies, and other resources."
              }
              alt={"In-Kind Donations Icon"}
            />
            <What2Card
              icon="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/8c1498a31e5a8ec9eb8666174820f751cd98ca2f/what-2-card-3.svg?min=1"
              title={"Volunteer with Us"}
              desc={
                "Your skills can make a significant impact in areas such as teaching, healthcare, and more."
              }
              alt={"Volunteer with Us Icon"}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "5rem",
            }}
          >
            <What2Card
              icon="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/8c1498a31e5a8ec9eb8666174820f751cd98ca2f/what-2-card-4.svg?min=1"
              title={"Corporate Partnerships"}
              desc={
                "For organizations looking to make a broader impact, consider partnering with us."
              }
              alt={"Corporate Partnerships Icon"}
            />
            <What2Card
              icon="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/8c1498a31e5a8ec9eb8666174820f751cd98ca2f/what-2-card-5.svg?min=1"
              title={"Spread Awareness"}
              desc={
                "Share our updates, and impact on social media platforms and among your network of friends and family"
              }
              alt={"Spread Awareness Icon"}
            />
            <What2Card
              icon="https://gistcdn.githack.com/deji-dd/889eb07aaa9d5db137681044521b2ab1/raw/8c1498a31e5a8ec9eb8666174820f751cd98ca2f/what-2-card-6.svg?min=1"
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
