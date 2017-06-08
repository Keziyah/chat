import React, { Component } from 'react'
import { connect } from 'react-redux'
// import {youTyping} from './sockets.js'
import {EventEmitter} from 'fbemitter'

class ChatHistory extends Component {
    constructor(props) {
        super(props)
    }

    scrollToBottom() {
        const scrollHeight = this.messageList.scrollHeight;
        const height = this.messageList.clientHeight;
        const maxScrollTop = scrollHeight - height;
        this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }

    componentDidMount() {
        var emitter = new EventEmitter()
        emitter.addListener('other user typing', (...args) => {
            console.log(...args, "DID MOUNT")
        })
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        return (
            <div className="chatHistory">
                <h1>{this.props.talkingTo}</h1>
                <div className="messageList" 
                    ref={(div) => {
                    this.messageList = div;
                }}>
                    {
                        this.props.chat.chats.map((message, i) => {
                            return <p key={i}
                                className={message.speaker === this.props.talkingTo ? "text-left" : "text-right"}>
                                {message.text} <span className="timestamp">{message.timestamp}</span>
                            </p>
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapState = ({ chat }) => ({ chat })
export default connect(mapState, null)(ChatHistory)