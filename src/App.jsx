import Player from "./components/Player";

function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
         <Player name="Ali" symbol="X"/>
         <Player name="Farid" symbol="O"/>
        </ol>
      </div>
    </main>
  );
}

export default App;
