import React from 'react'
import './Editor.css'
const Editor = () => {
    const Notes = [{
        title:"Notes title",
        content:"testing notes to the te fdklg sgdhlgad;dflsaj; "
    },
    {
        title:"Notes title",
        content:"testing notes to the te fdklg sgdhlgad;dflsaj; "
    },
]
    return (

        <div className="Editor">
            <div className="warea">
                <textarea name="content" id="notewrite" placeholder="Enter the text..."></textarea>
            </div>
            <div className="btnbar">
                <div className="flexer">
                    <button className="btn">clear</button>
                    <button className="btn">Save</button>
                    <button className="btn">Add</button>
                </div>
            </div>
            <div className="displaynotes">
                <h3>Your Notes</h3>
                {Notes.map((note)=>{
                    return <div className="Notecard">
                        <div className="card-title">
                        <h3>${note.title}</h3></div>
                        <div className="card-content">
                        <p>${note.content}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Editor
