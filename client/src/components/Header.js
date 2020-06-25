import React from 'react'
import {Link} from 'react-router-dom'
import GoogleOauth from './GoogleOauth'

const Header = () =>{
	return (
		<div className = 'ui secondary pointing menu'>
		<Link to='/' className='item'>
			Streameee
		</Link>

		<div className='right menu'>
		<Link to= '/streams/edit' className ='item'>
			All Streams
		</Link>
		<GoogleOauth/>
		</div>
</div>
	 )
}

export default Header