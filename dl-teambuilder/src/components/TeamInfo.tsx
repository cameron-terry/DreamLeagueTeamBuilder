import React from "react";
import BasicStats from "./BasicStats";
import AdvancedStats from "./AdvancedStats";
import "./TeamInfo.css";

function TeamInfo() {
  return (
    <div className="teamInfoContainer">
      <BasicStats />
      <AdvancedStats />
    </div>
  );
}

export default TeamInfo;
