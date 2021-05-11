import React from 'react'
import firebaseDb from 'firebase';
import firebase from 'firebase/app';
import {
  IfFirebaseAuthed,
  IfFirebaseUnAuthed
} from "@react-firebase/auth";
import {
  Redirect
} from 'react-router-dom'

class CreatePost extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			description: '',
			files: '',
			showFile: ''
		}
	}
	componentDidMount(){}
	create(e){
		e.preventDefault()
		const upload = firebaseDb.storage().ref(`/images/${this.state.files.name}`).put(this.state.files)
		upload.on('state_changed', (res) => {
			var progress = (res.bytesTransferred / res.totalBytes) * 100;
			console.log('Upload is ' + progress + '% done');
		}, (e) => {
			console.error(e)
		}
		, () => {
			var description = this.state.description
			upload.snapshot.ref.getDownloadURL().then(function(downloadURL) {
  			  	console.log('File available at', downloadURL);
				firebaseDb.firestore().collection('posts').add({
					user_id: firebase.auth().currentUser.uid,
					description: description,
					image: downloadURL,
					created: firebaseDb.firestore.FieldValue.serverTimestamp()
				}).then(response => {
					console.log('success')
				}).catch(e => {
					console.log(e)
				})
  			});
		})
	}
	render(){
		return(
			<>
			<IfFirebaseAuthed>
			{() => (
				<div className="w-full sm:w-2/5 bg-white border border-gray-300 rounded p-3 mx-auto">
					<h5 className="text-center font-bold my-2 text-2xl">Create Post</h5>
					<img src={this.state.showFile} alt=""/>
					<form onSubmit={(e) => e.preventDefault()}>
						<textarea
							onKeyUp={(e) => this.setState({description: e.target.value})}
							placeholder="Description"
							className="p-3 focus:outline-none focus:ring focus:ring-blue-400 w-full border mt-2">
						</textarea>
						<input
							onChange={(e) => this.setState({files: e.target.files[0], showFile: URL.createObjectURL(e.target.files[0])})}
							className="hidden"
							type="file"
							accept="video/*, image/*"
						/>
						<button
							onClick={(e) => document.querySelector('input[type="file"').click()}
							className="bg-gray-200 p-2 w-full my-2 focus:outline-none focus:ring focus:ring-gray-100">
							Choose File
						</button>
						<button
							className="bg-blue-400 p-4 outline-none focus:ring focus:ring-blue-400 text-white rounded w-full"
							type="submit"
							onClick={(e) => this.create(e)}
						>
							Submit
						</button>
					</form>
				</div>

			)}
			</IfFirebaseAuthed>
			<IfFirebaseUnAuthed>
			{() => (
				<Redirect to="/login"/>
			)}
			</IfFirebaseUnAuthed>
			</>
		)
	}
}

export default CreatePost