import React from 'react'
import DefaultContext from '../context.js'
import OpenModalHoverImgPost from './openmodalhoverimgpost.jsx'

class ImgHoverPostUser extends React.Component{
	static contextType = DefaultContext
	constructor(props){
		super(props)
		this.state = {
			topImg: [],
			heightImg: []
		}
		this.setHeightImg = this.setHeightImg.bind(this)
		this.hover = this.hover.bind(this)
	}
	setHeightImg(e){
		this.setState({
			topImg: [...this.state.topImg, e.target.height  * (50/100) - 35],
			heightImg: [...this.state.heightImg, e.target.height]
		})
	}
	hover(e){
		if(e._reactName === 'onMouseEnter' || e._reactName === 'onTouchStart'){
			e.target.classList.remove('bg-opacity-0')
			e.target.classList.add('bg-opacity-50')
			e.target.nextSibling.classList.remove('hidden')
			e.target.nextSibling.classList.add('block')
		}
		if(e._reactName === 'onMouseLeave' || e._reactName === 'onTouchEnd'){
			e.target.classList.add('bg-opacity-0')
			e.target.classList.remove('bg-opacity-50')
			e.target.nextSibling.classList.add('hidden')
			e.target.nextSibling.classList.remove('block')
		}
	}
	render(){
		return(
			<>
				<OpenModalHoverImgPost data={this.props.data} />
			</>
		)
	}
}

export default ImgHoverPostUser