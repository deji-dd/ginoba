import DonationsPNG from "../../assets/donations.svg";
import { useState } from "react";

export default function Donations() {
  let [selected, setSelected] = useState("20");
  const button_main = {
    display: "flex",
    width: "8.5rem",
    height: "4.12175rem",
    padding: "1.00756rem 3.02263rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.91594rem",
    border: "1.466px solid #096A56",
    fontSize: "1.37394rem",
    fontWeight: "400",
    letterSpacing: "0.01375rem",
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
          padding: "5.9375rem 6.472rem 9.0625rem 6.3125rem",
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
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1.827px solid #096A56",
                backgroundColor: "#EAF0E8",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "4.39525rem",
                  padding: "1.26013rem 0.75606rem",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.50406rem",
                  display: "flex",
                  border: "1.827px solid #096A56",
                  background: "white",
                }}
              >
                <p
                  style={{
                    color: "#2E4049",
                    fontFamily: "Clash Display",
                    fontSize: "1.50644rem",
                    fontWeight: "500",
                    letterSpacing: "0.06025rem",
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
                  gap: "1.26rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <button
                      style={
                        "10" === selected
                          ? button_style_true
                          : button_style_false
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
                        "20" === selected
                          ? button_style_true
                          : button_style_false
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
                        "50" === selected
                          ? button_style_true
                          : button_style_false
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
                    gap: "1.1rem",
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
                          ? { ...button_style_true, width: "18.1rem" }
                          : { ...button_style_false, width: "18.1rem" }
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
              <div
                style={{
                  width: "27.7rem",
                  height: "3.94612",
                }}
              >
                <button
                  type="button"
                  disabled={true}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "inline-flex",
                    padding: "1.00431rem 10.88rem",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.83694rem",
                    background: "#096A56",
                    color: "white",
                    fontSize: "1.67388rem",
                    fontWeight: "500",
                    letterSpacing: "0.01675rem",
                  }}
                >
                  Donate
                </button>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "4.39525rem",
                  padding: "0.3rem 1.2rem",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.50406rem",
                  display: "flex",
                  border: "1.827px solid #096A56",
                  background: "white",
                  marginTop: "2.4rem",
                }}
              >
                <p
                  style={{
                    width: "27.61856rem",
                    flexShrink: "0",
                    color: "#2E4049",
                    textAlign: "center",
                    fontSize: "1.17169rem",
                    fontWeight: "400",
                  }}
                >
                  Your {donation(selected)} donation can provide a Nigerian meal
                  month’s worth of meals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
