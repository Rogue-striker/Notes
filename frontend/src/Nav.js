import  notes from './notes.svg'
import Button from '@material-ui/core/Button';
import { Home, Notes, } from '@material-ui/icons';
import {GoogleLogin} from 'react-google-login'
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
          <img src={notes} alt="website title"  className = "notes-icon"/>
        <a href="#" className="navbar-title">
          Notes
        </a>
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <Button variant = "contained" startIcon={<Home/>}>Home</Button>
        </li>
        <li className="nav-item">
          <Button variant ="contained" startIcon={<Notes/>}>Notes</Button>
        </li>
        <li className="nav-item">
          <GoogleLogin buttonText="Login"/>
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
