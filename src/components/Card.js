import React from "react";
import * as Fontazz from "react-icons/si";
import "../styles/card.css";

function Card(props) {
  const { Type, Title, Description, TechStack, SourceCode, AdditionalLinks } =
    props.data;

  return (
    <div className="OuterDiv">
      <h3
        style={{
          backgroundColor: "rgba(0,0,0,0.4)",
          width: "30%",
          borderRadius: "0px 10px 10px 0px",
          paddingLeft: "10px",
          color: "white",
        }}
      >
        {Type}
      </h3>
      <div className="InnerDiv">
        <h1 style={{ flex: 1, margin: "0px" }}>{Title}</h1>
        <div style={{ flex: 1, margin: "0px" }}>
          <h4>Tech Stack:</h4>
          <div
            style={{
              display: "flex",
              flex: 1,
              margin: "0px",
              marginBottom: "10px",
            }}
          >
            {TechStack.map((data, key) => {
              return (
                <div
                  style={{
                    flex: 1,
                    fontSize: "30px",
                    display: "flex",
                    justifyContent: "center",
                    margin: "0px",
                  }}
                  key={key}
                >
                  {data}
                </div>
              );
            })}
          </div>
        </div>
        <ul style={{ flex: 4, overflowY: "auto", border: "0px solid black" }}>
          {Description.map((data, key) => {
            return <li key={key}>{data}</li>;
          })}
        </ul>
        <footer style={{ display: "flex", flex: 1, paddingTop: "10px" }}>
          <a style={{ flex: 1 }} href={SourceCode}>
            Source Code
          </a>

          <a style={{ flex: 1 }} c4 href={AdditionalLinks}>
            Additional Links
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Card;
