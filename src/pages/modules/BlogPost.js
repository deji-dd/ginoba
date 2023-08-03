export default function BlogPost(props) {
  return (
    <div
      style={{
        width: "32.1875rem",
        height: "10rem",
        display: "flex",
        gap: "1.69rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "12rem",
          height: "10rem",
          borderRadius: "1.25rem",
          background: `url(${props.img}), lightgray 50% / cover no-repeat`,
          flexShrink: 0,
        }}
      ></div>
      <div
        style={{
          display: "flex",
          gap: "0.56rem",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            color: "var(--primary-text, #1D2130)",
            fontFamily: "Roboto",
            fontSize: "1.25rem",
            fontWeight: "700",
            lineHeight: "1.875rem",
          }}
        >
          {props.title}
        </h3>
        <p
          style={{
            color: "var(--primary-text, #1D2130)",
            fontFamily: "Roboto",
            fontSize: "0.875rem",
            fontWeight: "700",
            lineHeight: "1.3125rem",
            opacity: "0.5",
          }}
        >
          {props.date}
        </p>
        <p
          style={{
            color: "var(--secondary-text, #525560)",
            fontFamily: "Roboto",
            fontSize: "1rem",
            fontWeight: "400",
            lineHeight: "1.6rem",
          }}
        >
          {props.desc}
        </p>
      </div>
    </div>
  );
}
