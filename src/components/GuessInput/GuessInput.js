import React from "react";

// GuessInput component takes a 'handleGuesses' function as a prop
function GuessInput({ handleGuesses, gameStatus }) {
  // Declare a state variable 'inputValue' and its updater function 'setInputValue'
  const [inputValue, setInputValue] = React.useState("");

  // 'handleSubmit' function is called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    handleGuesses(inputValue); // Call the 'handleGuesses' function with the 'inputValue'
    setInputValue(""); // Reset the 'inputValue' state to an empty string
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label id="guess-input-label" htmlFor="guess-input">
        Enter guess:
      </label>
      <input
        disabled={gameStatus !== "running"} // Disable the input field if the game is not running
        required // Ensure the input is not empty
        minLength={5} // Set the minimum length of input to 5
        maxLength={5} // Set the maximum length of input to 5
        pattern="^(?=\S{5}$).*" // Use regex pattern to allow only 5 non-whitespace characters
        title="Guess must be 5 characters" // Provide a hint to the user
        id="guess-input"
        type="text"
        name="guess"
        aria-labelledby="guess-input-label" // Associate the input with the label
        aria-describedby="guess-input-description" // Associate the input with the description
        placeholder="try to guess :)" // Provide a hint to the user
        value={inputValue} // Bind the input value to the state variable 'inputValue'
        // Update the 'inputValue' state to the uppercase version of the input value on change
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setInputValue(nextGuess);
        }}
      />
      <span id="guess-input-description" className="sr-only">
        Please enter a word of 5 letters to guess.
      </span>
    </form>
  );
}

export default GuessInput;
