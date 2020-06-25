import React from 'react'
import Modal from '../Modal'
import history from '../../history'
import {connect} from 'react-redux'
import {fetchStream, deleteStream} from '../../actions'
import {Link} from 'react-router-dom'


class StreamDelete extends React.Component{
	componentDidMount(){
		this.props.fetchStream(this.props.match.params.id)
	}
	renderActions(){
	//const {id}= this.props.match.params
		return(
			<React.Fragment>
			<button onClick={()=>this.props.deleteStream(this.props.match.params.id)} className='ui button negative'> DELETE</button>
			<Link to='/' className='ui button'> CANCEL</Link>
			</React.Fragment>
			)
		}
	renderDesc(){
		if(!this.props.stream){
			return 'R U SURE U WANT TO DELETE THIS STREAM'
		}
		return `ARE U SURE U WANT TO DELETE THE STREAM WITH TITLE: ${this.props.stream.title}`
	}
		render(){
			return (<div> 
			<Modal 
			title='Delete Stream'
			description={this.renderDesc()}
			actions={this.renderActions()}
			onDismiss={() => history.push('/')}
			/> 
	}
</div>)
}
}

const mapstp=(state, ownprops)=>{
	return{stream: state.streams[ownprops.match.params.id]}
}

export default  connect(mapstp,{fetchStream, deleteStream})(StreamDelete)