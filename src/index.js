import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import AppContainer from './containers'
import rootReducer from './reducers'
import usersInitialState from './initialState'
import setupSocket from './sockets'
import createMySocketMiddleware from './middleware/socketMiddleware'

const socket = setupSocket('wss://echo.websocket.org')

const socketMiddleware = createMySocketMiddleware(socket);

const store = createStore(rootReducer, usersInitialState, applyMiddleware(socketMiddleware));


render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)