import React from "react";
import ReactDOM from "react-dom";

const App = function() {
  const buttonText = "Click Me";
  return (
    <div>
      <label className="label" forHTML="name">
        Enter your name:{" "}
      </label>
      <input id="name" type="text" />
      <button type="submit" style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
