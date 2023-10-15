import React from "react";

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#526D82",
        color: "#27374d",
        fontWeight: "600",
        fontSize: "20px",
        marginTop: "10px",
      }}
    >
      <hr style={{ borderColor: "rgb(24, 61, 61)", width: "80vw" }} />
      <div
        style={{
          flex: 1,
          padding: "10px",
          margin: "0px",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        “To say that AI will start doing what it wants for its own purposes is
        like saying a calculator will start making its own calculations”
        <br /> — Oren Etzioni
      </div>
      <div
        style={{
          flex: 1,
          textAlign: "center",
          fontVariant: "small-caps",
          padding: "22px 0px",
        }}
      >
        Naman Nangia •{" "}
        <span style={{ fontVariant: "normal" }}>10-Oct-2023</span>
      </div>
    </div>
  );
}

export default Footer;
