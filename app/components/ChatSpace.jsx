import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import moment from 'moment'
import {connect} from 'react-redux'
import { EventEmitter } from 'fbemitter'
import {lauraType, robType} from '../reducers/chatReducer.js'
import { connectMe, sendMessage, getMessage } from './sockets.js'
import NewMessage from './NewMessage'
import ChatHistory from './ChatHistory'
var emitter;

class ChatSpace extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            value: '', 
            partnerIsTyping: false
         };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //When I'm typing, update the value in state, and emit the event to my partner
    handleChange(e) {
        this.setState({ value: e.target.value });
        emitter.emit('other user typing', this.props.from)
    }

    //When I submit my message, send it to the redux store and clear the input box
    handleSubmit(e) {
        e.preventDefault();
        var imgURL = "images/" + this.props.from + ".png"
        sendMessage(this.state.value, this.props.from, moment().format("hh:mm a"), imgURL)
        this.setState({ value: "" })
    }

    
    componentDidMount() {
        connectMe()   //Open a socket connection
        getMessage()  //Add an event listener that will put all incoming messages into the redux store
        emitter = new EventEmitter()
        emitter.addListener('other user typing', (name) => { //Add event listener that listens for when my partner is typing
            if (name === "Laura") {
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
