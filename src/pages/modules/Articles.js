import BlogPost from "./BlogPost";
import Post1 from "../../assets/post-1.svg";

export default function Articles() {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        gap: "2rem",
        marginTop: "3.5rem",
        marginBottom: "10.94rem",
      }}
    >
      <h3
        style={{
          color: "var(--title-color, #22495F)",
          fontFamily: "Clash Display",
          fontSize: "2.4rem",
          fontWeight: "600",
          lineHeight: "3.36rem",
          paddingLeft: "2.2rem",
        }}
      >
        Other articles
      </h3>
      <div style={{ display: "flex", gap: "2.5rem" }}>
        <div
          style={{
            display: "inline-flex",
            flexShrink: "0",
            width: "37rem",
            height: "36rem",
            flexDirection: "column",
            gap: "1.5rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BlogPost
            img={Post1}
            title={"Autism care day"}
            date={"15th Nov 2022"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
            }
          />
          <BlogPost
            img={Post1}
            title={"Autism care day"}
            date={"15th Nov 2022"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
            }
          />
          <BlogPost
            img={Post1}
            title={"Autism care day"}
            date={"15th Nov 2022"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
            }
          />
        </div>
        <div
          style={{
            display: "inline-flex",
            flexShrink: "0",
            width: "37rem",
            height: "36rem",
            flexDirection: "column",
            gap: "1.5rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BlogPost
            img={Post1}
            title={"Autism care day"}
            date={"15th Nov 2022"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
            }
          />
          <BlogPost
            img={Post1}
            title={"Autism care day"}
            date={"15th Nov 2022"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
            }
          />
          <BlogPost
            img={Post1}
            title={"Autism care day"}
            date={"15th Nov 2022"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
            }
          />
        </div>
      </div>
    </div>
  );
}
