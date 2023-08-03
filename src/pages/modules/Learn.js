import Title from "./Title";

export default function Learn() {
  return (
    <div
      className="container-fluid px-0"
      style={{
        display: "inline-flex",
        padding: "0.5rem",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "9.84rem",
        marginTop: "3.38rem",
        marginBottom: "15.94rem",
        width: "90rem",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "flex-start",
          gap: "3.9rem",
          flexDirection: "column",
        }}
      >
        <Title title={"Learn about us"} />
        <h1
          style={{
            color: "#22495F",
            fontFamily: "Clash Display",
            fontSize: "3.36rem",
            fontWeight: "600",
            letterSpacing: "0.03363rem",
            width: "43.5rem",
            lineHeight: "4.032rem",
          }}
        >
          We are a non-governmental organization
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "0.8125rem",
          flexDirection: "column",
          marginTop: "2rem",
        }}
      >
        <h3
          style={{
            color: "#22495F",
            fontFamily: "Clash Display",
            fontSize: "1.2rem",
            fontWeight: "600",
            letterSpacing: "0.0625rem",
            width: "27.9rem",
            lineHeight: "1.8rem",
          }}
        >
          We are excited to have you join us in this journey of empowerment and
          progress.
        </h3>
        <p
          style={{
            color: "#22495F",
            fontSize: "1.25rem",
            fontWeight: "400",
            width: "27.9rem",
            lineHeight: "2rem",
          }}
        >
          At Ginoba, our journey began with a shared vision of building a
          brighter future for Africa. We firmly believe that by harnessing the
          collective power of knowledge, innovation, and collaboration, we can
          uplift lives and transform communities.
        </p>
      </div>
    </div>
  );
}
