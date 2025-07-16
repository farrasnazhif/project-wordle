import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import GuessGrid from "../GuessGrid/GuessGrid";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <GuessGrid key={num} value={guesses[num]} />
      ))}
    </div>
  );
}

export default GuessResults;
