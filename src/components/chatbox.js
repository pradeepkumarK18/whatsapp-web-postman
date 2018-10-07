import React, { Component } from 'react';
import { Div, Span, Input } from 'glamorous';
import { format } from 'date-fns';
import {connect} from 'react-redux';

class ChatBox extends Component {

render() {

  const handleInputKeyDown = (event) => {
    const enterKeyCode = 13;
    const inputValue = event.target.value;
    if (event.keyCode === enterKeyCode && inputValue) {
      this.props.sendMessage(inputValue)
      this.props.sendSocketMessage(inputValue)
    }
  };

  const messagesListWrapperStyleLeft = {
    padding: "2px 70px",
    maxWidth: "400px",
    alignSelf: "flex-start"
  };

  const messagesListWrapperStyleRight = {
    ...messagesListWrapperStyleLeft,
    alignSelf: "flex-end"
  };


  const messageStyleLeft = {
    border: "1px solid rgba(0, 0, 0, 0.1)",
    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
    fontSize: "0.9em",
    borderRadius: "8px",
    color: "rgb(38, 38, 38)",
    padding: "6px 6px",
    background: "#FFF",
    display: "grid",
    gridTemplateColumns: "auto 50px"
  };

  const messageStyleRight = {
    ...messageStyleLeft,
    background: "rgb(220, 248, 198)"
  };

  const Message = ({ messageStyle, text, timestamp }) => (
	  <Div css={messageStyle}>
	    <Span
	      css={{
	        wordWrap: "break-word",
	        overflow: "hidden"
	      }}
	    >
	      {text}
	    </Span>
	    <Span
	      css={{
	        marginBottom: "-4px",
	        fontSize: "0.7em",
	        alignSelf: "end",
	        justifySelf: "end",
	        color: "rgba(0, 0, 0, 0.45)"
	      }}
	    >
	      1:44pm
	    </Span>
	  </Div>
  );

	let messages = [];

	if(this.props.contact)
		messages = (this.props.contact.messages) ? this.props.contact.messages : [];

	const messagesList = messages.map((msg, index, self) => {
	    let messagesListWrapperStyle;
	    let messageStyle;
	    if (msg.type === "received") {
	      messagesListWrapperStyle = messagesListWrapperStyleLeft;
	      messageStyle = messageStyleLeft;
	    } else {
	      messagesListWrapperStyle = messagesListWrapperStyleRight;
	      messageStyle = messageStyleRight;
	    }

	    return (
	      <Div
	        key={index}
	        css={{
	          ...messagesListWrapperStyle,
	          /* Since the message list style is flex-reversed, applying margin to
	             the first messageBox instead of last */
	          marginBottom: index === 0 ? "20px" : "0"
	        }}
	      >
	        <Message
	          messageStyle={messageStyle}
	          text={msg.message}
	          timestamp={format(new Date(msg.timestamp), "h:mm A")}
	        />
	      </Div>
	    );
	  });


		if (!this.props.contact) {
			return (
				<Div
		            css={{
		              display: 'flex',
		              justifyContent: 'center',
		              height: '100vh'
		            }}
	            >
	            	<Div
			            css={{
			              alignSelf: 'center',
			              padding: '2rem'
			            }}
		            >
		            	Click one of the contacts to see details.
		            </Div>
	            </Div>
			);
		}
		return (
			<Div
	            css={{
	              display: 'grid',
	              gridTemplateRows: '90% 10%',
	              height: '100vh'
	            }}
            >
            	<Div>
            		<Div
				      css={{
				        background: "#E5DDD5",
				        height: "100%",
				        overflowY: "auto",
				        display: "flex",
				        flexFlow: "column-reverse"
				      }}
				    >
				      {messagesList}
				      
				    </Div>
                </Div>
                <Div>
                  	<Div
			          css={{
			            background: "#F5F1EE",
			            padding: "0px 15px",
			            height: "100%",
			            display: "grid",
			            gridTemplateColumns: "100%"
			          }}
			        >
                  		<Div
				            css={{
				              alignSelf: "center",
				              justifySelf: "center",
				              width: "100%"
				            }}
				          >
				            <Div
						        css={{
						          textAlign: "center"
						        }}
						      >
						        <Input
						          css={{
						            width: "95%",
						            padding: "4px 10px",
						            border: "1px solid rgba(0, 0, 0, 0.05)",
						            height: "40px",
						            color: "#7f7f7f",
						            fontSize: "1em",
						            fontWeight: "500",
						            letterSpacing: "0.5px",
						            outline: "none",
						            ":focus": {
						              color: "#545454"
						            }
						          }}
						          type="text"
						          placeholder="Type a message"
						          onKeyDown={(e) => handleInputKeyDown(e)}
						        />
						      </Div>
				          </Div>
                  	</Div>
                </Div>				
			</Div>
		);
	}
}

function mapStateToProps(state) {
  return {
    contact: state.selectedUser,
  };
}

export default connect(mapStateToProps, null)(ChatBox)