import React from "react";
import { FaBolt } from "react-icons/fa";

function Mvp() {
  const slogans = [
    "Life is too short to remove USB safely ",
    "Code is poetry in motion ",
    "Sudo make me a sandwich ",
    "Yet again, Hello World ",
    "Will code for coffee ",
    "Long time, no C ",
    "Ctrl+Alt+Defeat ",
    "Code blooded developer ",
    "Real programmers count from 0 ",
    "Error: Password is too strong ",
    "I came, I saw, I coded ",
  ];
  const [currentSlogan, setSlogan] = React.useState(slogans[0]);
  const delay = 5000;

  function typeIt(slogan) {
    slogan.split("").map((letter) => {
      setTimeout(() => {
        setSlogan((e) => e.concat(letter.toString()));
      }, delay);
    });
  }
  function deleteIt() {
    currentSlogan.split("").map(() => {
      setTimeout(() => {
        setSlogan((e) => e.substring(0, e.length - 1));
      }, delay);
    });
  }
  React.useEffect(() => {
    deleteIt();
  });
  return (
    <h1
      style={{
        fontVariant: "small-caps",
        fontWeight: "300",
        marginTop: "4px",
      }}
    >
      {/* Hello There! Long time no C++{" "} */}
      {/* Yet again, Hello World{"    "} */}
      {currentSlogan}
      <span style={{ opacity: "0.8", color: "white", fontSize: "24px" }}>
        <FaBolt />
      </span>
    </h1>
  );
}

export default Mvp;
