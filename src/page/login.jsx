import React from 'react'
import {
  Link,
  Redirect
} from 'react-router-dom'
import DefaultContext from '../context.js'
import firebase from "firebase/app";
import "firebase/auth";
import {
  IfFirebaseAuthed,
  IfFirebaseUnAuthed
} from "@react-firebase/auth";
import firebaseDb from 'firebase';

class Login extends React.Component{
	static contextType = DefaultContext
	constructor(props){
		super(props)
		this.state = {
			email: '',
			password: ''
		}
	}
	componentDidMount(){
		document.title = 'Login | Instagram Clone'
		this.context.setState('url', '/login')
	}
	loginGoogle(e){
		e.preventDefault()
	    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
	    firebase.auth().signInWithPopup(googleAuthProvider).then(result => {
	    	firebaseDb.firestore().collection('users').doc(result.user.uid).set({
	    		uid: result.user.uid,
	    		name: result.user.displayName,
	    		email: result.user.email,
	    		photo: result.user.photoURL
	    	}).then((result) => {
	    		this.context.setState('users', result.user)
	    	}).catch(e => console.error(e))
	    }).catch((e) => {
	    	console.log(e.code)
	    })
	}
	loginEmail(e){
		e.preventDefault()
		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
	}
	render(){
		return(
			<>
			<IfFirebaseUnAuthed>
			{() => (
				<>
				<div className="flex flex-wrap w-full sm:w-1/3 mx-auto justify-center bg-white border border-gray-300 p-5">
					<form onSubmit={(e) => this.loginEmail(e)}>
						<div className="w-full text-center">
							<h5 className="font-bold text-2xl">Instagram Clone</h5>
						</div>
						<div className="w-full text-center mt-8">
							<div className="block">
								<input
									className="p-2 text-sm w-full rounded bg-gray-200 mt-4 outline-none focus:ring focus:ring-blue-400"
									type="text"
									placeholder="No Telp, Username, or Email"
									onKeyUp={(e) => this.setState({email: e.target.value})}
								/>
								<input
									className="p-2 text-sm w-full rounded bg-gray-200 mt-4 outline-none focus:ring focus:ring-blue-400"
									type="text"
									placeholder="Password"
									onKeyUp={(e) => this.setState({password: e.target.value})}
								/>
							</div>
						</div>
						<button className="bg-blue-400 text-white p-3 font-bold mt-4 rounded-md w-full outline-none focus:ring focus:ring-blue-400" type="submit">Login</button>
					</form>
					<p className="mt-3 mb-3 text-sm">OR</p>
					<div className="w-full text-center">
						<a onClick={(e) => this.loginGoogle(e)} href="/" className="text-blue-700 p-3 text-sm">Login With Google</a>
					</div>
					<div className="w-full text-center block mt-3">
						<a href="/" className="p-3 text-sm">Forget Password</a>
					</div>
				</div>
				<div className="flex flex-wrap w-full sm:w-1/3 mx-auto justify-center bg-white border border-gray-300 p-5 mt-3 text-sm">
					<p>Don't have a account ? <Link to="/register" className="text-blue-400">Register</Link></p>
				</div>
				</>
			)}
			</IfFirebaseUnAuthed>
			<IfFirebaseAuthed>
			{() => (
				<Redirect to="/"></Redirect>
			)}
			</IfFirebaseAuthed>
			</>
		)
	}
}

export default Login