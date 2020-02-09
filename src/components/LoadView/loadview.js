import React, { Component } from 'react';
import ReactDOM from "react-dom";
import notielogo from "../../pictures/notie.png";
import Button from 'react-bootstrap/Button';

import Circles from '../Circles/circles';
import CONSTANTS from '../../constants/constants'
import "./loadview.css";

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

class LoadView extends Component {

    constructor() {
        super()
        this.state={
            isActive:true,
            isLoading:false,
            text: 'Start Jotting!'
        }
    }

    startLoad(e) {
      //ReactDOM.render( <Circles /> , document.getElementById('container'));
      this.setState({
        isLoading: true
      });
      let loadButton = document.getElementById("startButton");
      let i = 0;
      this.setState({ 
        text: CONSTANTS.loadingEvents[i++]
      }); 
      sleep(2000).then(() => {
        this.setState({ 
        text: CONSTANTS.loadingEvents[i++]
      }); 
        sleep(2000).then(() => {
          this.setState({ 
            text: CONSTANTS.loadingEvents[i]
          }); 
          sleep(2000).then(() => {
            this.setState({
              isLoading: false
            });
            this.props.onReady && this.props.onReady()
          })
        })
      })
      console.log(Date.now());
    }

    componentWillUnmount(){
      this.startLoad();
    }

    render() {
        return (
            <div id="loadPage" className="App">
                <header className="container">
                <img src={notielogo} className="App-logo" alt="logo" />
                <Button variant="warning" size="lg" onClick={() => this.startLoad()}>
                    {this.state.text}
                </Button>
                {
                  this.state.isLoading?
                  <Circles />:
                  null
                }
                </header>
            </div>
        );
    }
  }

export default LoadView;