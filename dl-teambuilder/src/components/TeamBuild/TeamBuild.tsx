import React from "react";
import TeamScreen from "./TeamScreen/TeamScreen";
import FormationChooser from "./FormationChooser/FormationChooser";
import "./TeamBuild.css";

import { FORMATIONS } from "../constants";

function TeamBuild() {
  const [selectedFormation, setSelectedFormation] = React.useState(
    FORMATIONS[0]
  );

  return (
    <div className="teamBuildContainer">
      <TeamScreen formation={selectedFormation} />
      <FormationChooser onFormationChange={setSelectedFormation} />
    </div>
  );
}

export default TeamBuild;
