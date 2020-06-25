import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamShow from './streams/StreamShow'
import StreamDelete from './streams/StreamDelete'
import StreamList from './streams/StreamList'
import Header from './Header'
import history from '../history'
//160777407521-fb9ms3k9lgd5t3uj5h53ff8ajvhef3b7.apps.googleusercontent.com

const App = () =>{
	return (
		<div className='ui container'>
		<Router history={history}>
			<div>
			<Header />
			<Switch>
			<Route path='/' exact component={StreamList}/>
			<Route path='/streams/new' exact component={StreamCreate}/>
			<Route path='/streams/edit/:id' exact component={StreamEdit}/>
			<Route path='/streams/delete/:id' exact component={StreamDelete}/>
			<Route path='/streams/:id' exact component={StreamShow}/>
			</Switch>
			</div>
		</Router>
		</div>
		)
}

export default App;