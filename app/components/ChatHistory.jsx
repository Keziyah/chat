import React, { Component } from 'react'
import { connect } from 'react-redux'
import {lauraType, robType} from '../reducers/chatReducer.js'

class ChatHistory extends Component {
    constructor(props) {
        super(props)

        this.state = {partnerIsTyping: false}

        this.partnerTyping = this.partnerTyping.bind(this); 
        this.resetState = this.resetState.bind(this)
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

    componentWillReceiveProps() {
        if (this.props.talkingTo === "Laura" && this.props.chat.LauraTyping[0]) {
            this.partnerTyping()
        } else if (this.props.talkingTo == "Rob" && this.props.chat.RobTyping[0]) {
            this.partnerTyping()
        }
    }

    partnerTyping() {
        this.setState({partnerIsTyping: true}, () => {
            setTimeout(this.resetState, 3000)
        })
    }

    resetState() {
        this.setState({partnerIsTyping: false})
        if (this.props.talkingTo === "Laura") {
            this.props.lauraType(false)
        } else if (this.props.talkingTo === "Rob") {
            this.props.robType(false)
        }
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
                <div>
                    {
                        this.state.partnerIsTyping ? this.props.talkingTo + " is typing..." : null 
                    }
                </div>
            </div>
        )
    }
}

const mapState = ({ chat }) => ({ chat })
export default connect(mapState, {lauraType, robType})(ChatHistory)