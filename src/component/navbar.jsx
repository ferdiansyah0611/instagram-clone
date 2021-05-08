// react
import React from 'react'
import {
  Link,
} from 'react-router-dom'
// context
import DefaultContext from '../context.js'

// libs
import {
  HomeIcon,
  ChatAltIcon,
  LocationMarkerIcon,
  HeartIcon,
} from '@heroicons/react/solid'
import {
  HomeIcon as HomeIconO,
  ChatAltIcon as ChatAltIconO,
  LocationMarkerIcon as LocationMarkerIconO,
  HeartIcon as HeartIconO,
} from '@heroicons/react/outline'

class Navbar extends React.Component {
	constructor(props){
    super(props)
    this.state = {
    	classDropdown: 'hidden flex flex-wrap shadow-md border-t-2 w-44 fixed z-40 right-0 top-0 mt-16 mr-32 bg-white',
    	opacityDropdown: ''
    }
    this.dropdown = this.dropdown.bind(this)
  }
  dropdown(e){
  	e.preventDefault()
  	if(this.state.classDropdown.match('hidden')){
  		return this.setState({
  			classDropdown: 'block flex flex-wrap shadow-md border-t-2 w-44 fixed z-40 right-0 top-0 mt-16 mr-0 md:mr-32 bg-white z-50',
  			opacityDropdown: 'w-full fixed left-0 top-0 h-full z-40'
  		})
  	}
  	return this.setState({
  		classDropdown: 'hidden flex flex-wrap shadow-md border-t-2 w-44 fixed z-40 right-0 top-0 mt-16 mr-10 md:mr-32 bg-white z-50',
  		opacityDropdown: ''
  	})
  }
  render() {
    return (
    	<>
      <nav class="bg-white border border-r-0 border-l-0 border-gray-300 fixed top-0 left-0 w-full z-40">
        <DefaultContext.Consumer>
        {
          result => (
            <>
            <div class="flex">
              <div class="flex hidden lg:block w-1/2 lg:ml-5 md:ml-14 lg:ml-32 lg:justify-start">
                <a href="https://github.com/ferdiansyah0611/instagram-clone" class="p-4 pl-0 font-bold hidden lg:block">Instagram Clone</a>
              </div>
              <div class="flex w-full lg:w-1/2 lg:mr-5 md:mr-14 lg:-mr32 justify-center">
                <Link to="/" class="py-4 px-6 w-1/5 lg:w-auto hover:bg-gray-200 text-blue-400">
                {
                  result.url === '/' ? <HomeIcon className="h-6 mx-auto"/>: <HomeIconO className="h-6 mx-auto"/>
                }
                </Link>
                <Link to="/direct/inbox" class="py-4 px-6 w-1/5 lg:w-auto hover:bg-gray-200 text-green-400">
                {
                  result.url === '/direct/inbox' ? <ChatAltIcon className="h-6 mx-auto"/>: <ChatAltIconO className="h-6 mx-auto"/>
                }
                </Link>
                <Link to="/explore" class="py-4 px-6 w-1/5 lg:w-auto hover:bg-gray-200 text-indigo-400">
                {
                  result.url === '/explore' ? <LocationMarkerIcon className="h-6 mx-auto"/>: <LocationMarkerIconO className="h-6 mx-auto"/>
                }
                </Link>
                <Link to="/account/activity" class="py-4 px-6 w-1/5 lg:w-auto hover:bg-gray-200 text-red-400">
                {
                  result.url === '/account/activity' ? <HeartIcon className="h-6 mx-auto"/>: <HeartIconO className="h-6 mx-auto"/>
                }
                </Link>
                <a href="/" onClick={this.dropdown} class="py-4 px-6 w-1/5 lg:w-auto hover:bg-gray-200 cursor-pointer">
                  <img
                  	src={result.users.avatar}
                  	alt="avatars"
                  	className="rounded-full w-6 h-6 mx-auto"
                  />
                </a>
              </div>
            </div>
            <div className={this.state.classDropdown}>
              <Link to={"/profile/" + result.users.name} className="p-3 text-sm hover:bg-gray-200 w-full">Profile</Link>
              <Link to="/" className="p-3 text-sm hover:bg-gray-200 w-full">Saved</Link>
              <Link to="/" className="p-3 text-sm hover:bg-gray-200 w-full">Setting</Link>
              <Link to="/" className="p-3 text-sm hover:bg-gray-200 w-full">Change Account</Link>
              <Link to="/login" className="p-3 text-sm hover:bg-gray-200 w-full border-t-2">Logout</Link>
            </div>
            <div onClick={this.dropdown} className={this.state.opacityDropdown}></div>
            </>
          )
        }
        </DefaultContext.Consumer>
      </nav>
      </>
    )
  }
}

export default Navbar