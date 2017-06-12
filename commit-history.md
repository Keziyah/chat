# Commit History

* e1af626 - Keziyah, 42 seconds ago : ready for submission
* ff8a72f - Keziyah, 8 minutes ago : added unique keys to messages using shortid
* 7de52f4 - Keziyah, 28 minutes ago : media queries
* e0d5496 - Keziyah, 6 hours ago : keyframe fade in
* 6f84c65 - Keziyah, 8 hours ago : box shadow
* 12ce7f8 - Keziyah, 9 hours ago : added avatar to is typing message and other styling
* 5f4f40d - Keziyah, 10 hours ago : added avatar to header and other styling
* a33d669 - Keziyah, 10 hours ago : done with header
* ea921f6 - Keziyah, 18 hours ago : header almost finished
* 644dd97 - Keziyah, 20 hours ago : finished chat bubble styling
* ad23b2b - Keziyah, 20 hours ago : chat bubbles are styled with text only. now adding profile pictures
* d70fafc - Keziyah, 24 hours ago : incoming and outgoing messages have different background colors
* 5bd6e7e - Keziyah, 24 hours ago : input styling done
* 8b5ec55 - Keziyah, 27 hours ago : added sass boilerplate
* 788fda1 - Keziyah, 29 hours ago : added some comments
* 3c3b65b - Keziyah, 30 hours ago : chat functionality done. ui and styling next
* f415a29 - Keziyah, 30 hours ago : clean up
* 0faa3a7 - Keziyah, 30 hours ago : ok, wow. it actually works. going to merge into master
* ddac05a - Keziyah, 31 hours ago : tried doing it without redux, is not working. going to try with redux again
* 19abdec - Keziyah, 31 hours ago : used arrow function for emitter.addListener callback and that fixed the 'this' issue. now robtype and lauratype actions work
* ded045b - Keziyah, 3 days ago : working on adding ...is typing feature to reducer
* d29c42c - Keziyah, 3 days ago : clean up
* 7a35ddb - Keziyah, 3 days ago : event emitter working. now i need to make it render an ...is typing message
* f41032e - Keziyah, 3 days ago : refactored NewMessage form
* a05774a - Keziyah, 4 days ago : just realized that both chatspaces share the same socket connection. now im just using props for the ... is typing feature
* 9e64ff1 - Keziyah, 4 days ago : typing event displays is typing message but only on Robs side, when either person is typing
* c8e2491 - Keziyah, 4 days ago : typing event can be emitted to server and broadcast to client
* 1af243b - Keziyah, 4 days ago : clean up
* 8f7e935 - Keziyah, 4 days ago : typing event emitted to server
* eca1ef5 - Keziyah, 4 days ago : chats are now being sent with socketIO
* 642a911 - Keziyah, 4 days ago : new sockets.js file. can emit messages to the server
* 100671a - Keziyah, 4 days ago : new component ChatSpace
* 1045878 - Keziyah, 4 days ago : chat messages aligned properly, also did message list height and scrolling
* 6275539 - Keziyah, 5 days ago : ChatHistory components now display chats and timestamps. Redux store refactored to have just 1 action that handles speaker name, timestamp, and message text
* 3badae2 - Keziyah, 5 days ago : NewMessage connected to redux store
* 95526c6 - Keziyah, 5 days ago : chat history and new message components
* 583c684 - Keziyah, 5 days ago : file structure, dependencies, webpack config