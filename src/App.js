// react
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  NavLink
} from 'react-router-dom'
// context
import DefaultContext from './context.js'

// style
import './App.css';

// pages
import Home from './page/home.jsx'
import Login from './page/login.jsx'
import Register from './page/register.jsx'
import DirectInbox from './page/directinbox.jsx'
import AccountActivity from './page/accountactivity.jsx'
import ProfileShow from './page/profileshow.jsx'

// component


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return (
      <Router>
        <DefaultContext.Provider value={this.state}>
          <div className="App">
            <nav className="bg-white border-2 border-gray-600">
              <div className="flex" id="nav-default">

              </div>
              <nav className="flex" id="nav-mobile">

              </nav>
            </nav>
            <section>
              <Switch>
                <Route path="/">
                  <Home />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/direct/inbox">
                  <DirectInbox/>
                </Route>
                <Route path="/account/activity">
                  <AccountActivity/>
                </Route>
                <Route path="/profile/:name">
                  <ProfileShow/>
                </Route>
              </Switch>
            </section>
          </div>
        </DefaultContext.Provider>
      </Router>
    );
  }
}
export default App;