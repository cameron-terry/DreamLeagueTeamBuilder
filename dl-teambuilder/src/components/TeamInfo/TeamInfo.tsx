import React from "react";
import BasicStats from "./BasicStats/BasicStats";
import AdvancedStats from "./AdvancedStats/AdvancedStats";
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
