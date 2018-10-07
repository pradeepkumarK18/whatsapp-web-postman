import deepCopy from '../utils'
import usersInitialState from '../initialState'

function reducer(state = usersInitialState, action) {
	let modifiedState;
	switch (action.type) {
		case 'SEND_MESSAGE':
			modifiedState = deepCopy(state);
	      	for(let i=0; i<modifiedState.users.length; i++) {
	        	if(modifiedState.users[i].id === modifiedState.selectedUser.id) {
	          		modifiedState.users[i].messages.push({
	          			type: 'sent',
						message: action.message,
						timestamp: new Date().toISOString()
					});
					modifiedState.users[i].messages.push({
	          			type: 'received',
						message: action.message,
						timestamp: new Date().toISOString()
					});
	          		break;
	        	}
	      	}
	      	return modifiedState;
	    case 'SEARCH_USER':
		    const value = action.value;
		    const modifiedList = usersInitialState.users.filter(function(val){
		      return val.name.toLowerCase().search(value.toLowerCase()) !== -1;
		    });
		    if(modifiedList.length > 0)
		      return { 'selectedUser': '', users: modifiedList}
		    else if(modifiedList.length === 0)
		      return { 'selectedUser': '', users: modifiedList}
		    else
		      return usersInitialState
		case 'SELECT_USER':
			return { 'selectedUser': action.user, users: state.users};
		default:
			return state;
	}
};


export default reducer;