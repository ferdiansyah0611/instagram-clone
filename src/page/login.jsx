import React from 'react'
import {
  Link
} from 'react-router-dom'
import DefaultContext from '../context.js'

class Login extends React.Component{
	static contextType = DefaultContext
	constructor(props){
		super(props)
		this.state = {}
	}
	componentDidMount(){
		document.title = 'Login | Instagram Clone'
		this.context.setState('url', '/login')
	}
	render(){
		return(
			<>
			<div className="flex flex-wrap w-full sm:w-1/3 mx-auto justify-center bg-white border border-gray-300 p-5">
				<div className="w-full text-center">
					<h5 className="font-bold text-2xl">Instagram Clone</h5>
				</div>
				<div className="w-full text-center mt-8">
					<div className="block">
						<input
							className="p-2 text-sm w-full rounded bg-gray-200 mt-4 outline-none focus:ring focus:ring-blue-400"
							type="text"
							placeholder="No Telp, Username, or Email" />
						<input
							className="p-2 text-sm w-full rounded bg-gray-200 mt-4 outline-none focus:ring focus:ring-blue-400"
							type="text"
							placeholder="Password" />
					</div>
				</div>
				<button className="bg-blue-400 text-white p-3 font-bold mt-4 rounded-md w-full outline-none focus:ring focus:ring-blue-400" type="submit">Login</button>
				<p className="mt-3 mb-3 text-sm">OR</p>
				<div className="w-full text-center">
					<a href="/" className="text-blue-700 p-3 text-sm">Login With Facebook</a>
				</div>
				<div className="w-full text-center block mt-3">
					<a href="/" className="p-3 text-sm">Forget Password</a>
				</div>
			</div>
			<div className="flex flex-wrap w-full sm:w-1/3 mx-auto justify-center bg-white border border-gray-300 p-5 mt-3 text-sm">
				<p>Don't have a account ? <Link to="/register" className="text-blue-400">Register</Link></p>
			</div>
			</>
		)
	}
}

export default Login