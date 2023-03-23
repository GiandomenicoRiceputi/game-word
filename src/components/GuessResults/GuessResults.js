import React from "react";
import Guess from "../Guess"; // Import the Guess component
import { range } from "../../utils"; // Import the range utility function
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"; // Import the constant number of allowed guesses

// GuessResults component takes an array of 'guesses' and an 'answer' as props
function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {/* Iterate over the range of allowed guesses and render a Guess component for each */}
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          key={num}
          value={guesses[num] ? guesses[num] : undefined} // Pass the guess value as a prop, or undefined if the guess is not available yet
          answer={answer} // Pass the answer as a prop
        />
      ))}
    </div>
  );
}

export default GuessResults;
