import React from "react";
import Banner from "../Banner"; // Import the Banner component

// LoseBanner component represents the banner to be displayed when the user loses the game
function LoseBanner({ answer }) {
  return (
    <Banner status="sad">
      {/* Render a paragraph with the message indicating that the user lost and display the answer */}
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LoseBanner;
