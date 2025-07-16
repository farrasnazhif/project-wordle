import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((item, index) => (
        <p className="guess" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
