import React from 'react'
import {
  EmojiHappyIcon as EmojiHappyIconO,
} from '@heroicons/react/outline'

class FooterCardPost extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			addComment: ''
		}
		this.addComment = this.addComment.bind(this)
	}
	addComment(e){
		this.setState({addComment: e.target.value})
	}
	render(){
		return(
			<div className="flex p-1 border border-l-0 border-r-0 border-b-0 border-gray-300">
				<a href="/" className="p-1">
					<EmojiHappyIconO className="h-8" />
				</a>
				<input onKeyUp={this.addComment} defaultValue={this.state.addComment} className="outline-none ml-2 w-4/5" placeholder="Add comment..." type="text"/>
				<button
					href="/"
					disabled={true}
					className={this.state.addComment.length >= 1 ? 'w-1/5 text-center text-blue-400 font-bold p-2': 'w-1/5 text-center text-blue-400 font-bold p-2 text-opacity-50'}>
				Send</button>
			</div>
		)
	}
}

export default FooterCardPost