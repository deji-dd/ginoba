import transformPic from "../../assets/transform-pic.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Transform() {
  const icon_div_style = { marginRight: "0.88rem", marginTop: "0.5rem" };
  const icon_style = {
    width: "1.6875rem",
    height: "1.6875rem",
    flexShrink: 0,
    color: "#EAF0E8",
  };
  const text_style = {
    fontSize: "1.25rem",
    color: "#727272",
    fontWeight: "500",
    lineHeight: "2.6875rem",
  };

  return (
    <div
      className="container-fluid"
      style={{
        padding: "6.4rem 8.2rem 6.04rem 4.25rem",
        width: "90rem",
        height: "46rem",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "77.54955rem",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: "12.125rem",
        }}
      >
        <div
          style={{
            width: "31.9rem",
            fill: `url(${transformPic}), lightgray 50% / cover no-repeat`,
            filter:
              "drop-shadow(0px 2.7816996574401855px 2.7816996574401855px rgba(0, 0, 0, 0.25))",
          }}
        >
          <img
            src={transformPic}
            width={"100%"}
            style={{ transform: "rotate(-0.66deg)", flexShrink: 0 }}
          ></img>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "6.1875rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <h1
              style={{
                width: "39.9375rem",
                color: "#2E4049",
                fontFamily: "Clash Display",
                fontSize: "2rem",
                fontWeight: "600",
                letterSpacing: "0.08rem",
              }}
            >
              Transforming Communities: Empowering Africans with Education,
              Skills, and Health Support
            </h1>
            <p
              style={{
                width: "39rem",
                color: "#2E4049",
                fontSize: "1.5rem",
                fontWeight: "400",
              }}
            >
              Together, we can transform communities across Nigeria, empowering
              individuals with education, valuable skills, and vital health
              resources.
            </p>
          </div>

          <div
            style={{
              width: "29.3125rem",
              marginLeft: "0.625rem",
              display: "flex",
              alignItems: "center",
              gap: "1.375rem",
            }}
          >
            <div style={{ width: "13.96625rem", marginRight: "1.38rem" }}>
              <div className="row">
                <div className="col-1 px-0" style={icon_div_style}>
                  <CheckCircleIcon style={icon_style} />
                </div>
                <div className="col-11 px-0" style={{ width: "10.3125rem" }}>
                  <h3 style={text_style}>Food Donation</h3>
                </div>
              </div>
              <div
                className="row"
                style={{ marginTop: "1.12rem", marginBottom: "1.12rem" }}
              >
                <div
                  className="col-1 px-0"
                  style={{
                    ...icon_div_style,
                  }}
                >
                  <CheckCircleIcon style={icon_style} />
                </div>
                <div className="col-11 px-0" style={{ width: "10.3125rem" }}>
                  <h3 style={text_style}>Money Donation</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-1 px-0" style={icon_div_style}>
                  <CheckCircleIcon style={icon_style} />
                </div>
                <div className="col-11 px-0" style={{ width: "10.3125rem" }}>
                  <h3 style={text_style}>Dress Donation</h3>
                </div>
              </div>
            </div>
            <div className="col col-6 px-0" style={{ width: "13.96625rem" }}>
              <div className="row">
                <div className="col-1 px-0" style={icon_div_style}>
                  <CheckCircleIcon style={icon_style} />
                </div>
                <div className="col-11 px-0" style={{ width: "10.3125rem" }}>
                  <h3 style={text_style}>Water Supply</h3>
                </div>
              </div>
              <div
                className="row"
                style={{ marginTop: "1.12rem", marginBottom: "1.12rem" }}
              >
                <div className="col-1 px-0" style={icon_div_style}>
                  <CheckCircleIcon style={icon_style} />
                </div>
                <div className="col-11 px-0" style={{ width: "13rem" }}>
                  <h3 style={text_style}>Education Donation</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-1 px-0" style={icon_div_style}>
                  <CheckCircleIcon style={icon_style} />
                </div>
                <div className="col-11 px-0" style={{ width: "10.3125rem" }}>
                  <h3 style={text_style}>Toys Donation</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
