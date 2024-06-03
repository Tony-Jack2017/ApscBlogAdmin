import { socketInstance } from "./request/socket";

const getTestData = () => {
    socketInstance.readMessage("APSC_TEST")
}

export {
    getTestData
}
