import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import moment from 'moment'
import NewMessage from './NewMessage'
import ChatHistory from './ChatHistory'
import { EventEmitter } from 'fbemitter'
var emitter;
import { connectMe, sendMessage, getMessage } from './sockets.js'

class ChatSpace extends Component {
    constructor(props) {
        super(props)
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
        emitter.emit('other user typing', this.props.name)
    }


    handleSubmit(e) {
        e.preventDefault();
        console.log(`NEW CHAT MESSAGE: ${this.state.value} FROM: ${this.props.from}`);
        sendMessage(this.state.value, this.props.from, moment().format("hh:mm:ss a"))
        this.setState({ value: "" })
    }

    componentDidMount() {
        connectMe()
        getMessage()
        emitter = new EventEmitter()
    }

    render() {
        return (
            <div>
                <Col sm={6}>
                    <ChatHistory talkingTo={this.props.talkingTo} from={this.props.from}/>
                    <NewMessage name={this.props.from} 
                    handleSubmit={this.handleSubmit} value={this.state.value}
                    handleChange={this.handleChange}/>
                </Col>
            </div>
        )
    }
}

export default ChatSpace
