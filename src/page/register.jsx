import React from 'react'
import {
  Link,
  Redirect
} from 'react-router-dom'
import DefaultContext from '../context.js'
import {
  IfFirebaseAuthed,
  IfFirebaseUnAuthed
} from "@react-firebase/auth";
import firebase from "firebase/app";
import firebaseDb from 'firebase';

class Register extends React.Component{
	static contextType = DefaultContext
	constructor(props){
		super(props)
		this.state = {
			email: '',
			fullname: '',
			username: '',
			password: ''
		}
	}
	componentDidMount(){
		document.title = 'Register | Clone Instagram'
		this.context.setState('url', '/register')
	}
	register(e){
		e.preventDefault()

		firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((userCredential) => {
		  	var user = userCredential.user;
		  	firebaseDb.firestore().collection('users').doc(user.uid).set({
	    		uid: user.uid,
	    		name: user.displayName,
	    		email: user.email,
	    		photo: user.photoURL
	    	})..catch(e => console.error(e))
		}).catch((error) => {
		  	var errorCode = error.code;
		  	var errorMessage = error.message;
		  	console.log(errorCode, errorMessage)
		});
	}
	render(){
		return(
			<>
				<IfFirebaseUnAuthed>
				{() => (
					<>
						<div className="flex flex-wrap w-full sm:w-1/3 mx-auto justify-center bg-white border border-gray-300 p-5">
							<div className="w-full text-center">
								<h5 className="font-bold text-2xl">Instagram Clone</h5>
								<p className="text-gray-600 font-bold mt-3 text-opacity-75">Create an account to view photos and videos of your friends.</p>
							</div>
							<button className="bg-blue-400 text-white p-3 font-bold mt-3 rounded-md w-full outline-none focus:outline-none focus:ring focus:ring-blue-200" type="submit">Login With Facebook</button>

							<p className="mt-5 flex w-full">
								<hr className="border-gray-300 mt-3 mb-0 w-2/4 mr-5"/> <span className="text-gray-400">OR</span> <hr className="border-gray-300 mt-3 mb-0 w-2/4 ml-5"/>
							</p>
							<form onSubmit={(e) => this.register(e)}>
								<div className="w-full text-center mt-3">
									<div className="block">
										<input
											className="p-2 text-sm w-full rounded bg-gray-200 mt-4 outline-none focus:ring focus:ring-blue-400"
											type="text"
											placeholder="Email"
											onChange={(e) => this.setState({email: e.target.value})}
										/>
										<input
											className="p-2 text-sm w-full rounded bg-gray-200 mt-4 outline-none focus:ring focus:ring-blue-400"
											type="text"
											placeholder="Fullname"
											onChange={(e) => this.setState({fullname: e.target.value})}
										/>
										<input
											className="p-2 text-sm w-full rounded bg-gray-200 mt-4 outline-none focus:ring focus:ring-blue-400"
											type="text"
											placeholder="Username"
											onChange={(e) => this.setState({username: e.target.value})}
										/>
										<input
											className="p-2 text-sm w-full rounded bg-gray-200 mt-4 outline-none focus:ring focus:ring-blue-400"
											type="password"
											placeholder="Password"
											onChange={(e) => this.setState({password: e.target.value})}
										/>
									</div>
								</div>
								<button className="bg-blue-400 text-white p-3 font-bold mt-4 rounded-md w-full outline-none focus:outline-none focus:ring focus:ring-blue-200" type="submit">Register</button>
							</form>
							<div className="w-full text-center block mt-3">
								<p className="p-3 text-sm">By registering, you agree to our Terms, Data Policy and Cookie Policy.</p>
							</div>
						</div>
						<div className="flex flex-wrap w-full sm:w-1/3 mx-auto justify-center bg-white border border-gray-300 p-5 mt-3 text-sm">
							<p>Have a account ? <Link to="/login" className="text-blue-400">Login</Link></p>
						</div>
					</>
				)}
				</IfFirebaseUnAuthed>
				<IfFirebaseAuthed>
				{() => (
					<Redirect to="/"/>
				)}
				</IfFirebaseAuthed>
			</>
		)
	}
}

export default Register