import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchStreams} from '../../actions'

class StreamList extends React.Component{
	componentDidMount() {
		this.props.fetchStreams()
	}

	renderadmin = (stream,id) =>{
		if(stream.userId === this.props.currentuserid){
			return(
					<div className='right floated content'>
						<Link to={`./streams/edit/${stream.id}`} className='ui button primary'>Edit</Link>
						<Link to={`./streams/delete/${stream.id}`} className='ui button negative'> Delete </Link>
					</div>
				)
		}
	}

	renderlist(){
		return (this.props.streams.map(stream =>{
			return(
				<div className='item' key={stream.id}>
				{this.renderadmin(stream)}
					<i className='large middle aligned icon camera'/>
						<div className='content'>
						<Link to={`/streams/${stream.id}`}>{stream.title}</Link>
						<div className='description'>{stream.description}</div>
						</div>
				</div>
				)
		}))		
	}

	rendercreatebutton = () =>{
		if(this.props.isSignedIn){
			return(
				<div style={{textAlign: 'right'}}> 
					<Link to="/streams/new" className='ui button primary'>
					Create Stream
					</Link>
				</div>
			)
		}
	} 


	render(){
		return (
			<div>
				<h2>Streams</h2>
				<div className = 'ui celled list'>{this.renderlist()}</div>
				{this.rendercreatebutton()}
			</div>
		);
	}
}

const mapstp = state =>{
	return {streams: Object.values(state.streams),
		currentuserid: state.auth.userId,
		isSignedIn: state.auth.isloggedin
	}
}
export default connect(mapstp,{fetchStreams})(StreamList)