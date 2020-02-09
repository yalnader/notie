import React,{ Component } from "react";
import SideBar from "../SideBar/SideBar";
import NoteForm from "../NoteForm/NoteForm";
import Notes from "../Notes/Notes";


class NoteView extends Component{

    // constructor(){
    //     super(props);
    //     this.state = {
    //         text: ''
    //     }
    // }

    render(){
        return(
            <div>
                <SideBar />
                <Notes />
                
            </div>
            
        )
        
    }
}

export default NoteView;