import notes from "../images/notes.svg";
import Button from "@material-ui/core/Button";
import { Home, Notes } from "@material-ui/icons";
// import { GoogleLogin } from "react-google-login";
// import { useState } from "react";
// import { GoogleLogout } from 'react-google-login';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

const Nav = (props) => {
  const gclientid =
    "343391264900-0u8r18n9a995nbjlqmqv0l8tgpfb0blb.apps.googleusercontent.com";
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={notes} alt="website title" className="notes-icon" />
        <a href="#" className="navbar-title">
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
          <Link to = "/Notes">
            <Button variant="contained" startIcon={<Notes />}>
              Notes
            </Button>
          </Link>
        </li>
        <li className="nav-item">
          <Button variant="contained">Login</Button>
        </li>
      </ul>
      <div className="hamburger">
        <span className="bar">Home</span>
        <span className="bar">Notes</span>
        <span className="bar">Login</span>
      </div>
    </nav>
  );
};
export default Nav;
