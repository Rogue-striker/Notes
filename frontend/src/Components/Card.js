import React from 'react'
import Button from '@material-ui/core/Button'
import {Delete, Edit} from '@material-ui/icons';
import { useHistory } from 'react-router';
import '../Styles/card.css';

let text = ""
const Card = (props) => {
    const history = useHistory();
    const handleEdit = ()=>{
        text = props.content;
        console.log(text);
        history.push("/");
    }
    return (
        <div className = "card">
            <div className = "card-title">
                <h1>{props.title}</h1>    
            </div>        
            <div className = "card-content">
                <p>
                    {props.content}
                </p>
            </div>
            <div className = "btns">
                <Button variant="contained" startIcon = {<Edit/>} onClick = {handleEdit}></Button>
                <Button variant= "contained" startIcon = {<Delete/>}></Button>
            </div>
        </div>
    )
}

export default Card;
export {text};