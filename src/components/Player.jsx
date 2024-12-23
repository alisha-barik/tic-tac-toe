import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  let edititablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    edititablePlayerName = (
      <input type="text" required onChange={onChangeName} value={playerName} />
    );
  }
  function handleEditClick() {
    setIsEditing(!isEditing);
  }
  function onChangeName(event) {
    console.log("event->" + event);
    setPlayerName(event.target.value);
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
