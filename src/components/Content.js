import React from "react";
import "../styles/content.css";
import Card from "./Card";
import { FaBolt } from "react-icons/fa";
import data from "../data/projects";
import Mvp from "./Mvp";

function Content() {
  return (
    <div className="MainContainer">
      <Mvp />
      <h3
        style={{
          textAlign: "center",
          fontWeight: "400",
          marginTop: "40px",
          marginBottom: "4px",
        }}
      >
        Accomplishments :
      </h3>
      <div className="Container">
        {data.map((value, key) => {
          return <Card key={key} data={value} />;
        })}
      </div>
    </div>
  );
}

// Export the component to make it available for use in other parts of your application
export default Content;
