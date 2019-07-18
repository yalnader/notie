import React from "react";
import ReactDom from "react-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCogs} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faQuestion} from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { NONAME } from "dns";

const home = <FontAwesomeIcon icon={faHome} spin/>;
const gear = <FontAwesomeIcon icon={faCogs}/>;
const question = <FontAwesomeIcon icon={faQuestion}/>;

const coffee = <FontAwesomeIcon icon={faCoffee}/>;
const sideBarStyle = {
    listStyle: 'none',
};


function SideBar(){

return(

    <div className="SideBar">
        <ul style={sideBarStyle}>

            <li>{home}</li>
            <li> {coffee}</li>
            <li> {gear}</li>
            <li> {question}</li>

        </ul>

    </div>

    );
}

ReactDom.render(<SideBar />, document.getElementById("root"));


export default SideBar;