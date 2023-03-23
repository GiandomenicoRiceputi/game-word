import React from "react";
import { range } from "../../utils"; // Import the range utility function
import { checkGuess } from "../../game-helpers"; // Import the checkGuess helper function

// Cell component represents a single cell in the Guess component
const Cell = ({ result, value, num }) => {
  return (
    <span className={`cell ${result ? result[num].status : undefined}`}>
      {/* If the value is not null, display the value of the cell, otherwise display undefined */}
      {value ? value[num] : undefined}
    </span>
  );
};

// Guess component represents a single guess row in the GuessResults component
function Guess({ value, answer }) {
  const result = checkGuess(value, answer); // Call the checkGuess helper function to get the guess result

  return (
    <p className="guess">
      {/* Iterate over the range of cells and render a Cell component for each */}
      {range(5).map((num) => (
        <Cell key={num} result={result} value={value} num={num} />
      ))}
    </p>
  );
}

export default Guess;
