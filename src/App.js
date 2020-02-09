import React, { Component } from "react";
import ReactDOM from "react-dom";
import notielogo from "./pictures/notie.png";
import Button from 'react-bootstrap/Button';


import LoadView from './components/LoadView/loadview'
import "./App.css";
import NoteView from "./components/NoteView/NoteView";

class App extends Component {

  state = {
    isLoading: true
  }

  handleReady = () => {
    this.setState({
      isLoading: false
    });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.isLoading?
          <><LoadView onReady={this.handleReady}/></>:
          <NoteView />
        }
        
      </div>
    )
  };
}

export default App;
