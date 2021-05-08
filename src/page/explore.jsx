import React from 'react'
import DefaultContext from '../context.js'
import ImgHoverPostUser from '../component/imghoverpostuser.jsx'

class Explore extends React.Component{
	static contextType = DefaultContext
	constructor(props){
		super(props)
		this.state = {
			img: [
				{
					id: 1,
					name: 'ferdiansyah061118',
					avatar: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80',
					like: 1000,
					comment: 1929,
					img: 'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
				},
				{
					id: 2,
					name: 'ferdiansyah061118',
					avatar: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80',
					like: 1000,
					comment: 1929,
					img: 'https://images.unsplash.com/photo-1620232224149-25be08bdec08?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
				},
				{
					id: 3,
					name: 'ferdiansyah061118',
					avatar: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80',
					like: 1000,
					comment: 1929,
					img: 'https://images.unsplash.com/photo-1616425839183-c60d8f310fec?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
				},
				{
					id: 4,
					name: 'ferdiansyah061118',
					avatar: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80',
					like: 1000,
					comment: 1929,
					img: 'https://images.unsplash.com/photo-1619450810414-3b2bdab653e9?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
				},
				{
					id: 5,
					name: 'ferdiansyah061118',
					avatar: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80',
					like: 1000,
					comment: 1929,
					img: 'https://images.unsplash.com/photo-1616286949780-50d29ce2ae63?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDk5fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
				},
				{
					id: 6,
					name: 'ferdiansyah061118',
					avatar: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80',
					like: 1000,
					comment: 1929,
					img: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOHx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
				},
			],
			topImg: [],
			heightImg: []
		}
	}
	componentDidMount(){
		document.title = 'Explore | Instagram Clone'
		this.context.setState('url', '/explore')
	}
	render(){
		return(
			<>
			<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
				<ImgHoverPostUser data={this.state.img}/>
			</div>
			</>
		)
	}
}

export default Explore