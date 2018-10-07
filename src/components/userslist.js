import React, {Component} from 'react'
import glamorous, { Div, Label, Img } from 'glamorous';
import { format } from 'date-fns';

class UsersList extends Component {

  renderList() {

    const FriendsListItemBox = glamorous.div(
      {
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        background: '#fff',
        wordWrap: 'break-word',
        display: 'grid',
        height: '80px',
        zIndex: '10',
        gridTemplateColumns: '20% 55% 25%',
        ':hover': {
          background: '#F4F5F5',
          cursor: 'pointer'
        }
      }
    );

    const NameAndLastChat = ({ name, lastChat }) => {
      const LastChat = glamorous.p({
        width: '260px',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: '0.9em',
        margin: '0px'
      });
      return (
        <Div css={{ paddingLeft: '10px' }}>
          <Div>
            <Label>{name}</Label>
          </Div>
          <Div>
            <LastChat>{lastChat}</LastChat>
          </Div>
        </Div>
      );
    };

    return this.props.users.map((user, index) => {

      let lastChatMessage;
      let lastChatTimeStamp;

      if(user.messages) {
        lastChatMessage = user.messages[0].message;
        lastChatTimeStamp = format(new Date(user.messages[0].timestamp), 'h:mm A')
      }

      return (
        <FriendsListItemBox key={index} onClick={() => this.props.selectUser(user)}>
          <Div
            css={{
              display: 'grid',
              gridTemplateColumns: '100%'
            }}
          >
            <Img
              css={{
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                alignSelf: 'center',
                justifySelf: 'center'
              }}
              alt=""
              src="https://gravatar.com/avatar/ffeece649256f09f8d52ebc17a8cc5e3?s=200&d=https%3A%2F%2Fscotch.io%2Fwp-content%2Fthemes%2Fscotchpress%2Fimg%2Flogo-large.png"
            />
          </Div>
          <Div
            css={{
              width: '100%',
              alignSelf: 'center',
              justifySelf: 'start',
              ':hover': {
                cursor: 'pointer'
              }
            }}
          >
            <NameAndLastChat name={user.name} lastChat={lastChatMessage}/>
          </Div>
          <Div
            css={{
              color: 'rgba(0, 0, 0, 0.4)',
              fontSize: '0.8em',
              display: 'grid',
              height: '50%',
              width: '100%',
              alignSelf: 'center'
            }}
          >
            <Label
              css={{
                alignSelf: 'start',
                justifySelf: 'center'
              }}
            >
              {lastChatTimeStamp}
            </Label>
          </Div>
        </FriendsListItemBox>
      );
    });
  }
  render() {
    return (
        <Div
        >
          {this.renderList()}
        </Div>
    );
  }
}

export default UsersList
