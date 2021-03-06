import React from 'react'
import DefaultContext from '../context.js'
import {
  Redirect
} from 'react-router-dom'
import {
  IfFirebaseAuthed,
  IfFirebaseUnAuthed
} from "@react-firebase/auth";

class AccountActivity extends React.Component{
	static contextType = DefaultContext
	constructor(props){
		super(props)
		this.state = {}
	}
	componentDidMount(){
		document.title = 'Account Activity | Instagram Clone'
		this.context.setState('url', '/account/activity')
	}
	render(){
		return(
			<>
				<IfFirebaseUnAuthed>
				{() => (
					<Redirect to="/login"/>
				)}
				</IfFirebaseUnAuthed>
				<IfFirebaseAuthed>
				{() => (
					<DefaultContext.Consumer>
					{
						result => (
							<div className="block mx-auto bg-white w-full sm:w-2/4 p-1 sm:p-3 h-screen overflow-auto">
							{
								[1,2,3,4,5,6,7,8,9,10].map((data, key) => {
									return(
										<div className="flex p-4 cursor-pointer">
											<div>
												<img src={result.default.avatar} className="rounded-full w-16 h-16" alt=""/>
											</div>
											<div className="ml-2 mr-2 text-sm w-2/3">
												<a href="/" className="font-bold hover:underline">{result.default.name} </a>
												<p>
													Liked your comment. <span className="text-gray-400">3 days ago</span>
												</p>
											</div>
											<div>
												<img src={result.users.photoURL} className="w-16 h-16" alt="avatar"/>
											</div>
										</div>
									)
								})
							}
							</div>
						)
					}
					</DefaultContext.Consumer>
				)}
				</IfFirebaseAuthed>
			</>
		)
	}
}

export default AccountActivity