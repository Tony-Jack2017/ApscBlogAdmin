let socket: WebSocket

export type WsData = {
    status: "SUCCESS" | "FAIL",
    code: string
    data: any
    path: string
    message: string
}

export type SocketInstanceType = {
    sendMessage: Function
    readMessage: Function
}

const createWebSocket = (url: string) => {
    socket = new WebSocket(url)
}

const initWebSocket = () => {
    socket.onopen = () => {
    }
    socket.onerror = () => {
    }
    socket.onclose = () => {
    }
    socket.onmessage = (event) => {
        const message = event.data
        if(message) {
            console.log(message)
        }
    }
}

const socketInstance : SocketInstanceType = {
    sendMessage: () => {},
    readMessage: () => {}
}

export {
    createWebSocket,
    initWebSocket,
    socketInstance
}