import { useState } from "react";

export const Button = () => {
  const [currentColor, setCurrentColor] = useState("red");
  const nextColor = currentColor === "red" ? "blue" : "red";

  return (
    <button
      className={currentColor === "red" ? "red" : "blue"}
      onClick={() => setCurrentColor(nextColor)}
    >
      `Change to ${nextColor}`
    </button>
  );
};
