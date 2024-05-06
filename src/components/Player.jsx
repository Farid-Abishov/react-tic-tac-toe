import { useState } from "react";

export default function Player({ initialName, symbol,isActive,onChangeName }) {
  const [playerName,SetPlayerName]=useState(initialName);
  const [isEtiding, SetIsediting] = useState(false);

  function ChangeEdit() {
    SetIsediting((isEtiding)=>!isEtiding); //true'a deyisdi
    if(isEtiding){
      onChangeName(symbol,playerName)
    }
  }
  
  function handleChange(event){
  SetPlayerName(event.target.value);
  }
  
  let iseditablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEtiding) {
    iseditablePlayerName = <input type="text" required  value={playerName} onChange={handleChange}/>;
  }

  return (
    <li className={isActive ? 'active':undefined}>
      <span className="player">
        {iseditablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={ChangeEdit}>{isEtiding? "Save":"Edit"}</button>
    </li>
  );
}
