import React from 'react'
import {
  Link,
} from 'react-router-dom'
import {
  HeartIcon,
  BookmarkIcon
} from '@heroicons/react/solid'
import {
  ChatAlt2Icon as ChatAlt2IconO,
  ShareIcon as ShareIconO,
  HeartIcon as HeartIconO,
  BookmarkIcon as BookmarkIconO,
} from '@heroicons/react/outline'

class ActionCardPost extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			liked: false,
			marked: false
		}
		this.liked = this.liked.bind(this)
		this.marked = this.marked.bind(this)
	}
	liked(e){
		e.preventDefault()
		if(this.state.liked){
			return this.setState({liked: false})
		}
		return this.setState({liked: true})
	}
	marked(e){
		e.preventDefault()
		if(this.state.marked){
			return this.setState({marked: false})
		}
		return this.setState({marked: true})
	}
	render(){
		return(
			<div className="flex p-2">
				<a onClick={this.liked} className="p-1" href="/">
				{
					this.state.liked ?
						<HeartIcon className="h-8 w-7"/>
					:
						<HeartIconO className="h-8 w-7"/>
				}
				</a>
				<Link className="p-1" to="/">
					<ChatAlt2IconO className="h-8 w-7"/>
				</Link>
				<Link className="p-1 w-3/4" to="/">
					<ShareIconO className="h-8 w-7"/>
				</Link>
				<a onClick={this.marked} className="p-1 ml-14" href="/">
				{
					this.state.marked ?
						<BookmarkIcon className="h-8 w-7"/>
					:
						<BookmarkIconO className="h-8 w-7"/>
				}
				</a>
			</div>
		)
	}
}

export default ActionCardPost