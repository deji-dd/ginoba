import bg from "../../assets/bg.png";

export default function Empower() {
  return (
    <div
      className="container-fluid"
      style={{
        width: "100%",
        height: "50.3125rem",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(${bg}), lightgray 50% / cover no-repeat`,
        boxShadow:
          "0px 3.2333767414093018px 3.2333767414093018px 0px rgba(0, 0, 0, 0.25)",
      }}
    ></div>
  );
}
