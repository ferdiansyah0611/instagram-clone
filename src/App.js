// react
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Link,
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
import CreatePost from './page/createpost.jsx'
// component
import Navbar from './component/navbar.jsx'
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider
} from "@react-firebase/auth";
import config from "./firebase.config";
/*import { FirestoreProvider } from "@react-firebase/firestore";*/


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
  componentDidMount(){
    var user = firebase.auth().currentUser;
    if(user){
      this.setState({users: user})
    }
  }
  render(){
    return (
      <Router>
        <DefaultContext.Provider value={this.state}>
          <div className="App">
            <FirebaseAuthProvider {...config} firebase={firebase}>
              <section className="px-3 sm:px-12 lg:px-32 mt-20 mb-20">
                <Switch>
                  <Route exact path="/">
                    <Navbar/>
                    <Home />
                  </Route>
                  <Route path="/login">
                    <nav class="bg-white border border-r-0 border-l-0 border-gray-300 fixed top-0 left-0 w-full z-40">
                      <div class="flex">
                        <div class="flex w-1/2 lg:ml-5 md:ml-14 lg:ml-32 lg:justify-start">
                          <Link to="/" class="p-4 font-bold">Instagram Clone</Link>
                        </div>
                      </div>
                    </nav>
                    <Login />
                  </Route>
                  <Route path="/register">
                    <nav class="bg-white border border-r-0 border-l-0 border-gray-300 fixed top-0 left-0 w-full z-40">
                      <div class="flex">
                        <div class="flex w-1/2 lg:ml-5 md:ml-14 lg:ml-32 lg:justify-start">
                          <Link to="/" class="p-4 font-bold">Instagram Clone</Link>
                        </div>
                      </div>
                    </nav>
                    <Register />
                  </Route>
                  <Route path="/explore">
                    <Navbar/>
                    <Explore />
                  </Route>
                  <Route path="/direct/inbox">
                    <Navbar/>
                    <DirectInbox/>
                  </Route>
                  <Route path="/account/activity">
                    <Navbar/>
                    <AccountActivity/>
                  </Route>
                  <Route path="/posts/create">
                    <Navbar/>
                    <CreatePost/>
                  </Route>
                  <Route path="/profile/:name" component={ProfileShow}/>
                </Switch>
              </section>
            </FirebaseAuthProvider>
          </div>
        </DefaultContext.Provider>
      </Router>
    );
  }
}
export default App;