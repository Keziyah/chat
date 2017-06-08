import io from 'socket.io-client'
import store from '../store'
import {newChat} from '../reducers/chatReducer.js' 


var socket; 

export function connectMe() {
 socket = io();
}

//Put all sent messages in the redux store. 
export function getMessage() {
    socket.on('store this', function(data) {
        console.log("MESSAGE YAY", data)
        store.dispatch(newChat(data))
    })
}

//Emit messages from the client to the server
export function sendMessage(text, speaker, timestamp) {
    socket.emit('new message', {text, speaker, timestamp})
}

//Emit an event when I start typing
export function imTyping() {
    socket.emit('user typing')
}