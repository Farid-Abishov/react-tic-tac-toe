import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEtiding, SetIsediting] = useState(false);

  function ChangeEdit() {
    SetIsediting(true);
  }
  let playerName = <span className="player-name">{name}</span>;

  if (isEtiding) {
    playerName = <input type="text" required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={ChangeEdit}>Edit</button>
    </li>
  );
}
