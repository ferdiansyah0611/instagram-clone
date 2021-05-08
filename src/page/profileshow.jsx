import React from 'react'
import DefaultContext from '../context.js'
import Navbar from '../component/navbar.jsx'
import {
  ChevronDownIcon as ChevronDownIconO,
  DotsHorizontalIcon as DotsHorizontalIconO,
} from '@heroicons/react/outline'
import ImgHoverPostUser from '../component/imghoverpostuser.jsx'

class ProfileShow extends React.Component{
	static contextType = DefaultContext
	constructor(props){
		super(props)
		this.state = {
			img: 'https://images.unsplash.com/photo-1619450810414-3b2bdab653e9?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
		}
	}
	componentDidMount(){
		document.title = this.props.match.params.name + ' | Clone Instagram'
		this.context.setState('url', '/profile/' + this.props.match.params.name)
	}
	render(){
		return(
			<>
			<Navbar/>
			<DefaultContext.Consumer>
			{
				result => (
					<div className="">
						<div className="flex w-full">
							<div className="w-1/5">
								<img src={result.users.avatar} alt="avatar" className="mx-auto rounded-full w-20 h-16 md:w-32 md:h-32 border-4 border-red-600 "/>
							</div>
							<div className="w-4/5">
								<div className="flex flex-wrap ml-2 sm:ml-0">
									<div className="text-light w-full sm:w-2/5">
										<p>{this.props.match.params.name}</p>
									</div>
									<button
										className="focus:outline-none focus:ring focus:ring-gray-300 border border-gray-300 font-medium text-sm p-2 rounded">Send Message</button>
									<button
										className="focus:outline-none focus:ring focus:ring-gray-300 border border-gray-300 font-bold text-sm p-2 ml-1 rounded"
									>
										<ChevronDownIconO className="h-5"/>
									</button>
									<button
										className="focus:outline-none focus:ring focus:ring-gray-300 border border-gray-300 font-bold text-sm p-2 ml-1 rounded"
									>
										<DotsHorizontalIconO className="h-5"/>
									</button>
								</div>
								<div className="flex ml-2 sm:ml-0 mt-2">
									<p className="text-xs sm:text-sm sm:w-1/3"><span className="font-bold">1M</span> posts</p>
									<p className="text-xs sm:text-sm ml-1 sm:w-1/3 cursor-pointer"><span className="font-bold">10M</span> followers</p>
									<p className="text-xs sm:text-sm ml-1 sm:w-1/3 cursor-pointer"><span className="font-bold">10M</span> follows</p>
								</div>
								<div className="flex flex-wrap ml-2 sm:ml-0 mt-2">
									<div className="text-sm font-bold w-full">{result.users.username}</div>
									<p className="w-full">I from US.</p>
								</div>
							</div>
						</div>
						<div className="w-full mt-10">
							<div className="border border-gray-200"></div>
							<div className="flex justify-center">
								<a href="/" className="p-2 sm:p-4 sm:pl-10 sm:pr-10 font-bold">Posts</a>
								<a href="/" className="p-2 sm:p-4 sm:pl-10 sm:pr-10 text-gray-400">IGTV</a>
								<a href="/" className="p-2 sm:p-4 sm:pl-10 sm:pr-10 text-gray-400">Saved</a>
								<a href="/" className="p-2 sm:p-4 sm:pl-10 sm:pr-10 text-gray-400">Marked</a>
							</div>
							<div className="content grid grid-cols-2 sm:grid-cols-4 gap-2 auto-cols-max">
							<ImgHoverPostUser
								data={[
									{id: 1, name: result.users.name, avatar: result.users.avatar, like: 390, comment: 1000, img: this.state.img},
									{id: 2, name: result.users.name, avatar: result.users.avatar, like: 390, comment: 1000, img: this.state.img},
									{id: 3, name: result.users.name, avatar: result.users.avatar, like: 390, comment: 1000, img: this.state.img},
									{id: 4, name: result.users.name, avatar: result.users.avatar, like: 390, comment: 1000, img: this.state.img},
									{id: 5, name: result.users.name, avatar: result.users.avatar, like: 390, comment: 1000, img: this.state.img},
									{id: 6, name: result.users.name, avatar: result.users.avatar, like: 390, comment: 1000, img: this.state.img},
									{id: 7, name: result.users.name, avatar: result.users.avatar, like: 390, comment: 1000, img: this.state.img},
									{id: 8, name: result.users.name, avatar: result.users.avatar, like: 390, comment: 1000, img: this.state.img},
								]}
							/>
							</div>
						</div>
					</div>

				)
			}
			</DefaultContext.Consumer>
			</>
		)
	}
}

export default ProfileShow