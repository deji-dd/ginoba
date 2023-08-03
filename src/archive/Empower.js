import bg from "../../assets/bg.png";
import { useState } from "react";

export default function Empower() {
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
      className="container-fluid"
      style={{
        width: "90rem",
        height: "50.3125rem",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(${bg}), lightgray 50% / cover no-repeat`,
        boxShadow:
          "0px 3.2333767414093018px 3.2333767414093018px 0px rgba(0, 0, 0, 0.25)",
        flexShrink: "0",
        display: "inline-flex",
        alignItems: "center",
        padding: "6.87rem 4.47rem 14.31rem 4.37rem",
      }}
    >
      <div
        style={{
          width: "81.2rem",
          height: "29.1rem",
          display: "inline-flex",
          alignItems: "flex-start",
          gap: "5.875rem",
        }}
      >
        <div
          style={{
            width: "44.8rem",
            height: "20.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "2.375rem",
          }}
        >
          <h1
            style={{
              color: "white",
              fontFamily: "Clash Display",
              fontSize: "4rem",
              fontWeight: "600",
              letterSpacing: "0.16rem",
            }}
          >
            Empowering <span style={{ color: "#C6E2BC" }}>Nigeria</span> One
            Step at a Time
          </h1>
          <p
            style={{
              color: "white",
              fontFamily: "Work Sans",
              fontSize: "1.75rem",
              fontWeight: "500",
              width: "40.8125rem",
            }}
          >
            Together, let's empower the next generation of leaders, innovators,
            and change-makers in Nigeria through education, skill development,
            and improved healthcare.
          </p>
        </div>
        <div style={{ width: "30.46406rem", height: "29.125rem" }}>
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
                className="my-0"
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
                      "10" === selected ? button_style_true : button_style_false
                    }
                    class="btn"
                    for="10"
                  >
                    <input
                      type="radio"
                      class="btn-check"
                      checked={"10" === selected}
                      id="10"
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
                      "20" === selected ? button_style_true : button_style_false
                    }
                    class="btn"
                    for="20"
                  >
                    <input
                      type="radio"
                      class="btn-check"
                      checked={"20" === selected}
                      id="20"
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
                      "50" === selected ? button_style_true : button_style_false
                    }
                    class="btn"
                    for="50"
                  >
                    <input
                      type="radio"
                      class="btn-check"
                      checked={"50" === selected}
                      id="50"
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
                    for="100"
                  >
                    <input
                      type="radio"
                      class="btn-check"
                      checked={"100" === selected}
                      id="100"
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
                    for="other"
                  >
                    <input
                      type="radio"
                      class="btn-check"
                      checked={"other" === selected}
                      id="other"
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
  );
}
