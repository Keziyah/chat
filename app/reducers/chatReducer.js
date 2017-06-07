const initialState = {
    chats: [], 
    speaker: []
}

const UPDATE_CHAT = "UPDATE_CHAT"
const UPDATE_SPEAKER = "UPDATE_SPEAKER"

export const newChat = (message) => {
    return {
        type: UPDATE_CHAT,
        payload: message
    }
}

export const newSpeaker = (name) => {
    return {
        type: UPDATE_SPEAKER,
        payload: name
    }
}

export default function chatReducer(state = initialState, action) {

    const newState = Object.assign({}, state)

    switch (action.type) {
        case UPDATE_CHAT:
        newState.chats = [action.payload, ...newState.chats]
        break;

        case UPDATE_SPEAKER:
        newState.speaker = [action.payload, ...newState.speaker]
        break;

        default:
        return state
    }

    return newState
}

