import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameInput from "../GameInput/GameInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState([]);
  console.log(guess);
  return (
    <>
      <PreviousGuesses answer={answer} guesses={guess} />
      <GameInput guess={guess} setGuess={setGuess} />
    </>
  );
}

export default Game;
