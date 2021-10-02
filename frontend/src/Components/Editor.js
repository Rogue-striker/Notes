import  {React,  useState} from "react";
import {useHistory} from 'react-router-dom';
import api from '../Axios' ;
import Button from "@material-ui/core/Button";
import { Add, Save } from "@material-ui/icons";
import {text} from "../Components/Card"
import "../Styles/Editor.css";

const Editor = (props) => {
  let history = useHistory()
  const [usernotes ,setUserNotes] = useState(text);
  const handleChange = (e)=>{
    setUserNotes(e.target.value)
  }
  const handleSave = ()=>{
         console.log(usernotes)
  }
  const handleClear = ()=>{
     setUserNotes("")
  }
  const handleAdd= ()=>{
     api.post('/Add',{"content":usernotes}).then((res)=>{
      if(res.status === 200){
          history.push("/")
          setUserNotes("")
      }
     }
     ).catch(err=>{alert(err)})
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
            <Button color="primary" variant="contained" startIcon={<Add />} onClick={handleAdd}>
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
