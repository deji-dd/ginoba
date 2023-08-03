import DonationsPNG from "../../assets/donations.svg";
import { useState } from "react";

export default function Donations() {
  let [selected, setSelected] = useState("20");
  const button_main = {
    display: "flex",
    width: "8.36925",
    height: "3.76619rem",
    padding: "0.92063rem 2.76188rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.83694rem",
    border: "1.339px solid #096A56",
    borderRadius: 0,
    fontSize: "1.25538rem",
    fontWeight: "400",
    letterSpacing: "0.01256rem",
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
      className="container-fluid px-0"
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
        className="container-fluid px-0"
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
              className="my-0"
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
          <div style={{ width: "33.3405rem", height: "29.125rem" }}>
            <div
              className="container-fluid px-0"
              style={{
                width: "100%",
                height: "100%",
                border: "1.827px solid #096A56",
                backgroundColor: "#EAF0E8",
              }}
            >
              <div
                className="container-fluid"
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
                  className="m-0"
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
                className="container-fluid mx-auto px-0"
                style={{
                  width: "27.9rem",
                  height: "8.78771rem",
                  marginTop: "2.3rem",
                  marginBottom: "2.09rem",
                }}
              >
                <div className="row" style={{ marginBottom: "1.26rem" }}>
                  <div className="col-4">
                    <label
                      style={
                        "10" === selected
                          ? button_style_true
                          : button_style_false
                      }
                      class="btn"
                      for="2_10"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        checked={"10" === selected}
                        id="2_10"
                        autocomplete="off"
                        onClick={() => {
                          setSelected("10");
                        }}
                      />
                      $10
                    </label>
                  </div>
                  <div className="col-4">
                    <label
                      style={
                        "20" === selected
                          ? button_style_true
                          : button_style_false
                      }
                      class="btn"
                      for="2_20"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        checked={"20" === selected}
                        id="2_20"
                        autocomplete="off"
                        onClick={() => {
                          setSelected("20");
                        }}
                      />
                      $20
                    </label>
                  </div>
                  <div className="col-4">
                    <label
                      style={
                        "50" === selected
                          ? button_style_true
                          : button_style_false
                      }
                      class="btn"
                      for="2_50"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        checked={"50" === selected}
                        id="2_50"
                        autocomplete="off"
                        onClick={() => {
                          setSelected("50");
                        }}
                      />
                      $50
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <label
                      style={
                        "100" === selected
                          ? button_style_true
                          : button_style_false
                      }
                      class="btn"
                      for="2_100"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        checked={"100" === selected}
                        id="2_100"
                        autocomplete="off"
                        onClick={() => {
                          setSelected("100");
                        }}
                      />
                      $100
                    </label>
                  </div>
                  <div className="col-8">
                    <label
                      style={
                        "other" === selected
                          ? button_style_true
                          : button_style_false
                      }
                      class="btn"
                      for="2_other"
                    >
                      <input
                        type="radio"
                        class="btn-check"
                        checked={"other" === selected}
                        id="2_other"
                        autocomplete="off"
                        onClick={() => {
                          setSelected("other");
                        }}
                      />
                      Other amount
                    </label>
                  </div>
                </div>
              </div>
              <div
                className="container-fluid px-0 mx-auto"
                style={{
                  width: "27.69756rem",
                  height: "3.94612",
                }}
              >
                <button
                  type="button"
                  class="btn mx-auto"
                  disabled="true"
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
                className="container-fluid"
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
                  className="m-0"
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
