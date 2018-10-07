const setupSocket = (url) => {
  const socket = new WebSocket(url)

  socket.onopen = (message) => {
    socket.send(JSON.stringify({
      type: 'SOCKET_MESSAGE_RECEIVED',
      message
    }))
  }

  return socket
}

export default setupSocket
