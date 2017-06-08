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

export const lauraType = () => {
    return {
        type: UPDATE_LAURA, 
        payload: "im laura"
    }
}


export const robType = () => {
    return {
        type: UPDATE_ROB, 
        payload: "im rob"
    }
}

export default function chatReducer(state = initialState, action) {

    const newState = Object.assign({}, state)

    switch (action.type) {
        case UPDATE_CHAT:
        newState.chats = [...newState.chats, action.payload]
        break;

        case UPDATE_LAURA: 
        var lastEle = newState.LauraTyping[newState.LauraTyping.length - 1]
        newState.LauraTyping = [...newState.LauraTyping, action.payload]
        break; 

        case UPDATE_ROB: 
        var lastElem = newState.RobTyping[newState.RobTyping.length - 1]
        newState.RobTyping = [...newState.RobTyping, action.payload]
        break; 

        default:
        return state
    }

    return newState
}

