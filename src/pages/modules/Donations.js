import DonationsPNG from "../../assets/donations.svg";

export default function Donations() {
  return (
    <div
      style={{
        width: "90rem",
        height: "62.9rem",
        backgroundImage: `url(${DonationsPNG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingBottom: "0",
        paddingTop: "16.025rem",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "46.875rem",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem 6.472rem 9.0625rem 6.3125rem",
        }}
      >
        <div
          style={{
            width: "77.21552rem",
            height: "31.875rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "3.9375rem",
          }}
        >
          <div
            style={{
              width: "39.9rem",
              height: "100%",
              marginRight: "3.94rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "2rem",
            }}
          >
            <h1
              style={{
                width: "39.9375rem",
                color: "#2E4049",
                fontFamily: "Clash Display",
                fontSize: "2.5rem",
                fontWeight: "600",
                letterSpacing: "0.1rem",
              }}
            >
              Your <span style={{ color: "#096A56" }}>donations</span> will help
              us build a better Africa
            </h1>
            <p
              style={{
                width: "36.0625rem",
                color: "#2E4049",
                fontSize: "1.5rem",
                fontWeight: "400",
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
          <div style={{ width: "33.3405rem", height: "29.875rem" }}>
            <iframe
              src="https://donorbox.org/embed/empowering-africa?default_interval=o&hide_donation_meter=true"
              name="donorbox"
              allowpaymentrequest="allowpaymentrequest"
              seamless="seamless"
              title="Donation"
              frameborder="0"
              width="100%"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
