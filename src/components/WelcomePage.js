import React from "react";
// import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
// import "./welcomePage.scss";

const WelcomePage = (props) => {
  const formattedName = props.username
    ? props.username.charAt(0).toUpperCase() + props.username.slice(1)
    : "Guest";

  // const navigate = useNavigate();

  return (
    <div>
      <Nav />
      <div className="bg">
        <h1 className="welcome-page-header">
          Hello dear {formattedName},<br /> <br />
          Welcome to WomanWorld
        </h1>
      </div>
    </div>
  );
};

export default WelcomePage;
