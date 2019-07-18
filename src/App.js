import React from "react";
import ReactDOM from "react-dom";
import notielogo from "./pictures/notie.png";
import Button from 'react-bootstrap/Button';

import Circles from './components/Circles/circles'
import CONSTANTS from './constants/constants'
import "./App.css";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  function startLoad(e){
    ReactDOM.render( <Circles /> , document.getElementById('container'));
    let loadButton = document.getElementById("startButton");
    let i = 0;
    loadButton.innerText = CONSTANTS.loadingEvents[i++];
    sleep(2000).then(() => {
      loadButton.innerText = CONSTANTS.loadingEvents[i++];
      sleep(2000).then(() => {
        loadButton.innerText = CONSTANTS.loadingEvents[i];
        sleep(2000).then(() => {
          // RENDER HOME VIEW HERE
        })
      })
    })
  }
  return (
    <div className="App">
      <header className="container">
        <img src={notielogo} className="App-logo" alt="logo" />
        <Button id="startButton" variant="warning" size="lg" onClick={startLoad}>
          Start Jotting!
        </Button>
        <div id="container"></div>
      </header>
    </div>
  );
}

export default App;
