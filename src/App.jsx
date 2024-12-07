import { useState } from "react";
import Board from "./components/Board";
import Gameinfo from "./components/Gameinfo";

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove]

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, history.length + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length-1 )
    setXIsNext(!xIsNext)

  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
    setXIsNext(nextMove % 2 === 0)



  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )


  })

  return (
    <>
      <div>
        <h1 className="text-3xl underline my-4 py-2">Ligma</h1>

        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />

        <Gameinfo moves={moves} />
      </div>
    </>
  );
}

export default App;
