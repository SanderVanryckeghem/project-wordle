import React from "react";

function GameInput({ guess, setGuess }) {
  function submitAnswer(event) {
    event.preventDefault();
    const guesses = [...guess];
    if (event.target[0].value.length === 5) {
      guesses.push(event.target[0].value.toUpperCase());
      setGuess(guesses);
      event.target[0].value = "";
      return;
    }
  }
  return (
    <form className="guess-input-wrapper" onSubmit={submitAnswer}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input disabled={guess.length >= 5} id="guess-input" type="text" />
    </form>
  );
}

export default GameInput;
