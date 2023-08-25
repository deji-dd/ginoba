import DonationsPNG from "../../assets/mobile-donations.svg";

export default function MobileDonations() {
  return (
    <div
      style={{
        width: "30rem",
        height: "76rem",
        backgroundImage: `url(${DonationsPNG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingBottom: "0",
        paddingTop: "14.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "30rem",
            height: "41.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <iframe
            src="https://donorbox.org/embed/empowering-africa?default_interval=o&hide_donation_meter=true"
            name="donorbox"
            title="Donation"
            allowpaymentrequest="allowpaymentrequest"
            seamless="seamless"
            frameborder="0"
            width="425px"
          ></iframe>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.36rem",
            flexDirection: "column",
            backgroundColor: "#EAF0E8",
            width: "30rem",
            height: "20rem",
          }}
        >
          <h1
            style={{
              width: "27.2rem",
              color: "#2E4049",
              fontFamily: "Clash Display",
              fontSize: "1.76rem",
              fontWeight: "600",
              letterSpacing: "0.0704rem",
              textAlign: "center",
            }}
          >
            Your <span style={{ color: "#096A56" }}>donations</span> will help
            us build a better Africa
          </h1>
          <p
            style={{
              width: "26.48rem",
              color: "#2E4049",
              fontSize: "0.96rem",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            Join us in creating a brighter future for Africa. Together, we can
            make a difference. Your support will help build a better Africa
            where opportunities abound, and hope flourishes.
            <br />
            <br />
            Our mission is centred on empowering communities and transforming
            lives. From providing essential education and healthcare to
            fostering skill development.
          </p>
        </div>
      </div>
    </div>
  );
}
