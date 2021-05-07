import React from 'react'
import {
  Link,
} from 'react-router-dom'

import DefaultContext from '../context.js'

import CardPost from '../component/cardpost.jsx'

class Home extends React.Component{
	static contextType = DefaultContext
	constructor(props){
		super(props)
		this.state = {
			post: [
				{
					id: 1,
					name: 'ferdiansyah061118',
					avatar: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80',
					img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
				{
					id: 2,
					name: 'ferdiansyah061118',
					avatar: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80',
					img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
				{
					id: 3,
					name: 'ferdiansyah061118',
					avatar: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80',
					img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
				{
					id: 4,
					name: 'ferdiansyah061118',
					avatar: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80',
					img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
				{
					id: 5,
					name: 'ferdiansyah061118',
					avatar: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80',
					img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
			],
			comment: [
				[],
				[
					{id: 1, name: 'ferdiansyah061118', msg: 'Hello Word'},
					{id: 2, name: 'elonrmuskk', msg: 'Test Comment'}
				],
				[
					{id: 1, name: 'ferdiansyah061118', msg: 'Hello Word'},
					{id: 2, name: 'elonrmuskk', msg: 'Test Comment'}
				],
				[
					{id: 1, name: 'ferdiansyah061118', msg: 'Hello Word'},
					{id: 2, name: 'elonrmuskk', msg: 'Test Comment'}
				],
				[
					{id: 1, name: 'ferdiansyah061118', msg: 'Hello Word'},
					{id: 2, name: 'elonrmuskk', msg: 'Test Comment'}
				],
				[
					{id: 1, name: 'ferdiansyah061118', msg: 'Hello Word'},
					{id: 2, name: 'elonrmuskk', msg: 'Test Comment'}
				]
			]
		}
	}
	componentDidMount(){
		this.context.setState('url', '/')
	}
	render(){
		return(
			<>
			<section>
				<DefaultContext.Consumer>
				{
					result => (
						<div className="flex flex-wrap">
							<div className="w-full md:w-3/5">
								<div className="bg-white w-full border border-gray-300">
									<div className="grid grid-flow-col auto-cols-max overflow-auto">
									{
										[1,2,3,4,5,6,7,8,9,10].map((data, key) => {
											return(
												<div className="">
													<img
														src={result.users.avatar}
														alt="avatars"
														className="rounded-full w-24 h-24 p-3"
													/>
												</div>
											)
										})
									}
									</div>
								</div>
								<CardPost post={this.state.post} comment={this.state.comment} />
							</div>
							<div className="w-full hidden md:block md:w-2/5 md:ml-32 md:fixed md:top-0 md:right-0 overflow-auto md:mt-14" style={{height: '89vh'}}>
								<div className="flex">
									<div>
										<img
											src={result.users.avatar}
											alt="avatars"
											className="rounded-full w-20 h-20 p-3"
										/>
									</div>
									<div className="w-1/3 p-3">
										<p className="text-sm mt-1 font-bold">{result.users.name}</p>
										<p className="text-sm mt-1 text-opacity-75 text-black">{result.users.username}</p>
									</div>
									<div className="w-1/3 p-3 text-right">
										<Link to="/" className="text-blue-900 text-sm">Switch</Link>
									</div>
								</div>
								<div className="flex">
									<p className="w-2/2 float-left 32xl:text-opacity-75 text-gray-500 font-bold">Recommended for you</p>
								</div>
								{
									[0,1,2,3,4].map((data, key) => {
										return(
											<div key={key} className="flex">
												<div>
													<img
														src={result.users.avatar}
														alt="avatars"
														className="rounded-full w-20 h-20 p-3"
													/>
												</div>
												<div className="w-1/3 p-3">
													<Link to={'/profile/' + result.users.name} className="text-sm mt-1 font-bold hover:underline">{result.users.name}</Link>
													<p className="text-sm mt-1 text-opacity-75 text-black">{result.users.username}</p>
												</div>
												<div className="w-1/3 p-3 text-right">
													<a href="/" className="text-blue-900 text-sm">Follow</a>
												</div>
											</div>
										)
									})
								}
								<footer className="flex flex-wrap">
								{
									result.footer.data.map((data, key) => {
										return <Link key={key} href="/" className="text-gray-600 text-sm p-2">{data}</Link>
									})
								}
								</footer>
							</div>
						</div>

					)
				}
				</DefaultContext.Consumer>
			</section>
			</>
		)
	}
}

export default Home