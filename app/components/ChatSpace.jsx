import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import NewMessage from './NewMessage'
import ChatHistory from './ChatHistory'
import {connectMe, sendMessage, getMessage} from './sockets.js'

class ChatSpace extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        connectMe()
    }

    render() {
        return (
            <div>
                <Col sm={6}>
                    <ChatHistory talkingTo={this.props.talkingTo} from={this.props.from} />
                    <NewMessage name={this.props.from} sendMessage={sendMessage}/>
                </Col>
            </div>
        )
    }
}

export default ChatSpace
