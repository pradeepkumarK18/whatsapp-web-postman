import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import App from '../components/app'
import actions from '../actions'

const AppContainer = connect(
  function mapStateToProps(state) {
    return {
      users: state.users,
      selectedUser: state.selectedUser
    };
  },
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
  }
)(App);

export default AppContainer;