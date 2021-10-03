import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../Axios";
import Button from "@material-ui/core/Button";
import { Add, Save } from "@material-ui/icons";
import { text } from "../Components/Card";
import "../Styles/Editor.css";
const Editor = (props) => {
  const history = useHistory();
  const [usernotes, setUserNotes] = useState(text);
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("userNotes"))
      setUserNotes(localStorage.getItem("userNotes"));
  }, []);
  const handleChange = (e) => {
    setUserNotes(e.target.value);
  };
  const handleSave = () => {
    if (usernotes !== "") {
      localStorage.setItem("userNotes", usernotes);
    }
  };
  const handleClear = () => {
    setUserNotes("");
    localStorage.removeItem("userNotes");
  };
  const handleAdd = () => {
    if (usernotes !== "") {
      api
        .post("/Add", { content: usernotes })
        .then((res) => {
          if (res.status === 200) {
            setAlert(true);
            setUserNotes("");
            history.push("/");
            localStorage.removeItem("userNotes");
          }
        })
        .catch((err) => {
          console.log("cannot connect to the internet");
        });
    }
  };
  return (
    <div className="Editor">
      <div className="editorWrap">
        <div className="warea">
          <textarea
            name="content"
            id="notewrite"
            placeholder="Enter the text..."
            value={usernotes}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="btnbar">
          <div className="flexer">
            <Button color="secondary" variant="contained" onClick={handleClear}>
              Clear
            </Button>
            <Button
              color="primary"
              variant="contained"
              startIcon={<Save />}
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              color="primary"
              variant="contained"
              startIcon={<Add />}
              onClick={handleAdd}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
