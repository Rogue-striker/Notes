import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../Styles/Notes.css";
import Axios from "../Axios";
import {response} from './Nav'
import { loginStatus } from "./Nav";
const Notes = () => {
  const [getNotes , setgetNotes] = useState([])
  useEffect(
    () =>{
     if(loginStatus){
      Axios.get("/Notes")
        .then((res) => {
            console.log(res.data)
            setgetNotes(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    []
  );
  return (
    <div className="displaynotes">
      <div className="notes-title">
        { loginStatus?
        <h2>Welcome {response.name}! Here's your Notes</h2>:
        <h2 className ="login-msg">Login to See your Notes</h2>
       }   
      </div>
      <div className="note-cards">
        {getNotes.map((note) => {
          console.log(note)
          return <Card title={note.Name} content={note.Notes} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
