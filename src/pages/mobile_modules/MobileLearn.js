import LearnBG from "../../assets/mobile-learn-bg.svg";

export default function MobileLearn() {
  return (
    <div
      style={{
        display: "inline-flex",
        padding: "1.28rem 1.28rem 1.76rem 1.2rem",
        alignItems: "center",
        width: "30rem",
        flexDirection: "column",
        background: "#EAF0E8",
        marginTop: "5rem",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "1.5rem",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.64rem",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.48rem",
            }}
          >
            <hr
              style={{
                width: "1.92rem",
                height: "0.048rem",
                color: "#096A56",
                zIndex: 0,
              }}
            />
            <p>Learn about us</p>
            <hr
              style={{
                width: "1.92rem",
                height: "0.048rem",
                color: "#096A56",
                zIndex: 0,
              }}
            />
          </div>
          <h1
            style={{
              color: "#22495F",
              fontFamily: "Clash Display",
              fontSize: "1.76rem",
              fontWeight: "600",
              letterSpacing: "0.0704rem",
              width: "27.84rem",
              lineHeight: "2.81232rem",
            }}
          >
            We are a non-governmental organization
          </h1>
        </div>
        <img alt="Background" src={LearnBG} width={"100%"} />
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.04rem",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              color: "#22495F",
              fontFamily: "Clash Display",
              fontSize: "1.28rem",
              fontWeight: "600",
              letterSpacing: "0.04rem",
              width: "28.16rem",
              lineHeight: "1.92rem",
            }}
          >
            We are excited to have you join us in this journey of empowerment
            and progress.
          </h3>
          <p
            style={{
              color: "#22495F",
              fontSize: "1.2rem",
              fontWeight: "400",
              width: "27.2rem",
              lineHeight: "1.974rem",
            }}
          >
            At Ginoba, our journey began with a shared vision of building a
            brighter future for Africa. We firmly believe that by harnessing the
            collective power of knowledge, innovation, and collaboration, we can
            uplift lives and transform communities.
          </p>
        </div>
      </div>
    </div>
  );
}
