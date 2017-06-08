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
  console.log("connected. socket id", socket.id)

  socket.on('new message', function (data) {
    console.log("dataaaa", data)
    //If the users were in two different browser windows, I'd use io.emit.
    //io.emit doesn't work here because both users are sharing the same redux store.
    socket.broadcast.emit('store this', data)
  });

  socket.on('disconnect', function () {
    console.log('user disconnected', socket.id);
  });

  socket.on('Im typing', function() {
    console.log("hihihihi")
    socket.broadcast.emit('youre typing')
  })
});

server.listen(3000, function () {
  console.log("**** View Keziyah's project at localhost:3000 ****")
})
