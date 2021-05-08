// react
import React from 'react'
import {
  Link,
} from 'react-router-dom'
import {
  DotsHorizontalIcon,
} from '@heroicons/react/solid'

import FooterCardPost from './footercardpost.jsx'
import ActionCardPost from './actioncardpost.jsx'
import OpenModalCardPost from './openmodalcardpost.jsx'

class CardPost extends React.Component{
	constructor(props){
		super(props)
		this.state = {}
	}
	render(){
		return(
			<>
			{
				this.props.post.map((data, key) => {
					return(
						<div className="bg-white w-full border border-gray-300 mt-5 rounded z-50">
							<div className="header-card p-3 flex">
								<img
									src={data.avatar}
									alt="avatars"
									className="rounded-full w-12 h-12 border-2 border-red-400"
								/>
								<Link to={'/profile/' + data.name} className="w-1/2">
									<p className="font-bold text-sm hover:underline cursor-pointer p-3">{data.name}</p>
								</Link>
								<div className="w-1/2"></div>
								<DotsHorizontalIcon className="h-7 cursor-pointer" />
							</div>
							<div className="body-card">
								<img
									src={data.img}
									alt="post"
									className="w-full"
								/>
								<ActionCardPost/>
								<p className="p-3 pt-0 font-bold text-sm">1,000 Like</p>
								<div className="p-3 pt-0">
									<p className="text-sm">
										<Link to={'/profile/' + data.name} className="font-bold hover:underline cursor-pointer">{data.name} </Link>
										<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia deleniti eos aut earum ea. Aperiam consequatur, quisquam. Deserunt fugiat quidem impedit tenetur. Voluptatum quam, placeat cum adipisci doloremque voluptate quia?</span>
									</p>
									<OpenModalCardPost data={data}/>
									{
										this.props.comment[data.id] && this.props.comment[data.id].length >= 1 ? this.props.comment[data.id].map((comment, commentKey) => {
											return(
												<p className="text-sm">
													<Link to={'/profile/' + comment.name} className="font-bold hover:underline cursor-pointer">{comment.name} </Link> 
													{comment.msg}
												</p>
											)
										})
										: false
									}
									<p className="text-gray-500 text-sm mt-2">20 hours ago</p>
								</div>
								<FooterCardPost/>
							</div>
						</div>

					)
				})
			}
			</>
		)
	}
}

export default CardPost