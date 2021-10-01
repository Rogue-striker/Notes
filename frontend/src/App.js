import Nav from './Components/Nav'
import Editor from './Components/Editor'
import Notes from './Components/Notes'
import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return(
    <React.Fragment>
      <Router>
        <Nav/>
        <Route exact path = "/">
          <Editor/>
        </Route>
        <Route exact path ="/Notes">
          <Notes/>
        </Route>
      </Router>
    </React.Fragment>
  );
}
export default App;
