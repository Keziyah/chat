var express = require('express')
var app = express()
var server = require('http').createServer(app); 
var io = require('socket.io')(server)

var path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

io.on('connection', function (socket) {
  // socket.emit('new message', { hello: 'world' });
  console.log("connected. socket id", socket.id)
  socket.on('new message', function (data) {
    console.log("dadaaaa", data)
    io.emit('store this', data)
  });
});

server.listen(3000, function() {
    console.log("**** View Keziyah's project at localhost:3000. ****")
})
