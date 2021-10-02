import React from 'react'
import Card from './Card'
import '../Styles/Notes.css'
const Note = [
    {
      title: "Notes title",
      content: "testing notes to the te fdklg sgdhlgad;dflsaj; ",
    },
    {
      title: "Notes title",
      content: "testing notes to the te fdklg sgdhlgad;dflsaj; ",
    },
  ];
const Notes = () => {
    return (
        <div className="displaynotes">
        <div className="notes-title">
          <h2>Welcome Name! Here's your Notes</h2>
        </div>
        <div className="note-cards">
            {
              Note.map((note)=>{
                return <Card title ={note.title}  content = {note.content}/>
              })
            }
        </div>
      </div>
    )
}

export default Notes
