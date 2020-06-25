const INITIAL_STATE = {
	isloggedin: null,
	userId: null
}

export default(state=INITIAL_STATE, action) => {
	switch(action.type){
		case 'SIGN_IN': return{...state, isloggedin:true, userId: action.payload}


		case 'SIGN_OUT':return{...state, isloggedin:false, userId: null}

		default: return state
	}
}