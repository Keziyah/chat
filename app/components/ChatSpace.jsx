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
import store from '../store'

class ChatSpace extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            value: '', 
            partnerIsTyping: false };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.partnerTyping = this.partnerTyping.bind(this); 
        this.resetState = this.resetState.bind(this)
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
        emitter.emit('other user typing', this.props.from)
    }


    handleSubmit(e) {
        e.preventDefault();
        console.log(`NEW CHAT MESSAGE: ${this.state.value} FROM: ${this.props.from}`);
        sendMessage(this.state.value, this.props.from, moment().format("hh:mm:ss a"))
        this.setState({ value: "" })
    }

    resetState() {
        this.setState({partnerIsTyping: false})
    }

    partnerTyping() {
        console.log("hellooooo")
        this.setState({partnerIsTyping: true}, () => {
            setTimeout(this.resetState, 3000)
        })
    }

    componentDidMount() {
        connectMe()
        getMessage()
        emitter = new EventEmitter()
        emitter.addListener('other user typing', (name) => {
            console.log("EE chatspace did mount", name)
            // if(name === "Laura") {
            //     console.log(lauraType)
            //     this.props.lauraType()
            // } else {
            //     console.log(robType)
            //     this.props.robType()
            // }
            this.partnerTyping()
        })
    }

    render() {
        console.log("STATE", this.state)
        return (
            <div>
                <Col sm={6}>
                    <ChatHistory talkingTo={this.props.talkingTo} from={this.props.from} partnerTyping={this.state.partnerIsTyping}/>
                    <NewMessage 
                    handleSubmit={this.handleSubmit} value={this.state.value}
                    handleChange={this.handleChange}/>
                </Col>
            </div>
        )
    }
}

export default connect(null, {lauraType, robType})(ChatSpace)
