import React, { Component } from "react";
import config from "./config.json";
// module.exports = function() {
//   var greet = document.createElement("div");
//   greet.textContent = config.greetText;
//   return greet;
// };

class Greeter extends Component {
  render() {
    return <div>{config.greetText}</div>;
  }
}

export default Greeter;
