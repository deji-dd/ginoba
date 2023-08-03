import AboutBG from "../../assets/about-bg.svg";

export default function About() {
  return (
    <div
      style={{
        display: "inline-flex",
        flexShrink: 0,
        flexDirection: "column",
        gap: "2.5rem",
        marginTop: "3.06rem",
        marginBottom: "5.46rem",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          flexShrink: 0,
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <h1
          style={{
            color: "var(--primary-text, #1D2130)",
            fontFamily: "Clash Display",
            fontSize: "3rem",
            fontWeight: "600",
            lineHeight: "3.6rem",
          }}
        >
          About
        </h1>
        <p
          style={{
            color: "var(--secondary-text, #525560)",
            fontSize: "1.25rem",
            fontWeight: "400",
            lineHeight: "2rem",
            width: "48rem",
          }}
        >
          Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
          in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
          tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
          accumsan et id ut est. Posuere molestie in turpis quam. Viverra at
          diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus
          aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A
          bibendum viverra eu cras.
        </p>
      </div>
      <div
        style={{
          flexShrink: 0,
          height: "21.5625rem",
          width: "48rem",
          borderRadius: "1.25rem",
          background: `url(${AboutBG}), lightgray 0px -272.137px / 100% 206.51% no-repeat`,
        }}
      />
      <p
        style={{
          color: "var(--secondary-text, #525560)",
          fontSize: "1.25rem",
          fontWeight: "400",
          lineHeight: "2rem",
          width: "48rem",
        }}
      >
        Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in
        lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt
        scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut
        est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut
        quisque. In sollicitudin sapien, vel nulla quisque vitae.{" "}
      </p>
    </div>
  );
}
