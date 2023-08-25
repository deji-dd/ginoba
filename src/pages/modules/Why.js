import WhyCard from "./WhyCard";

export default function Why() {
  return (
    <div
      style={{
        width: "90rem",
        height: "46.875rem",
        flexShrink: 0,
        background: "#EAF0E8",
        padding: "4.75rem 8.44rem 4.81rem 8.44rem",
        marginBottom: "2.37rem",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "73.125rem",
          height: "37.3125rem",
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.625rem",
        }}
      >
        <div
          style={{
            width: "30.1rem",
            height: "5.6875rem",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              width: "10.3rem",
              height: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "0.62rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <hr
                style={{
                  width: "2.5rem",
                  height: "0.0625rem",
                  background: "#096A56",
                }}
              />
              <p
                style={{
                  color: "#096A56",
                  fontSize: "1rem",
                  fontWeight: "400",
                  lineHeight: "1.5rem",
                }}
              >
                Our why
              </p>
              <hr
                style={{
                  width: "2.5rem",
                  height: "0.0625rem",
                  color: "#096A56",
                }}
              />
            </div>
          </div>
          <div style={{ width: "100%", height: "3.6875rem" }}>
            <h1
              style={{
                color: "var(--black, #373737)",
                fontFamily: "Clash Display",
                fontSize: "2.5rem",
                fontWeight: "600",
                lineHeight: "3.66188rem",
                letterSpacing: "0.1rem",
              }}
            >
              Why we do what we do
            </h1>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "inline-flex",
            alignItems: "flex-start",
            gap: "1.875rem",
          }}
        >
          <WhyCard
            stat={"431 million + "}
            desc={"Africans are currently living in extreme poverty"}
          />

          <WhyCard
            stat={"244 million +"}
            desc={"African school kids are out of school"}
          />

          <WhyCard
            stat={"785 million +"}
            desc={"Africans cannot afford healthcare"}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "inline-flex",
            alignItems: "flex-start",
            gap: "1.875rem",
          }}
        >
          <WhyCard
            stat={"$40.6 billion+"}
            desc={
              "worth of foreign investments were diverted from Africa as a result of insecurity"
            }
          />

          <WhyCard
            stat={"140 million +"}
            desc={"Africans are at high risk of food insecurity"}
          />

          <WhyCard
            stat={"264.3 million +"}
            desc={"Africans are multidimensionally poor"}
          />
        </div>
      </div>
    </div>
  );
}
