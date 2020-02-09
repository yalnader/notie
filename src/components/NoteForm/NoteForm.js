import React,{ Component } from "react";
import "./NoteForm.css";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";

class NoteForm extends Component{

    constructor(props){
        super(props);

    }

    // state={
    //     body: "",
    //     title: "",
    //     id: "",
    // }


    render(){
        return(
            // <div className="card">
                <Card className="card" >

                    <Card.Title>
                        {this.props.title}
                    </Card.Title>
                    <Card.Body>
                        <Card.Text>
                            {this.props.body}
                        </Card.Text>

                    </Card.Body>


                </Card>
            // </div>
        )
    }
}

export default NoteForm;