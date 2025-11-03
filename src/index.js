import React from "react";
import ReactDOM from "react-dom/client";
// import "./styles.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  return (
    <div>
      <StarRating color="blue" maxRating={10} />
      <p>This movie was rated X stars.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Spectacular"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={3} />
    <Test />
  </React.StrictMode>
);
