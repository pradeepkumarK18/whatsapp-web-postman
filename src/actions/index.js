const actions = {
	sendMessage: (message) => {
		return {
			type: 'SEND_MESSAGE',
			message
		}
	},
	selectUser: (user) => {
		return {
			type: 'SELECT_USER',
			user
		}
	},
	searchUser: (value) => {
		return {
			type: 'SEARCH_USER',
			value
		}
	},
	sendSocketMessage: (message) => {
    	return {
        	type : "SEND_WEBSOCKET_MESSAGE",
        	message
    	}
    }
};
export default actions;