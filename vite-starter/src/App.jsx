import { useState } from "react";

function App() {
  const [currentColor, setCurrentColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const nextColor = currentColor === "red" ? "blue" : "red";

  return (
    <>
      <div>
        <h1>I'm gonna learn React Testing Library</h1>
        <h2>I'm gonna learn 2 Testing Library</h2>
      </div>
      <div>
        <button
          className={
            disabled ? "gray" : currentColor === "red" ? "red" : "blue"
          }
          onClick={() => setCurrentColor(nextColor)}
          disabled={disabled}
        >
          `Change to ${nextColor}`
        </button>
      </div>

      <div>
        <input
          type="checkbox"
          id="disable-button-checkbox"
          defaultChecked={disabled}
          onClick={(e) => setDisabled(e.target.checked)}
        />
        <label htmlFor="disable-button-checkbox">Disable button</label>
      </div>
    </>
  );
}

export default App;
