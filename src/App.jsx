import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer,setActivePlayer]=useState('X')

  function handleSelectSquare(){
  setActivePlayer((curtActivePlayer)=>curtActivePlayer === 'X'? 'O' :'X')
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
         <Player initialName="Ali" symbol="X" isActive={activePlayer==='X'}/>
         <Player initialName="Farid" symbol="O" isActive={activePlayer==='O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  );
}

export default App;
