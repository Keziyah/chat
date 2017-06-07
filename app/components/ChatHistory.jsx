import React from 'react'

const ChatHistory = (props) => {
    return (
        <div className="chatHistory">
            <h1>{props.talkingTo}</h1>
        </div>
    )
}

export default ChatHistory