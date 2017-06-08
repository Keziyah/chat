const initialState = {
    chats: []
}

const UPDATE_CHAT = "UPDATE_CHAT"

export const newChat = (text, speaker, timestamp) => {
    return {
        type: UPDATE_CHAT,
        payload: {text, speaker, timestamp}
    }
}

export default function chatReducer(state = initialState, action) {

    const newState = Object.assign({}, state)

    switch (action.type) {
        case UPDATE_CHAT:
        newState.chats = [...newState.chats, action.payload]
        break;

        default:
        return state
    }

    return newState
}

