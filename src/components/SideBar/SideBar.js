import React,{ Component } from "react";
import ReactDom from "react-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCogs} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faQuestion} from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NONAME } from "dns";

import Button from 'react-bootstrap/Button';
import "./SideBar.css";


const home = <FontAwesomeIcon icon={faHome}  size="2x"/>;
const gear = <FontAwesomeIcon icon={faCogs} size="2x"/>;
const question = <FontAwesomeIcon icon={faQuestion} size="2x"/>;
const bars = <FontAwesomeIcon icon={faBars} size="2x"/>





class SideBar extends Component{
    constructor(){
        super();
        this.state={

            isActive: false,

        }
        
    }

    popUp(){

        // if(this.isActive){
        //     this.setState({
        //         isActive: false
        //     });
        // }
        // else{

        //     this.setState({
        //         isActive: true
        //     });
        // }
        
            this.setState({
                isActive: !this.state.isActive
            });


    }


    render(){
        return(
        <>
            <div className="sideBar">
                <Button size="lg" variant='outline-primary' style={{backgroundColor:'#49c8f8'}} className ="bars" onClick={()=> this.popUp()}>{bars}</Button>
                
                
                {   this.state.isActive?
                    <ul className="sideBarStyleIn">

                        <li>{home}</li>
                        <li> {gear}</li>
                        <li> {question}</li>

                    </ul>:
                    null
                }
                
            </div>
        </>


        );
     }
}

//ReactDom.render(<SideBar />, document.getElementById("root"));


export default SideBar;