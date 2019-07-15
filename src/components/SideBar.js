import React from "react";
// import FontAwesome from "font-awesome";
import "font-awesome/css/font-awesome.min.css";
var FontAwesome = require("react-fontawesome");

var divStyle = {
  color: "#f06595"
};
function SideBar() {
  return (
    <div>
      <ul class="menu">
        <li>
          <FontAwesome name="home" size="3x" />
        </li>
        <li>
          <FontAwesome name="gear" size="3x" />
        </li>
        <li>
          <FontAwesome name="question" size="3x" />
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
