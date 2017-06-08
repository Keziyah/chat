import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import NewMessage from './NewMessage'
import ChatHistory from './ChatHistory'
import { connectMe, sendMessage, getMessage, youTyping } from './sockets.js'

class ChatSpace extends Component {
    constructor(props) {
        super(props)

        this.state = {
            partnerIsTyping: false
        }

        this.partnerTyping = this.partnerTyping.bind(this)
        this.resetState = this.resetState.bind(this)
    }

    componentDidMount() {
        connectMe()
        getMessage()
        // youTyping(this.partnerTyping)
    }

    resetState() {
        this.setState({ partnerIsTyping: false })
    }

//Change partnerIsTyping to true, but delay changing it back to false when the user stops typing
    partnerTyping() {
        this.setState({ partnerIsTyping: true }, () => {
            setTimeout(this.resetState, 3000)
    })
}

render() {
    return (
        <div>
            <Col sm={6}>
                <ChatHistory talkingTo={this.props.talkingTo} from={this.props.from} partnerIsTyping={this.state.partnerIsTyping} />
                <NewMessage name={this.props.from} sendMessage={sendMessage} partnerTyping={this.partnerTyping}/>
            </Col>
        </div>
    )
}
}

export default ChatSpace
