import React,{ Component } from "react";
import NoteForm from "../NoteForm/NoteForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Notes.css";
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Popup from "reactjs-popup";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"


const plus = <FontAwesomeIcon icon={faPlusSquare}  size="3x" />
const refresh = <FontAwesomeIcon icon={faTrashAlt}  size="3x"/>



class Notes extends Component{
    constructor(props){
        super(props);
        this.state = {
            notes: [],
            open:false,
        };
        this.addNote = this.addNote.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createNote = this.createNote.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
    }

    

    addNote() { //make a pop up where you enter body and title and pass as props to the NoteForm then add the note to the
        console.log("note added");
       this.setState({
            open:true
       })
    }

    closeModal(){
        this.setState({
            open:false
       })
    }

    handleSubmit(event){
        console.log("Submitted");
    }

    createNote(e){

        console.log("createNote(FDUNCTIONSOHNOAFH)");
        let title = document.getElementById("title").value;
        let body = document.getElementById("body").value;
        console.log(title)
        let length = this.state.notes.length;
        var joined = this.state.notes.concat(<NoteForm title={title} body={body} />);
        this.setState({
            notes: joined
        })

        return(
            false
        )
    }
    deleteAll(){

        this.setState({
            notes:[]
        })

    }
    
    render(){
        return(
            <div style={{}}>

        {this.state.notes.length > 0 ?
            <div> 
                <div className="top">
                <Button variant='outline-primary' style={{backgroundColor:'#49c8f8'}} onClick={() => this.addNote()}>{plus}</Button> 
                </div>
                {this.state.notes.map((item, i)=> 
                <div className="deck">

                <CardDeck style={{justifyContent:'center', display: 'inline-block', flexDirection: 'row', width:'100%', whiteSpace:'nowrap',paddingLeft:'40%', paddingRight:'40%' }}>
                    {item}

                </CardDeck>
        
            </div> 

        
        ) }
                <br></br>
                <div className="top">
                    <Button variant='outline-primary' style={{backgroundColor:'#49c8f8'}} onClick={() => this.deleteAll()}>{refresh}</Button>
                </div>
        
        </div>
        
        : <div className="middle">
            <Button variant='outline-primary' style={{backgroundColor:'#49c8f8'}} onClick={() => this.addNote()}>{plus}</Button> 
            </div> 
            
    }
        <Popup open={this.state.open} closeOnDocumentClick onClose={() => this.closeModal()} 
        
        contentStyle={{
            width: "fit-content" ,
            backgroundColor:'#49c8f8',
            display:'inline-block'
        }}

        > 
            <form className="popUp">
                <input type="text" id="title" placeholder="Title..."></input>
                <br></br>
                
                <br></br>
                <input type="text" id="body" placeholder="Body..."></input>
                {/* <input type="button" >Save</input> */}
                <button type="button" onClick={()=> this.createNote()}> Create Note</button>
            </form>
        
        
        </Popup> 

            </div>
        )
    }
}
export default Notes;