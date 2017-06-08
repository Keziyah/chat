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
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

server.listen(3000, function() {
    console.log("View Keziyah's project at localhost:3000.")
})
