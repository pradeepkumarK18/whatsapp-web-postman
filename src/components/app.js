import React, { Component } from 'react';
import UsersList from '../components/userslist'
import ChatBox from '../components/chatbox'
import SearchUser from '../components/searchuser'
import glamorous, { Div } from 'glamorous';

export default class App extends Component {
  render() {

  	const AppLayout = glamorous.div({
    	display: 'grid',
    	gridTemplateColumns: '3fr 7fr',
    	boxShadow: '0px 0px 8px #c4c4c4'
  	});

    return (
      <AppLayout>
      	<Div
	        css={{
	          display: "grid",
	          gridTemplateRows: "16% 8% 76%",
	          height: "100vh"
	        }}
	    >
	    	<Div
	            css={{
	              display: 'grid',
	              gridTemplateRows: '10% 6% 84%',
	              height: '100vh',
	              borderRight: '1px solid rgba(0, 0, 0, 0.05)'
	            }}
          	>
          		<Div css={{ borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
	             	<SearchUser searchUser={this.props.searchUser} />
	            </Div>
	            <Div>
              	  	<UsersList users={this.props.users}  selectUser={this.props.selectUser} />
	            </Div>
          	</Div>
      	</Div>
      	<Div
	        css={{
	          display: "grid",
	          gridTemplateRows: "1fr",
	          height: "100%"
	        }}
	    >
      		<ChatBox sendMessage={this.props.sendMessage} sendSocketMessage={this.props.sendSocketMessage}/>
      	</Div>
      </AppLayout>
    );
  }
}
