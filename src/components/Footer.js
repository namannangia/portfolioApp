import React from "react";

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0,0,0,0.4)",
        color: "white",
        fontSize: "20px",
      }}
    >
      <div
        style={{
          flex: 1,
          padding: "10px",
          margin: "0px",
          textAlign: "center",
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
          paddingBottom: "12px",
        }}
      >
        Naman Nangia •{" "}
        <span style={{ fontVariant: "normal" }}>10-Oct-2023</span>
      </div>
    </div>
  );
}

export default Footer;
