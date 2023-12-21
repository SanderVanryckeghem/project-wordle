import React from "react";
import { checkGuess } from "../../game-helpers";

function PreviousGuesses(props) {
  const filledGuesses = props.guesses;
  const emptyGuesses = new Array(5 - filledGuesses.length).fill("");
  const allGuesses = filledGuesses.concat(emptyGuesses);

  return (
    <div className="guess-results">
      {allGuesses.map((guess, index) => (
        <p key={index} className="guess">
          {guess
            ? checkGuess(guess, props.answer).map((item, letterIndex) => (
                <span key={letterIndex} className={`cell ${item.status}`}>
                  {item.letter}
                </span>
              ))
            : new Array(5)
                .fill("")
                .map((_, cellIndex) => (
                  <span key={cellIndex} className="cell empty-cell"></span>
                ))}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
