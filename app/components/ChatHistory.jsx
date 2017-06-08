import React, { Component } from 'react'
import { connect } from 'react-redux'


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

    componentDidUpdate() {
        this.scrollToBottom();
    }

    // componentDidMount() {
    //     this.props.getMessage()
    // }

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