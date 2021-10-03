import notes from "../images/notes.svg";
import hamburgerMenu from "../images/hamburger-menu.svg";
import Button from "@material-ui/core/Button";
import { Home, Notes } from "@material-ui/icons";
import { GoogleLogin ,GoogleLogout} from "react-google-login";
import { useState } from "react";
import { Link,useHistory } from "react-router-dom";
var loginStatus = false;
var response = [{
  id : "id_1",
}]
const Nav = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={notes} alt="website title" className="notes-icon" />
        <a href="/" className="navbar-title">
          Notes
        </a>
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/">
            <Button variant="contained" startIcon={<Home />}>
              Home
            </Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Notes">
            <Button variant="contained" startIcon={<Notes />}>
              Notes
            </Button>
          </Link>
        </li>
        <li className="nav-item">
         <button>logout</button>
        </li>
      </ul>
      <div className = "hamburger">
        <div className= "bar"></div>
        <div className= "bar"></div>
        <div className= "bar"></div>
      </div>
    </nav>
  );
};
export default Nav;
export {loginStatus};
export {response}