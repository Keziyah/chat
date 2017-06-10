import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import moment from 'moment'
import {connect} from 'react-redux'
import {lauraType, robType} from '../reducers/chatReducer.js'
import NewMessage from './NewMessage'
import ChatHistory from './ChatHistory'
import { EventEmitter } from 'fbemitter'
var emitter;
import { connectMe, sendMessage, getMessage } from './sockets.js'

class ChatSpace extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            value: '', 
            partnerIsTyping: false };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
        emitter.emit('other user typing', this.props.from)
    }


    handleSubmit(e) {
        e.preventDefault();
        sendMessage(this.state.value, this.props.from, moment().format("hh:mm:ss a"))
        this.setState({ value: "" })
    }

    componentDidMount() {
        connectMe()
        getMessage()
        emitter = new EventEmitter()
        emitter.addListener('other user typing', (name) => {
            if(name === "Laura") {
                this.props.lauraType(true)
            } else {
                this.props.robType(true)
            }
        })
    }

    render() {
        return (
            <div>
                <Col sm={6}>
                    <ChatHistory talkingTo={this.props.talkingTo} from={this.props.from} />
                    <NewMessage 
                    handleSubmit={this.handleSubmit} value={this.state.value}
                    handleChange={this.handleChange}/>
                </Col>
            </div>
        )
    }
}

export default connect(null, {lauraType, robType})(ChatSpace)
