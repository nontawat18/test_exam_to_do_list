import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Quiz from "../Quiz";
import Main from "../views/mainPage";
const MainContent = () => {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Main />
        <Quiz />
      </div>
    </div>
  );
};

export default MainContent;
