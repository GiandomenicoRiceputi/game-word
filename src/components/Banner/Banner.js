import React from "react";

// Banner component is a reusable component to display a banner message
function Banner({ children, status }) {
  return <div className={`${status} banner`}>{children}</div>;
}

export default Banner;
