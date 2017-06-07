import React from 'react'
import {connect} from 'react-redux'
// import moment from 'moment'


const ChatHistory = (props) => {
    return (
        <div className="chatHistory">
            <h1>{props.talkingTo}</h1>
            {
                props.chat.chats.map((message, i) => {
                    return <p key={i}>{message.text} {message.timestamp}</p>
                })
            }
        </div>
    )
}

const mapState = ({chat}) => ({chat})
export default connect(mapState, null)(ChatHistory)