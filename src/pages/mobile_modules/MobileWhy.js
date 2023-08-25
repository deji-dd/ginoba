import MobileWhyCard from "./MobileWhyCard";

export default function MobileWhy() {
  return (
    <div
      style={{
        width: "30rem",
        height: "64.75rem",
        flexShrink: 0,
        background: "#EAF0E8",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1.25rem",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0.375rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <hr
            style={{
              width: "1.92rem",
              height: "0.0375rem",
              color: "#096A56",
            }}
          />
          <p
            style={{
              color: "#096A56",
              fontSize: "0.96rem",
              fontWeight: "400",
              lineHeight: "0.9rem",
            }}
          >
            Our why
          </p>
          <hr
            style={{
              width: "1.92rem",
              height: "0.0375rem",
              color: "#096A56",
            }}
          />
        </div>
        <h1
          style={{
            color: "var(--black, #373737)",
            fontFamily: "Clash Display",
            fontSize: "2.08rem",
            fontWeight: "600",
            lineHeight: "2.81232rem",
            letterSpacing: "0.0832rem",
          }}
        >
          Why we do what we do
        </h1>
      </div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.75rem",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <MobileWhyCard
          stat={"431 million + "}
          desc={"Africans are currently living in extreme poverty"}
        />

        <MobileWhyCard
          stat={"244 million +"}
          desc={"African school kids are out of school"}
        />

        <MobileWhyCard
          stat={"785 million +"}
          desc={"Africans cannot afford healthcare"}
        />
        <MobileWhyCard
          stat={"$40.6 billion+"}
          desc={
            "worth of foreign investments were diverted from Africa as a result of insecurity"
          }
        />

        <MobileWhyCard
          stat={"140 million +"}
          desc={"Africans are at high risk of food insecurity"}
        />

        <MobileWhyCard
          stat={"264.3 million +"}
          desc={"Africans are multidimensionally poor"}
        />
      </div>
    </div>
  );
}
