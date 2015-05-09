var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
// later!

// views routes
var routes = require('./routes/index');
app.use('/', routes);

io.on('connection', function(socket) {
	console.log('a user connected');
	socket.on('change room', function(new_room) {
		// leave all rooms
		var rooms = socket.rooms;
		for (var i = 0; i < rooms.length; i++) {
			socket.leave(rooms[i]);
			console.log('left ' + rooms[i]);
		}

		socket.join(new_room.toString());
		console.log('joined ' + new_room);
	});

	socket.on('message', function(msg) {
		io.to(msg.room_id.toString()).emit('message', msg.message_text);
	})
})

// begin server
server.listen(80, function() {
	console.log('listening on *:80');
});