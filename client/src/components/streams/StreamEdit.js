import _ from 'lodash'
import React from 'react'
import{connect} from 'react-redux'
import {fetchStream, editStream} from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {
	componentDidMount(){
		this.props.fetchStream(this.props.match.params.id);}

	onsubmit = formvalues =>{
		this.props.editStream(this.props.match.params.id, formvalues)
	}

	render(){
		if(!this.props.stream){
			return <div>Loading...</div> 
		}

		return(
			<div>
				<h3>Edit The Stream</h3>
				<StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onsubmit}/>
			</div>
		)
	}
}




const mapstp=(state, ownprops) =>{
	return{stream: state.streams[ownprops.match.params.id]}
}
export default  connect(mapstp,{fetchStream, editStream})(StreamEdit)