import React from "react";
import "./TeamScreen.css";

import { Formation } from "../../constants";
import PlayerCard from "../../PlayerCard";

interface TeamScreenProps {
  formation: Formation;
}

function TeamScreen({ formation }: TeamScreenProps) {
  const partitions: string[] = formation.split("-").reverse();

  return (
    <div className="teamScreenContainer">
      {partitions.map((numOfPlayers: string, index: number) => (
        <div key={index} className="partition">
          {Array(Number(numOfPlayers))
            .fill(null)
            .map((_, playerIndex) => (
              <PlayerCard key={playerIndex} />
            ))}
        </div>
      ))}
    </div>
  );
}

export default TeamScreen;
