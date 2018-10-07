import React, {Component} from 'react';
import { Div, Input } from 'glamorous';

class SearchUser extends Component {
  render() {

    const {searchUser} = this.props;

    return (
        <Div
          css={{
            background: "#fbfbfb",
            textAlign: "center",
            display: "grid",
            gridTemplateColumns: "100%",
            height: "100%"
          }}
        >
          <Input
            css={{
              width: "85%",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              borderRadius: "6px",
              height: "70%",
              padding: "0px 15px",
              justifySelf: "center",
              alignSelf: "center",
              textAlign: "left",
              background: "#fff",
              color: "#7f7f7f",
              outline: "none",
              ":focus": {
                "::placeholder": {
                  color: "transparent"
                }
              }
            }}
            type="text"
            placeholder={"Search or start new chat"}
            autofocus
            onChange={(e) => searchUser(e.target.value)}
          />
        </Div>
    );
  }
}

export default SearchUser;