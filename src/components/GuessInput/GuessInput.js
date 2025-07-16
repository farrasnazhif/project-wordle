import React from "react";

function GuessInput({ addGuesses }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log({ guess });
    addGuesses(guess);

    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required={true}
        id="guess-input"
        type="text"
        value={guess}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
      {/* <p>{guess}</p> */}
    </form>
  );
}

export default GuessInput;
