import React from "react";
import "./Editor.css";
import Button from "@material-ui/core/Button";
import { Add, Save } from "@material-ui/icons";

const Editor = () => {
  const Notes = [
    {
      title: "Notes title",
      content: "testing notes to the te fdklg sgdhlgad;dflsaj; ",
    },
    {
      title: "Notes title",
      content: "testing notes to the te fdklg sgdhlgad;dflsaj; ",
    },
  ];
  return (
    <div className="Editor">
      <div className="editorWrap">
        <div className="warea">
          <textarea
            name="content"
            id="notewrite"
            placeholder="Enter the text..."
          ></textarea>
        </div>
        <div className="btnbar">
          <div className="flexer">
            <Button color="secondary" variant="contained">
              Clear
            </Button>
            <Button color="primary" variant="contained" startIcon={<Save />}>
              Save
            </Button>
            <Button color="primary" variant="contained" startIcon={<Add />}>
              Add
            </Button>
          </div>
        </div>
      </div>
      <div className="displaynotes">
        <h3>Your Notes</h3>
        {Notes.map((note) => {
          return (
            <div className="Notecard">
              <div className="card-title">
                <h3>${note.title}</h3>
              </div>
              <div className="card-content">
                <p>${note.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Editor;
