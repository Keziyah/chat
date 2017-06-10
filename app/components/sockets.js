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
        store.dispatch(newChat(data))
        console.log("receiving id", socket.id)
    })
}

//Emit messages from the client to the server
export function sendMessage(text, speaker, timestamp) {
    socket.emit('new message', {text, speaker, timestamp})
}

//************************************************ */
// IF THE USERS WERE IN DIFFERENT CHAT WINDOWS:

//Emit an event when I start typing 

// export function imTyping() {
//     socket.emit('Im typing')
// }

//Listen for when the other user is typing

// export function youTyping(cb) {
//     socket.on('youre typing', function() {
//         cb()
//     })
// }
//************************************************ */