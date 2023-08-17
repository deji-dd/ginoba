import DonationsPNG from "../../assets/mobile-donations.svg";
import { useState } from "react";

export default function MobileDonations() {
  let [selected, setSelected] = useState("20");
  const button_main = {
    display: "flex",
    width: "7.1724rem",
    height: "3.2276rem",
    padding: "0.78896rem 2.36688rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.71728rem",
    border: "0.897px solid #096A56",
    fontSize: "1.07584rem",
    fontWeight: "400",
    letterSpacing: "0.01072rem",
  };
  const button_style_false = {
    ...button_main,
    background: "transparent",
    color: "#2E4049",
  };
  const button_style_true = {
    ...button_main,
    background: "#096A56",
    color: "white",
  };

  function donation(string) {
    switch (string) {
      case "10":
        return "$10";
      case "20":
        return "$20";
      case "50":
        return "$50";
      case "100":
        return "$100";
      default:
        return "";
    }
  }

  return (
    <div
      style={{
        width: "30rem",
        height: "65rem",
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
          gap: "2.68rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "26.1076rem" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              border: "1.224px solid #096A56",
              backgroundColor: "#EAF0E8",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "26.1076rem",
                padding: "1.07992rem 0.64792rem",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.432rem",
                display: "flex",
                border: "1.224px solid #096A56",
                background: "white",
              }}
            >
              <p
                style={{
                  color: "#2E4049",
                  fontFamily: "Clash Display",
                  fontSize: "1.29104rem",
                  fontWeight: "500",
                  letterSpacing: "0.05168rem",
                }}
              >
                Choose an amount to donate
              </p>
            </div>
            <div
              style={{
                marginTop: "2.3rem",
                marginBottom: "2.09rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.08rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.86rem",
                  justifyContent: "center",
                }}
              >
                <div>
                  <button
                    style={
                      "10" === selected ? button_style_true : button_style_false
                    }
                    onClick={() => {
                      setSelected("10");
                    }}
                  >
                    $10
                  </button>
                </div>
                <div>
                  <button
                    style={
                      "20" === selected ? button_style_true : button_style_false
                    }
                    onClick={() => {
                      setSelected("20");
                    }}
                  >
                    $20
                  </button>
                </div>
                <div>
                  <button
                    style={
                      "50" === selected ? button_style_true : button_style_false
                    }
                    onClick={() => {
                      setSelected("50");
                    }}
                  >
                    $50
                  </button>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "0.86rem",
                  justifyContent: "center",
                }}
              >
                <div>
                  <button
                    style={
                      "100" === selected
                        ? button_style_true
                        : button_style_false
                    }
                    onClick={() => {
                      setSelected("100");
                    }}
                  >
                    $100
                  </button>
                </div>
                <div>
                  <button
                    style={
                      "other" === selected
                        ? { ...button_style_true, width: "15.2rem" }
                        : { ...button_style_false, width: "15.2rem" }
                    }
                    onClick={() => {
                      setSelected("other");
                    }}
                  >
                    Other amount
                  </button>
                </div>
              </div>
            </div>
            <button
              disabled="true"
              style={{
                display: "inline-flex",
                padding: "0.86072rem 9.32416rem",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.71728rem",
                background: "#096A56",
                color: "white",
                fontSize: "1.43448rem",
                fontWeight: "500",
                letterSpacing: "0.01432rem",
                border: "none",
              }}
            >
              Donate
            </button>
            <div
              style={{
                width: "26.1076rem",
                padding: "0.86072rem 0.57376rem",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.432rem",
                display: "flex",
                border: "1.827px solid #096A56",
                background: "white",
                marginTop: "2.4rem",
              }}
            >
              <p
                style={{
                  width: "23.66896rem",
                  flexShrink: "0",
                  color: "#2E4049",
                  textAlign: "center",
                  fontSize: "1.00416rem",
                  fontWeight: "400",
                }}
              >
                Your {donation(selected)} donation can provide a Nigerian meal
                month’s worth of meals
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.36rem",
            flexDirection: "column",
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
