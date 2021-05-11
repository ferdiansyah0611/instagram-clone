import React from 'react'
import DefaultContext from '../context.js'
import {
	PencilAltIcon as PencilAltIconO,
	ChevronDownIcon as ChevronDownIconO,
	InformationCircleIcon as InformationCircleO,
	EmojiHappyIcon as EmojiHappyIconO,
	HeartIcon as HeartIconO,
	PhotographIcon as PhotographIconO,
	ReplyIcon as ReplyIconO,
	DotsHorizontalIcon as DotsHorizontalO,
	XIcon as XIconO,
	PlusCircleIcon as PlusCircleIconO,
	ChevronLeftIcon as ChevronLeftIconO
} from '@heroicons/react/outline'
import '../style/directinbox.css'
import {
  IfFirebaseAuthed,
  IfFirebaseUnAuthed
} from "@react-firebase/auth";
import {
  Redirect
} from 'react-router-dom'
import firebase from 'firebase'

class DirectInbox extends React.Component{
	static contextType = DefaultContext
	constructor(props){
		super(props)
		this.state = {
			activeKeyTabs: 0,
			tabsDetail: {
				id: '',
				name: ''
			},
			userChat: [
				{id: 1, name: 'user-1'},
				{id: 2, name: 'user-2'},
				{id: 3, name: 'user-3'},
				{id: 4, name: 'user-4'},
				{id: 5, name: 'user-5'},
				{id: 6, name: 'user-6'},
				{id: 7, name: 'user-7'},
				{id: 8, name: 'user-8'},
				{id: 9, name: 'user-9'},
				{id: 10, name: 'user-10'}
			],
			chats: [],
			user: {},
			sendChat: '',
			chat: [
				[
					[{id: 1, name: 'ferdiansyah', msg: 'my chat', who: 'am'}],
					[{id: 2, name: 'fadhila', msg: 'you chat', who: 'you'}]
				]
			],
			opacityModal: 'hidden fixed top-0 left-0 bg-black bg-opacity-75 w-full h-full z-40',
			statusModal: false
		}
		this.changeTab = this.changeTab.bind(this)
		this.modalCreateChat = this.modalCreateChat.bind(this)
		this.closeChat = this.closeChat.bind(this)
		this.db = firebase.database()
	}
	modalCreateChat(e){
		if(this.state.statusModal){
			this.setState({opacityModal: 'hidden fixed top-0 left-0 bg-black bg-opacity-75 w-full h-full z-40', statusModal: false})
			return true
		}
		this.setState({opacityModal: 'block fixed top-0 left-0 bg-black bg-opacity-75 w-full h-full z-40', statusModal: true})
		return true
	}
	changeTab(e){
		e.preventDefault()
		this.setState({activeKeyTabs: Number(e.target.dataset.key)})
		if(document.body.offsetWidth < 768){
			document.querySelector('#list-chat').classList.add('hidden')
			document.querySelector('#chat').classList.remove('hidden')
		}
	}
	closeChat(e){
		if(document.body.offsetWidth < 768){
			document.querySelector('#list-chat').classList.remove('hidden')
			document.querySelector('#chat').classList.add('hidden')
		}
	}
	sendChat(e){
		e.preventDefault()
		this.db.ref('messages').push({
			from_user: this.state.user.uid,
		    messages: this.state.sendChat,
		    to_user: 1
		})
	}
	componentDidMount(){
		document.title = 'Inbox - Chat | Instagram Clone'
		this.context.setState('url', '/direct/inbox')
		window.db = this.db
		const user = firebase.auth().currentUser
		this.setState({user: user})
		this.db.ref('messages').on('value', snapshot => {
			/*this.setState({chats: []})*/
			snapshot.forEach((snap) => {
				alert(snap.val())
				this.setState({chats: [...this.state.chats, snap.val()]})
			})
		})
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
					<section>
						<DefaultContext.Consumer>
						{
							result => (
							<>
								<div id="opacity-modal" className={this.state.opacityModal}>
								{
									/*modal opened*/
									this.state.statusModal ?
										<div className="m-auto bg-white w-72 sm:w-96 h-80 rounded-2xl mt-40">
											<div className="flex border border-gray-400 border-l-0 border-r-0 border-t-0">
												<div onClick={this.modalCreateChat} className="p-4 cursor-pointer">
													<XIconO className="h-6"></XIconO>
												</div>
												<div className="w-1/2 p-4">
													<h5 className="font-bold">New Chat</h5>
												</div>
												<div className="w-1/2 p-4 text-right">
													<p className="text-blue-400 text-opacity-70">Next</p>
												</div>
											</div>
											<div className="flex border border-gray-400 border-l-0 border-r-0 border-t-0">
												<h5 className="p-4 font-bold w-12">To: </h5>
												<input type="text" placeholder="Search..." className="w-3/4 outline-none p-4" />
											</div>
											<div className="block p-3 h-48 overflow-auto">
												<p className="font-bold">Recommended</p>
												{
													[1,2,3,4,5,6,7,8,9,10].map((data, key) => {
														return(
															<div className="flex mt-2 mb-2 cursor-pointer">
																<div className="w-1/4">
																	<img
																		src={result.users.avatar}
																		alt="avatars"
																		className="rounded-full w-14 h-14"
																	/>
																</div>
																<p className="w-2/4 flex flex-wrap">
																	<span>{result.users.name}</span>
																	<span className="text-gray-400 text-opacity-75">{result.users.name}</span>
																</p>
																<PlusCircleIconO className="h-10 w-1/4"></PlusCircleIconO>
															</div>
														)
													})
												}
											</div>
										</div>
									: false
								}
								</div>
								<div className="flex flex-wrap bg-white border border-gray-300">
									<div className="w-full md:w-1/3" id="list-chat">
										<div className="flex justify-center border border-t-0 border-l-0 border-r-0 border-gray-300">
											<div className="cursor-pointer font-bold p-5 text-center w-4/5">
												<p className="flex justify-center text-center">
													<span className="">{result.users.name}</span> 
													<ChevronDownIconO className="h-6 ml-3"/>
												</p>
											</div>
											<span onClick={this.modalCreateChat} className="flex justify-center w-1/5 cursor-pointer">
												<PencilAltIconO className="h-8 mt-4" />
											</span>
										</div>
										<div className="block overflow-auto h-96">
										{
											this.state.userChat.map((data, key) => {
												return(
													<a onClick={this.changeTab} data-key={key} key={key} href="/" className="hover:bg-gray-200 w-full flex flex-wrap p-3">
														<img data-key={key} className="rounded-full w-10 lg:w-16 h-10 lg:h-16" src={result.users.avatar} alt=""/>
														<span data-key={key} className="flex flex-wrap ml-2 w-1/2">
															<span data-key={key} className="w-full text-sm mt-1 lg:mt-2">{data.name}</span>
															<span data-key={key} className="w-full text-sm text-gray-400">Active</span>
														</span>
													</a>
												)
											})
										}
										</div>
									</div>
									{
										/*chat*/
									}
									<div className="w-full md:w-2/3 relative hidden md:block" id="chat">
										<div className="border border-l-0 md:border-l border-t-0 border-r-0 border-b-0 border-gray-300 h-full md:h-full">
											<div className="flex justify-center border border-t md:border-t-0 border-l-0 border-r-0 border-gray-300">
												<span className="flex justify-center pl-8 cursor-pointer" onClick={this.closeChat}>
													<ChevronLeftIconO className="h-8 mt-4" />
												</span>
												<div className="cursor-pointer font-bold p-5 text-center w-4/5">
													<p className="flex text-center">
														<img
															src={result.users.avatar}
															alt="avatars"
															className="rounded-full w-6 h-6 mr-3"
														/>
														<span className="">{this.state.userChat[this.state.activeKeyTabs].name}</span>
													</p>
												</div>
												<span className="flex justify-center w-1/5 cursor-pointer">
													<InformationCircleO className="h-8 mt-4" />
												</span>
											</div>
											<div className="overflow-auto h-screen md:h-80 pb-10">
											{
												this.state.userChat.map((data, key) => {
													return(
														<div className={this.state.activeKeyTabs === key ? 'block p-3 relative': 'hidden p-3 relative'}>
														{
															this.state.chats.map((data, key) => {
																return data.from_user === this.state.user.uid ?
																	<div className="chat flex justify-end mb-4">
																		<p className="p-3 flex action-chat">
																			<EmojiHappyIconO className="h-6 pl-2 pr-2 text-gray-400 cursor-pointer"></EmojiHappyIconO>
																			<ReplyIconO className="h-6 pl-2 pr-2 text-gray-400 cursor-pointer"></ReplyIconO>
																			<DotsHorizontalO className="h-6 pl-2 pr-2 text-gray-400 cursor-pointer"></DotsHorizontalO>
																		</p>
																		<p className="rounded-2xl border border-gray-300 p-3 bg-gray-200">{data.messages}</p>
																		<img
																			src={result.users.avatar}
																			alt="avatars"
																			className="rounded-full w-6 h-6 ml-3"
																		/>
																	</div>
																:
																	<div className="chat flex justify-start mb-4">
																		<img
																			src={result.users.avatar}
																			alt="avatars"
																			className="rounded-full w-6 h-6 mr-3"
																		/>
																		<p className="rounded-2xl border border-gray-300 p-3">{data.messages}</p>
																		<p className="p-3 flex action-chat">
																			<EmojiHappyIconO className="h-6 pl-2 pr-2 text-gray-400 cursor-pointer"></EmojiHappyIconO>
																			<ReplyIconO className="h-6 pl-2 pr-2 text-gray-400 cursor-pointer"></ReplyIconO>
																			<DotsHorizontalO className="h-6 pl-2 pr-2 text-gray-400 cursor-pointer"></DotsHorizontalO>
																		</p>
																	</div>

															})
														}
														</div>

													)
												})
											}
											</div>
										</div>
										<div className="p-2 absolute bottom-0 left-0 w-full">
											<EmojiHappyIconO className="h-8 cursor-pointer bottom-0 left-0 ml-5 mb-3 absolute"/>
											<form onSubmit={(e) => this.sendChat(e)}>
												<input
													onKeyUp={(e) => this.setState({sendChat: e.target.value})}
													className="p-2 rounded-3xl w-full border border-gray-300 outline-none pl-12 pr-24"
													type="text"
													placeholder="Send Chat..."
												/>
											</form>
											<HeartIconO className="h-8 cursor-pointer bottom-0 right-0 mr-5 mb-3 absolute"></HeartIconO>
											<PhotographIconO className="h-8 cursor-pointer bottom-0 right-0 mr-16 mb-3 absolute"></PhotographIconO>
										</div>
									</div>
								</div>
							</>
							)
						}
						</DefaultContext.Consumer>
					</section>

				)}
				</IfFirebaseAuthed>
			</>
		)
	}
}

export default DirectInbox