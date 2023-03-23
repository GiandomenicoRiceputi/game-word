import React from "react";
import { sample } from "../../utils"; // Import sample utility function to select a random word
import { WORDS } from "../../data"; // Import the WORDS data containing a list of words
import GuessInput from "../GuessInput"; // Import the GuessInput component
import GuessResults from "../GuessResults"; // Import the GuessResults component
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"; // Import the constant number of allowed guesses
import WonBanner from "../WonBanner"; // Import the WonBanner component
import LoseBanner from "../LoseBanner"; // Import the LoseBanner component

// Select a random word on every page load using the sample function
const answer = sample(WORDS);
// Log the solution in the console for easier debugging
console.info({ answer });

function Game() {
  // Declare a state variable 'guesses' and its updater function 'setGuesses'
  const [guesses, setGuesses] = React.useState([]);

  const [gameStatus, setGameStatus] = React.useState("running");

  // 'handleGuesses' function is called with the 'inputValue' from the GuessInput component
  const handleGuesses = (inputValue) => {
    // Create a new guess object containing 'inputValue' and a random id
    const nextGuesses = [...guesses, inputValue];

    // Update the 'guesses' state with the new guess object added to the existing guesses array
    setGuesses(nextGuesses);

    // If the inputValue matches the answer, set game status to "won"
    if (inputValue.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      // If the number of guesses reaches the limit, set game status to "lost"
      setGameStatus("lost");
    }
  };

  return (
    <>
      {/* Render the GuessResults component and pass the 'guesses' state and 'answer' as props */}
      <GuessResults guesses={guesses} answer={answer} />
      {/* Render the GuessInput component and pass the 'handleGuesses' function as a prop */}
      <GuessInput gameStatus={gameStatus} handleGuesses={handleGuesses} />
      {/* Render the WonBanner component when the game is won */}
      {gameStatus === "won" && <WonBanner guesses={guesses} />}
      {/* Render the LoseBanner component when the game is lost */}
      {gameStatus === "lost" && <LoseBanner answer={answer} />}
    </>
  );
}

export default Game;
