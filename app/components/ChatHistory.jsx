import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Glyphicon} from 'react-bootstrap'
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

    //Keep the chat window scrolled to the bottom
    componentDidUpdate() {
        this.scrollToBottom();
    }

    //Change the state only if the person I'm talking to is typing. 
    componentWillReceiveProps() {
        if (this.props.talkingTo === "Laura" && this.props.chat.LauraTyping[0]) {
            this.partnerTyping()
        } else if (this.props.talkingTo == "Rob" && this.props.chat.RobTyping[0]) {
            this.partnerTyping()
        }
    }

    //If my partner is typing, set the state to true, which renders "... is typing". After a few seconds, set the state to false.
    partnerTyping() {
        this.setState({partnerIsTyping: true}, () => {
            setTimeout(this.resetState, 2000)
        })
    }

    //When they finish typing, set the state to false, and update the redux store to show they are no longer typing. 
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
                <div className="chat-header">
                     <span className="mdl-list__item-primary-content">
                        <i className="material-icons mdl-list__item-avatar">person</i>
                        <div className="partnerName"><span >{this.props.talkingTo}</span></div>
                         <span className="mdl-list__item-sub-title">Active just now</span>
                        <div className="cog"><Glyphicon glyph="cog" /></div>
                        </span>
                </div>
                <div className="history-container">
                <div className="messageList" 
                    ref={(div) => {          //for scrollToBottom
                    this.messageList = div;
                }}>
                    {  //Display all the chats with their timestamps
                        this.props.chat.chats.map((message, i) => {
                            return (
                            <div key={i}
                                className={message.speaker === this.props.talkingTo ? "incoming message" : "outgoing message"}>
                            <div><img src={message.imgURL}/></div>
                            <div>
                                <p>{message.text} <span className="timestamp">{message.timestamp}</span>
                                </p>
                            </div>
                            </div>
                            )
                        })
                    }
                </div>
                <div className="isTyping">
                    {    //Display ...is typing message if my partner is typing
                        this.state.partnerIsTyping ? this.props.talkingTo + " is typing..." : null 
                    }
                </div>
                </div>
            </div>
        )
    }
}

const mapState = ({ chat }) => ({ chat })
export default connect(mapState, {lauraType, robType})(ChatHistory)