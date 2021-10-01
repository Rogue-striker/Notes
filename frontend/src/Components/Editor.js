import  {React,  useState } from "react";
import "../Styles/Editor.css";
import Button from "@material-ui/core/Button";
import { Add, Save } from "@material-ui/icons";

const Editor = () => {
  const [usernotes ,setUserNotes] = useState("");
  const handleChange = (e)=>{
    setUserNotes(e.target.value)
  }
  const handleSave = ()=>{
        console.log(usernotes);
        
  }
  const handleClear = ()=>{
     setUserNotes("")
  }

  return (
    <div className="Editor">
      <div className="editorWrap">
        <div className="warea">
          <textarea
            name="content"
            id="notewrite"
            placeholder="Enter the text..."
            value = {usernotes}
            onChange = {handleChange}
          ></textarea>
        </div>
        <div className="btnbar">
          <div className="flexer">
            <Button color="secondary" variant="contained" onClick = {handleClear}>
              Clear
            </Button>
            <Button color="primary" variant="contained" startIcon={<Save />} onClick = {handleSave}>
              Save
            </Button>
            <Button color="primary" variant="contained" startIcon={<Add />}>
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
