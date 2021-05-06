import React from 'react'
import {BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom'
import HomePage from './Components/HomePage'
import LoginPage from './Components/LoginPage'

function App() {
  return (
    <div className="ui container">
      <Router>
      <Route path = "/" exact component={HomePage}/>
      <Route path = "./login" component={LoginPage}/>
      </Router>
    </div>

   );
  }
export default App;
