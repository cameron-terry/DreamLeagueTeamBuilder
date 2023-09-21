import React from "react";
import TeamScreen from "./TeamScreen";
import FormationChooser from "./FormationChooser";
import "./TeamBuild.css";

function TeamBuild() {
  const [selectedFormation, setSelectedFormation] = React.useState("4-4-2"); // default formation

  return (
    <div className="teamBuildContainer">
      <TeamScreen formation={selectedFormation} />
      <FormationChooser onFormationChange={setSelectedFormation} />
    </div>
  );
}

export default TeamBuild;
