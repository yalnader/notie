import React, { Component } from "react";
import ReactDOM from "react-dom";
import notielogo from "./pictures/notie.png";
import Button from 'react-bootstrap/Button';
import Test from './test';

import LoadView from './components/LoadView/loadview'
import "./App.css";

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
          <LoadView onReady={this.handleReady}/>:
          <Test />
        }
      </div>
    )
  };
}

export default App;
