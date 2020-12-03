import React from "react";
import "./MonstersCardsList.styles.css";
import { MonsterCard } from "./MonsterCard/MonsterCard";

export const MonstersCardsList = (props) => {
  return (
    <div className="monsters-list">
      {props.monsters.map((monster) => (
       <MonsterCard key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
