import React from 'react'
import {connect} from 'react-redux'
import {signIn,signOut} from '../actions'

class GoogleOauth extends React.Component{

	componentDidMount() {
		window.gapi.load('client: auth2',()=>{
			window.gapi.client.init({
				clientId:'',
				scope: 'email'
			}).then(()=>{
				this.auth = window.gapi.auth2.getAuthInstance();
				this.listenAuth(this.auth.isSignedIn.get())
				this.auth.isSignedIn.listen(this.listenAuth)
			})
		})
	}	
	listenAuth = (isloggedin)=>{
		if(isloggedin) {this.props.signIn(this.auth.currentUser.get().getId())}
			else{this.props.signOut()}

	}
	renderAuth(){
		if(this.props.isloggedin===null){
			return null
		}
		else if(this.props.isloggedin)
		{
			return (
				<button onClick={this.auth.signOut} className='ui red google button'>
					<i className='google icon'/>
					Sign Out
				</button>
				)
		}
		else
		{
			return (
			<button onClick={this.auth.signIn} className='ui red google button'>
					<i className='google icon'/>
					Sign In with Google
				</button>
			)
		}
	}

	render() {
		return (
			<div>{this.renderAuth()}</div>
		);
	}


}

const mstp= (state) =>{
	return {isloggedin: state.auth.isloggedin}
}

export default connect(mstp,{signIn,signOut})(GoogleOauth)
