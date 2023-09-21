import React from "react";
import "./FormationChooser.css";

import { FORMATIONS, Formation } from "../../constants";

interface FormationChooserProps {
  onFormationChange: (formation: Formation) => void;
}

function FormationChooser({ onFormationChange }: FormationChooserProps) {
  const handleFormationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newFormation = event.target.value;
    onFormationChange(newFormation);
  };

  return (
    <div className="formationChooserContainer">
      <label htmlFor="formationDropdown">Formation:</label>
      <select
        id="formationDropdown"
        className="formationDropdown"
        onChange={handleFormationChange}
      >
        {FORMATIONS.map((formation: string) => (
          <option key={formation} value={formation}>
            {formation}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormationChooser;
