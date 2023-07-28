import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  let [link_style] = useState({
    color: "#2E4049",
    fontSize: "1.125rem",
    fontWeight: "400",
    textDecoration: "none",
  });

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "5.4375rem",
        padding: "0.5rem 4.38rem",
      }}
    >
      <div className="row justify-content-between" style={{ height: "100%" }}>
        <div
          className="col col-2"
          style={{ marginTop: "0.625rem", width: "12rem" }}
        >
          <Link
            to={"/home"}
            style={{
              color: "#2E4049",
              fontFamily: "Clash Display",
              fontSize: "2.1875rem",
              textDecoration: "none",
              fontWeight: "500",
              letterSpacing: "0.0875rem",
            }}
          >
            <Logo
              style={{
                width: "1.3125rem",
                height: "2.75rem",
                marginRight: "0.5rem",
              }}
            />
            Ginoba
          </Link>
        </div>
        <div
          className="col col-5"
          style={{ marginTop: "1.25rem", width: "33rem" }}
        >
          <Link to={"/home"} style={link_style}>
            Home
          </Link>
          <Link
            to={"/get-involved"}
            style={{
              ...link_style,
              marginLeft: "2.94rem",
              marginRight: "2.94rem",
            }}
          >
            Get involved
          </Link>
          <Link
            to={"/what-we-do"}
            style={{
              ...link_style,
              marginRight: "2.94rem",
            }}
          >
            What we do
          </Link>
          <Link to={"/contact"} style={link_style}>
            Contact us
          </Link>
        </div>
        <div className="col col-2" style={{ width: "14.7rem" }}>
          <button
            type="button"
            class="btn"
            style={{
              width: "13.125rem",
              height: "3.6875",
              backgroundColor: "#096A56",
              padding: "1rem 4.375rem",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.625rem",
              fontFamily: "Manrope",
              fontSize: "1.25rem",
              fontWeight: "600",
            }}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}
