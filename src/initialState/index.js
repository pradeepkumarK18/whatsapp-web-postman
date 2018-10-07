const usersInitialState = { users: [{
		name: 'Charlie Linberg',
		id: 1,
		messages: [{
			type: 'sent',
			message: 'Hello Charlie',
			timestamp: '2018-02-21T07:50:01.951Z'
		},{
			type: 'received',
			message: 'hi',
			timestamp: '2018-02-21T07:51:01.951Z'
		},
		{
			type: 'sent',
			message: 'are you there?',
			timestamp: '2018-02-21T07:52:41.951Z'
		},
		{
			type: 'sent',
			message: 'want to talk to you',
			timestamp: '2018-02-21T07:53:01.951Z'
		},
		{
			type: 'received',
			message: 'yes',
			timestamp: '2018-02-21T02:53:31.951Z'
		}]
	}, {
		name: 'Mac Robert',
		id: 2,
		messages: [{
			type: 'sent',
			message: 'Long time after our visit',
			timestamp: '2018-02-21T01:55:01.951Z'
		},
		{
			type: 'received',
			message: 'Hello, how are you',
			timestamp: '2018-02-21T04:01:01.951Z'
		}]
	}],
	selectUser: ''
};

export default usersInitialState;