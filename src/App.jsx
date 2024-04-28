import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
         <Player initialName="Ali" symbol="X"/>
         <Player initialName="Farid" symbol="O"/>
        </ol>
        <GameBoard/>
      </div>
    </main>
  );
}

export default App;
