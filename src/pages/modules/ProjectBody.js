import Title from "./Title";
import ProjectBG from "../../assets/project-bg.svg";

export default function ProjectBody() {
  return (
    <div
      style={{
        width: "60rem",
        display: "inline-flex",
        gap: "2.18rem",
        flexShrink: 0,
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "3.81rem",
        marginBottom: "2.44rem",
      }}
    >
      <Title title={"Our project"} />
      <div
        style={{
          display: "inline-flex",
          gap: "2.5rem",
          flexShrink: 0,
          alignItems: "flex-start",
          flexDirection: "column",
          paddingLeft: "3.4rem",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            gap: "2.15rem",
            flexShrink: 0,
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              width: "55.88731rem",
              color: "var(--primary-text, #1D2130)",
              fontFamily: "Clash Display",
              fontSize: "3.76163rem",
              fontWeight: "600",
              lineHeight: "4.514rem",
            }}
          >
            Mission Smile 1k: Outdoor charity outreach
          </h1>
          <p
            style={{
              width: "55.88731rem",
              color: "var(--secondary-text, #525560)",
              fontSize: "1.25rem",
              fontWeight: "400",
              lineHeight: "2rem",
            }}
          >
            Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
            in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
            tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
            accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque
            in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
            vitae. Scelerisque eget accumsan, non in. Posuere magna erat
            bibendum amet, nisi eu id. Viverra at diam nunc non ornare. Sed
            ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus
            dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras..
            Consectetur feugiat quis hac enim nullam in enim. Tellus nisi
            dapibus libero rutrum vitae nisl, cursus in sed. Egestas mi
            ultricies et consectetur vel non. Augue enim enim, eget ut sit
            purus, justo nisl pharetra. Tincidunt leo aenean dui, varius metus,
            vel. Maecenas eu rhoncus, est nunc nisi volutpat, amet venenatis
            faucibus.
          </p>
        </div>
        <div
          style={{
            width: "55.88731rem",
            height: "21.49513rem",
            flexShrink: "0",
            borderRadius: "1rem",
            background: `url(${ProjectBG}), lightgray 50% / cover no-repeat`,
          }}
        ></div>
        <div
          style={{
            display: "inline-flex",
            gap: "1.5rem",
            flexShrink: 0,
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              width: "55.88731rem",
              color: "var(--primary-text, #1D2130)",
              fontFamily: "Clash Display",
              fontSize: "3.22425rem",
              fontWeight: "600",
              lineHeight: "3.86913rem",
            }}
          >
            Another subheading
          </h1>
          <p
            style={{
              width: "55.88731rem",
              color: "var(--secondary-text, #525560)",
              fontSize: "1.25rem",
              fontWeight: "400",
              lineHeight: "2rem",
            }}
          >
            Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi
            at sit convallis blandit blandit in. Maecenas odio orci lectus urna
            ante consequat erat non morbi. Rhoncus ullamcorper dictum sit non
            semper sit tellus adipiscing. Est sapien rhoncus sit vestibulum
            sollicitudin. Tellus urna malesuada eu id tempus lorem. Est aliquam
            sem bibendum felis interdum pharetra. Diam fermentum in lectus morbi
            at eget sit et quisque. Semper commodo viverra donec magna egestas
            nibh
          </p>
          <ul
            style={{
              width: "55.88731rem",
              color: "var(--primary-text, #1D2130",
              fontSize: "1.25rem",
              fontWeight: "700",
              lineHeight: "2rem",
            }}
          >
            <li>Posuere sed pulvinar enim faucibus justo, cursus.</li>
            <li>In diam facilisi at sit convallis blandit blandit in.</li>
            <li>
              Maecenas odio orci lectus urna ante consequat erat non morbi.
            </li>
          </ul>
          <p
            style={{
              width: "55.88731rem",
              color: "var(--secondary-text, #525560)",
              fontSize: "1.25rem",
              fontWeight: "400",
              lineHeight: "2rem",
            }}
          >
            Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi
            at sit convallis blandit blandit in. Maecenas odio orci lectus urna
            ante consequat erat non morbi.
          </p>
        </div>
      </div>
    </div>
  );
}
