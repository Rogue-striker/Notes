import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../Styles/Notes.css";
import Axios from "../Axios";
import {response} from './Nav'
const Notes = () => {
  const [getNotes , setgetNotes] = useState([])
  useEffect(
    () =>
      Axios.get("/Notes")
        .then((res) => {
            console.log(res.data)
            setgetNotes(res.data)
        })
        .catch((err) => {
          console.log(err)
        }),
    []
  );
  console.log(response)
  return (
    <div className="displaynotes">
      <div className="notes-title">
        <h2>Welcome Name! Here's your Notes</h2>
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
