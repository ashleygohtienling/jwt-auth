import React from 'react'
import {BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom'
import HomePage from './Components/HomePage'
import LoginForm from './Components/LoginForm'



function App() {
  return (
    <div className="ui container">
      <Router>
      <Switch>
      <Route path = "/" exact component={HomePage}/>
      <Route path = "/login" component={LoginForm}/>
      </Switch>
      </Router>
    </div>
  )
  }
export default App;
