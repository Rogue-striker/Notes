import React from 'react'
import Button from '@material-ui/core/Button'
import {Delete, Edit} from '@material-ui/icons'
import '../Styles/card.css'
const Card = (props) => {
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
                <Button variant="contained" startIcon = {<Edit/>}></Button>
                <Button variant= "contained" startIcon = {<Delete/>}></Button>
            </div>
        </div>
    )
}

export default Card
