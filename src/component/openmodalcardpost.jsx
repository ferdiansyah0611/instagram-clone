import React from 'react'
import {
  Link,
} from 'react-router-dom'
import {
  DotsHorizontalIcon,
} from '@heroicons/react/solid'
import {
  XIcon as XIconO
} from '@heroicons/react/outline'
import FooterCardPost from './footercardpost.jsx'
import ActionCardPost from './actioncardpost.jsx'

class OpenModalCardPost extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			open: false,
			styleCard: {}
		}
		this.open = this.open.bind(this)
		this.postImgLoad = this.postImgLoad.bind(this)
	}
	componentDidMount(){
		document.body.classList.add('overflow-auto')
	}
	componentWillUnmount(){
		document.body.classList.remove('overflow-hidden')
	}
	postImgLoad(e){
		console.log(e)
		this.setState({styleCard: {height: e.target.height - 179, marginBottom: 'calc(8rem - 22px)'}})
	}
	open(e){
		e.preventDefault()
		if(this.state.open){
			if(document.body.classList.contains('overflow-hidden')){
				document.body.classList.remove('overflow-hidden')
			}
			document.body.classList.add('overflow-auto')
			this.setState({open: false})
			return true
		}
		if(document.body.classList.contains('overflow-auto')){
			document.body.classList.remove('overflow-auto')
		}
		document.body.classList.add('overflow-hidden')
		this.setState({open: true})
		return true
	}
	render(){
		const data = this.props.data
		return(
			<>
			{
				this.state.open ?
				<div className="fixed top-0 left-0 bg-black bg-opacity-75 w-full h-screen z-50 overflow-auto p-5 sm:p-0">
					<XIconO onClick={this.open} className="h-6 fixed right-0 mr-10 ml-5 mt-5 mb-5 cursor-pointer text-white"/>
					<div className="bg-white mt-20 mb-20 w-full sm:w-2/3 mx-auto">
						<div className="flex flex-wrap justify-center">
							<div className="w-full md:w-1/2">
								<img
									src={data.image}
									alt="post"
									className="w-full"
									onLoad={this.postImgLoad}
								/>
							</div>
							<div className="w-full md:w-1/2 relative">
								<div className="header-card p-3 flex border border-r-0 border-l-0 border-t-0 border-gray-300">
									<img
										src={data.photo}
										alt="avatars"
										className="rounded-full w-12 h-12 border-2 border-red-400"
									/>
									<div className="w-1/2">
										<p className="font-bold text-sm hover:underline cursor-pointer p-3">{data.name}</p>
									</div>
									<div className="w-1/2"></div>
									<DotsHorizontalIcon className="h-7 mt-2 cursor-pointer" />
								</div>
								<div className="overflow-auto mb-28" style={this.state.styleCard}>
									<p className="text-sm p-3">
										<span className="font-bold hover:underline cursor-pointer">{data.name} </span>
										<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia deleniti eos aut earum ea. Aperiam consequatur, 
										quisquam. Deserunt fugiat quidem impedit tenetur. Voluptatum quam, placeat cum adipisci doloremque voluptate quia?</span>
										<span className="font-bold hover:underline cursor-pointer text-opacity-75 text-gray-400"> Read More</span>
									</p>
									{
										[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((data, key) => {
											return(
												<p className="text-sm p-3">
													<Link to={'/profile/ferdiansyah061118'} className="font-bold hover:underline cursor-pointer">ferdiansyah061118 </Link> 
													hello world
												</p>
											)
										})
									}
								</div>
									<div className="bg-white border border-r-0 border-l-0 border-b-0 border-gray-300 absolute bottom-0 w-full">
										<ActionCardPost/>
										<FooterCardPost/>
									</div>
							</div>
						</div>
					</div>
				</div>
				:
				false
			}
			<a onClick={this.open} href="/" className="text-gray-500 text-sm hover:underline cursor-pointer">Show all 2034 comment</a>
			</>
		)
	}
}

export default OpenModalCardPost