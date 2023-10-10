import React from "react";
import "../styles/content.css";
import Card from "./Card";
import * as icons from "react-icons/si";
import { FaBolt } from "react-icons/fa";

function Content() {
  const data = [
    {
      Type: "Project",
      Title: "ToDo App",
      Description: [
        "A React-based Todo app is a web application that enables users to efficiently manage and organize their tasks or to-do items. Built using the React JavaScript library, this app provides a dynamic and responsive user interface, enhancing the user's experience",
        "Users can create tasks by entering task descriptions and hitting an 'Add' or 'Submit' button, allowing for quick and effortless task entry.\n\n The app then displays the list of tasks, presenting each task's description and status, indicating whether it has been completed or not.",
        "Completed tasks may be visually distinguished from uncompleted ones, aiding users in tracking their progress",
      ],
      TechStack: [
        <icons.SiReact />,
        <icons.SiJavascript />,
        <icons.SiHtml5 />,
        <icons.SiCss3 />,
      ],
      SourceCode: "https://www.github.com/namannangia",
      AdditionalLinks: "",
    },
    {
      Type: "Project",
      Title: "ToDo App",
      Description: [
        "A React-based Todo app is a web application that enables users to efficiently manage and organize their tasks or to-do items. Built using the React JavaScript library, this app provides a dynamic and responsive user interface, enhancing the user's experience",
        "Users can create tasks by entering task descriptions and hitting an 'Add' or 'Submit' button, allowing for quick and effortless task entry.\n\n The app then displays the list of tasks, presenting each task's description and status, indicating whether it has been completed or not.",
        "Completed tasks may be visually distinguished from uncompleted ones, aiding users in tracking their progress",
      ],
      TechStack: [
        <icons.SiReact />,
        <icons.SiJavascript />,
        <icons.SiHtml5 />,
        <icons.SiCss3 />,
      ],
      SourceCode: "https://www.github.com/namannangia",
      AdditionalLinks: "",
    },
    {
      Type: "Project",
      Title: "ToDo App",
      Description: [
        "A React-based Todo app is a web application that enables users to efficiently manage and organize their tasks or to-do items. Built using the React JavaScript library, this app provides a dynamic and responsive user interface, enhancing the user's experience",
        "Users can create tasks by entering task descriptions and hitting an 'Add' or 'Submit' button, allowing for quick and effortless task entry.\n\n The app then displays the list of tasks, presenting each task's description and status, indicating whether it has been completed or not.",
        "Completed tasks may be visually distinguished from uncompleted ones, aiding users in tracking their progress",
      ],
      TechStack: [
        <icons.SiReact />,
        <icons.SiJavascript />,
        <icons.SiHtml5 />,
        <icons.SiCss3 />,
      ],
      SourceCode: "https://www.github.com/namannangia",
      AdditionalLinks: "",
    },
    {
      Type: "Internship",
      Title: "Glocali.se",
      Description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
      ],
      TechStack: [
        <icons.SiReact />,
        <icons.SiJavascript />,
        <icons.SiHtml5 />,
        <icons.SiCss3 />,
      ],
      SourceCode: "",
      AdditionalLinks: "",
    },
    {
      Type: "Certificate",
      Title: "IBM - Back-end apps with Node JS",
      Description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
      ],
      TechStack: [
        <icons.SiReact />,
        <icons.SiJavascript />,
        <icons.SiHtml5 />,
        <icons.SiCss3 />,
      ],
      SourceCode: "",
      AdditionalLinks: "",
    },
    {
      Type: "Certificate",
      Title: "Meta Advanced React",
      Description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
      ],
      TechStack: [
        <icons.SiReact />,
        <icons.SiJavascript />,
        <icons.SiHtml5 />,
        <icons.SiCss3 />,
      ],
      SourceCode: "",
      AdditionalLinks: "",
    },
    {
      Type: "Certificate",
      Title: "Developing Back-end apps with Node.JS",
      Description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
      ],
      TechStack: [
        <icons.SiReact />,
        <icons.SiJavascript />,
        <icons.SiHtml5 />,
        <icons.SiCss3 />,
      ],
      SourceCode: "",
      AdditionalLinks: "",
    },
  ];

  return (
    <div className="MainContainer">
      <h1 style={{ fontVariant: "small-caps", fontWeight: "300" }}>
        {/* Hello There! Long time no C++{" "} */}
        Yet again, Hello World{"    "}
        <span style={{ opacity: "0.4", color: "black", fontSize: "24px" }}>
          <FaBolt />
        </span>
      </h1>
      {/* <h3 style={{ textAlign: "center" }}>Projects :</h3> */}
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
