export default function Error() {
  return (
    <div
      style={{
        width: "90rem",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h1
        style={{
          color: "#22495F",
          fontFamily: "Clash Display",
          fontSize: "5rem",
          fontWeight: "600",
          lineHeight: "4.2rem",
          letterSpacing: "0.035rem",
        }}
      >
        404
      </h1>
      <p
        style={{
          color: "#22495F",
          fontSize: "1.25rem",
          fontWeight: "400",
          lineHeight: "2rem",
        }}
      >
        The page you're looking for doesn't exist.
      </p>
      <a href="#/ginoba">
        <button
          type="button"
          style={{
            width: "16rem",
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
          Go Home
        </button>
      </a>
    </div>
  );
}
