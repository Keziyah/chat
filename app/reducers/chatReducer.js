const initialState = {
    chats: [],
    LauraTyping: [false], 
    RobTyping: [false]
}

const UPDATE_CHAT = "UPDATE_CHAT"
const UPDATE_LAURA = "UPDATE_LAURA"
const UPDATE_ROB = "UPDATE_ROB"

export const newChat = (msgData) => {
    return {
        type: UPDATE_CHAT,
        payload: msgData
    }
}

export const lauraType = (bool) => {
    return {
        type: UPDATE_LAURA, 
        payload: bool
    }
}


export const robType = (bool) => {
    return {
        type: UPDATE_ROB, 
        payload: bool
    }
}

export default function chatReducer(state = initialState, action) {

    const newState = Object.assign({}, state)

    switch (action.type) {
        case UPDATE_CHAT:
        newState.chats = [...newState.chats, action.payload]
        break;

        case UPDATE_LAURA: 
        // var lastEle = newState.LauraTyping[newState.LauraTyping.length - 1]
        newState.LauraTyping = [action.payload, ...newState.LauraTyping]
        break; 

        case UPDATE_ROB: 
        // var lastElem = newState.RobTyping[newState.RobTyping.length - 1]
        newState.RobTyping = [action.payload, ...newState.RobTyping]
        break; 

        default:
        return state
    }

    return newState
}

