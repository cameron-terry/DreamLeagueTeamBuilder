import React from "react";
import "./App.css";
import TeamBuild from "./components/TeamBuild";
import TeamInfo from "./components/TeamInfo";

function App() {
  return (
    <div className="mainContainer">
      <div className="teamBuild">
        <TeamBuild />
      </div>
      <div className="teamInfo">
        <TeamInfo />
      </div>
    </div>
  );
}

export default App;
