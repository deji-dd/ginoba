import BlogPost from "./BlogPost";
import Title from "./Title";
import Post1 from "../../assets/post-1.svg";
import Post2 from "../../assets/post-2.svg";
import Post3 from "../../assets/post-3.svg";

export default function News() {
  return (
    <div
      style={{
        width: "90rem",
        height: "48rem",
        background: "#EAF0E8",
        display: "inline-flex",
        flexShrink: "0",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          flexShrink: "0",
          gap: "6.75rem",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            flexShrink: "0",
            gap: "2rem",
            flexDirection: "column",
          }}
        >
          <Title title={"top news"} />
          <div
            style={{
              display: "inline-flex",
              flexShrink: "0",
              gap: "2.5rem",
              flexDirection: "column",
              paddingLeft: "4.13rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                flexShrink: "0",
                gap: "1.5rem",
                flexDirection: "column",
              }}
            >
              <h1
                style={{
                  width: "32.4375rem",
                  color: "var(--primary-text, #1D2130)",
                  fontFamily: "Clash Display",
                  fontSize: "3.5rem",
                  fontWeight: "600",
                  lineHeight: "4.2rem",
                }}
              >
                Our goal is to provide inclusive care for children with special
                needs
              </h1>
              <p
                style={{
                  width: "31rem",
                  color: "var(--secondary-text, #525560)",
                  fontSize: "1.25rem",
                  fontWeight: "400",
                  lineHeight: "2rem",
                }}
              >
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                Nunc ut sem vitae risus tristique posuere.
              </p>
            </div>
            <button
              type="button"
              disabled="true"
              style={{
                width: "18.1875rem",
                height: "100%",
                background: "#096A56",
                padding: "1rem 4.375rem",
                color: "white",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.625rem",
                fontFamily: "Manrope",
                fontSize: "1.25rem",
                fontWeight: "600",
                display: "flex",
                borderRadius: "0.125rem",
                border: "1px solid #096A56",
              }}
            >
              Read more
            </button>
          </div>
        </div>
        <div
          style={{
            display: "inline-flex",
            flexShrink: "0",
            alignItems: "center",
            justifyContent: "center",
            width: "37rem",
            height: "36rem",
            borderRadius: "1.25rem",
            background: "#FFF",
          }}
        >
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
              img={Post2}
              title={"Down syndrome outreach"}
              date={"15th Nov 2022"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
              }
            />
            <BlogPost
              img={Post3}
              title={"Caring for children with cerebral palsy"}
              date={"15th Nov 2022"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
