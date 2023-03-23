import React from "react";
import Banner from "../Banner"; // Import the Banner component

// WonBanner component represents the banner to be displayed when the user wins the game
function WonBanner({ guesses }) {
  return (
    <Banner status="happy">
      {/* Render a paragraph with the message indicating that the user won and displaying the number of guesses it took */}
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {/* Display the number of guesses it took */}
          {guesses.length === 1 ? ` 1 guess` : ` ${guesses.length} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
