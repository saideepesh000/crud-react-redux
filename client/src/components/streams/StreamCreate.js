import React from 'react'
import {connect} from 'react-redux' 
import {createStream} from '../../actions'
import StreamForm from './StreamForm'

class StreamCreate extends React.Component{
	

	
	onsubmit = (formvalues) => {
		this.props.createStream(formvalues)
	}

	render(){
	return (
			<div>
				<h3>Create A Stream</h3>
				<StreamForm onSubmit={this.onsubmit} />
			</div>

		)
}
}



export default  connect(null, {createStream})(StreamCreate)