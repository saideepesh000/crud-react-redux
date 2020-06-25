import React from 'react'
import {Field, reduxForm} from 'redux-form'


class StreamForm extends React.Component{
	rendermessage=({error, touched})=>{
		if(touched && error){
			return (
					<div className='ui error message'>
						<div className='header'> {error} </div>
					</div> 
				)
		}
	}

	renderInput = ({input, label, meta}) => {
		console.log(meta)
		return (
			<div className='field'>
			<label>{label} </label>
			<input {...input} />
			<div> {this.rendermessage(meta)} </div>
			</div>

			)
	}

	onsubmit = (formvalues) => {
		this.props.onSubmit(formvalues)
	}

	render(){
	return (
			<form onSubmit={this.props.handleSubmit(this.onsubmit)} className='ui form error'>
			<Field name='title' component={this.renderInput} label='Enter Title'/>
			<Field name='description' component={this.renderInput} label='Enter Description'/>
			<button className='ui button primary'>Submit</button> 
			</form>

		)
}
}

const validate = (formvalues) =>{
	const errors = {}

	if(!formvalues.title){
		errors.title='You must enter a Title'
	}
	if(!formvalues.description){
		errors.description='You must enter a Description'
	}

	return errors
}

export default  reduxForm({form: 'StreamForm', validate})(StreamForm)