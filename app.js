var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


const io = require('socket.io')(http);

io.on('connection', function(socket) {
    socket.on('chat_message', function(data){
        io.emit('chat_message', data);
    });
    
});