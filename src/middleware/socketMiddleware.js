const createMySocketMiddleware = (socket) => {
    return storeAPI => {

        socket.onopen("message", (message) => {
            storeAPI.dispatch({
                type : "SOCKET_MESSAGE_RECEIVED",
                payload : message
            });
        });

        return next => action => {
            if(action.type === "SEND_WEBSOCKET_MESSAGE") {
                socket.send(action.payload);
                return;
            }

            return next(action);
        }
    }
}

export default createMySocketMiddleware
