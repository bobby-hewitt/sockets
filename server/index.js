var cors = require('cors')
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const mongoose = require('mongoose')
require('dotenv').config({path: '.env'})
const bodyParser = require('body-parser')
app.use(cors())

var PORT = process.env.PORT || 9000

const Rooms = require('./models/rooms')
app.use( bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}))

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL);

mongoose.connection.on('error', function() {
    console.info('Error: Could not connect to MongoDB.?')
});
mongoose.connection.on('connected', function() {
    console.info('Successfully connected to the database')
});




// app.listen(PORT, () => console.log('Example app listening on port ' + PORT))


// app.get('/homedata', (req, res, next) => {
// 	Me.findOne({name: 'me'}, function(err, me){
// 		let itemsToSend = {}

io.on('connection', function(socket){  
  console.log('a user connected');
  socket.on('test', test.bind(this, socket));
  socket.on('disconnect', disconnect.bind(this, socket));
  socket.on('tv-connected', tvConnected.bind(this, socket))
  socket.on('player-join-room', playerJoinRoom.bind(this, socket))
});

function disconnect(socket){
	Rooms.findOne({long: socket.id}, function(err, room){
		console.log('deleting the room')
		if (room) return room.remove()
	})
}
function test(socket, message){
	console.log('testing', message, socket.id)
}

function tvConnected(socket){
	function createUniqueRoomId(){
		let room = Math.random().toString(36).substr(2, 4).toUpperCase();
		Rooms.findOne({short: room}, function(err, result){
			if (result) return createUniqueRoomId()
			storeRoom(room)
		})
	}
	function storeRoom(room){
		Rooms.create({short: room, long: socket.id})
		socket.emit('room-code-generated', room)
	}
	createUniqueRoomId()
}

function playerJoinRoom(socket, playerData){
	console.log('here room')
	Rooms.findOne({short: playerData.room}, function(err, result){
		if (result) {
			socket.join(result.long)
			socket.broadcast.to(result.long).emit('player-joined', playerData);
			socket.emit('success-joining-room', result)
		} else {
			socket.emit('error-joining-room')
		}
	})
}

http.listen(PORT, function(err){
	if (err){
		console.log(err)
		return
	} else {
		console.log('listening one', PORT);
	}
});