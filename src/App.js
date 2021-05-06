// react
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
import Explore from './page/explore.jsx'

// component
import Navbar from './component/navbar.jsx'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      url: '',
      setState: (name, val) => {
        this.setState({[name]: val})
      },
      users: {
        name: 'ferdiansyah061118',
        username: 'Ferdi Ferdiansyah',
        avatar: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80'
      },
      footer: {
        data: ['About', 'Help', 'Pers', 'API', 'Work', 'Privacy', 'Policy', 'Locate', 'Top Account', 'Tags', 'Languange']
      }
    }
  }
  componentDidMount(){}
  render(){
    return (
      <Router>
        <DefaultContext.Provider value={this.state}>
          <div className="App">
            <Navbar/>
            <section className="px-3 sm:px-12 lg:px-32 mt-20 mb-20">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/explore">
                  <Explore />
                </Route>
                <Route path="/direct/inbox">
                  <DirectInbox/>
                </Route>
                <Route path="/account/activity">
                  <AccountActivity/>
                </Route>
                <Route path="/profile/:name" component={ProfileShow}/>
              </Switch>
            </section>
          </div>
        </DefaultContext.Provider>
      </Router>
    );
  }
}
export default App;