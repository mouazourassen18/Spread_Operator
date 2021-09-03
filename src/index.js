import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
const one = [1, 2, 3, 4, 5];
const two = [...one, 6, 7, 8, 9];
console.log(two);
// the same thing for adding objects

const ouazou = {
  fname: "mohamed",
  lname: "ouazourassen"
};
const rassen = {
  age: "22",
  email: "oua99@",
  ...ouazou
};
console.log(rassen);
