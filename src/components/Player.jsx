import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeNames }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(!isEditing);
    if(isEditing){
      onChangeNames(symbol, playerName);
    }
    
  }
  function handleChange(event) {
    console.log("event->" + event);
    setPlayerName(event.target.value);
  }

  let edititablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    edititablePlayerName = (
      <input type="text" required onChange={handleChange} value={playerName} />
    );
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {edititablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
