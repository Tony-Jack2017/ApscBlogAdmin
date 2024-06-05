import { socketInstance } from "./config/socket";

const getTestData = () => {
    socketInstance.readMessage("APSC_TEST")
}

export {
    getTestData
}
