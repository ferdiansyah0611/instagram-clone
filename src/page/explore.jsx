import React from 'react'
import DefaultContext from '../context.js'
import {
  ChatAlt2Icon,
  HeartIcon,
} from '@heroicons/react/solid'

class Explore extends React.Component{
	static contextType = DefaultContext
	constructor(props){
		super(props)
		this.state = {
			img: [
				{id: 1,  like: 1000, comment: 1929, img: 'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
				{id: 2,  like: 1000, comment: 1929, img: 'https://images.unsplash.com/photo-1620232224149-25be08bdec08?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
				{id: 3,  like: 1000, comment: 1929, img: 'https://images.unsplash.com/photo-1616425839183-c60d8f310fec?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
				{id: 4,  like: 1000, comment: 1929, img: 'https://images.unsplash.com/photo-1619450810414-3b2bdab653e9?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
				{id: 5,  like: 1000, comment: 1929, img: 'https://images.unsplash.com/photo-1616286949780-50d29ce2ae63?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDk5fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
				{id: 6,  like: 1000, comment: 1929, img: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOHx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
			],
			topImg: [],
			heightImg: []
		}
		this.setHeightImg = this.setHeightImg.bind(this)
		this.mouseenter = this.mouseenter.bind(this)
	}
	setHeightImg(e){
		this.setState({
			topImg: [...this.state.topImg, e.target.height  * (50/100) - 35],
			heightImg: [...this.state.heightImg, e.target.height]
		})
	}
	mouseenter(e){
		if(e._reactName === 'onMouseEnter'){
			e.target.classList.remove('bg-opacity-0')
			e.target.classList.add('bg-opacity-50')
			e.target.nextSibling.classList.remove('hidden')
			e.target.nextSibling.classList.add('block')
		}
		if(e._reactName === 'onMouseLeave'){
			e.target.classList.add('bg-opacity-0')
			e.target.classList.remove('bg-opacity-50')
			e.target.nextSibling.classList.add('hidden')
			e.target.nextSibling.classList.remove('block')
		}
		console.log(e)
	}
	componentDidMount(){
		document.title = 'Explore'
		this.context.setState('url', '/explore')
	}
	render(){
		return(
			<>
			<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
			{
				this.state.img.map((data, key) => {
					return(
						<div className="relative">
							<img
								src={data.img}
								alt="images"
								onLoad={this.setHeightImg}
							/>
							<div
								onMouseEnter={this.mouseenter}
								onMouseLeave={this.mouseenter}
								className="opacity-img absolute left-0 top-0 bg-black bg-opacity-0 w-full cursor-pointer"
								style={{height: this.state.heightImg[key]}}
							>
							</div>
							<div className="absolute hidden text-center left-0 top-0 w-full" style={{top: this.state.topImg[key]}}>
								<div className="flex flex-wrap text-white">
									<div className="w-1/2 flex justify-center p-2">
										<HeartIcon className="h-10"/>
										<p className="">{data.like}</p>
									</div>
									<div className="w-1/2 flex justify-center p-2">
										<ChatAlt2Icon className="h-10"/>
										<p className="">{data.comment}</p>
									</div>
								</div>
							</div>
						</div>
					)
				})
			}
			{
				this.state.img.map((data, key) => {
					return(
						<div className="relative">
							<img
								src={data.img}
								alt="images"
								onLoad={this.setHeightImg}
							/>
							<div
								onMouseEnter={this.mouseenter}
								onMouseLeave={this.mouseenter}
								className="opacity-img absolute left-0 top-0 bg-black bg-opacity-0 w-full cursor-pointer"
								style={{height: this.state.heightImg[key]}}
							>
							</div>
							<div className="absolute hidden text-center left-0 top-0 w-full" style={{top: this.state.topImg[key]}}>
								<div className="flex flex-wrap text-white">
									<div className="w-1/2 flex justify-center p-2">
										<HeartIcon className="h-10"/>
										<p className="">{data.like}</p>
									</div>
									<div className="w-1/2 flex justify-center p-2">
										<ChatAlt2Icon className="h-10"/>
										<p className="">{data.comment}</p>
									</div>
								</div>
							</div>
						</div>
					)
				})
			}
			</div>
			</>
		)
	}
}

export default Explore