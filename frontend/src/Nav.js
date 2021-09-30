import  notes from './notes.svg'
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
          <button className="nav-link">Home</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">Notes</button>
        </li>
        <li className="nav-item">
          <button className="googlelogin">Login</button>
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
