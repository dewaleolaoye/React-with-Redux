import React from "react";
import ReactDOM from "react-dom";

const App = function() {
  const buttonText = { text: "Click Me" };

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter your name:{" "}
      </label>
      <input id="name" type="text" />
      <button type="submit" style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
