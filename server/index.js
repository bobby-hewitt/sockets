//app setup
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
// set up database connection


mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL);
mongoose.connection.on('error', function() {
    console.info('Error: Could not connect to MongoDB.?')
});

mongoose.connection.on('connected', function() {
    console.info('Successfully connected to the database')
});

const PlayerConnection = require('./MethodsPlayer/connection')
const HostConnection = require('./MethodsHost/connection')
//event handlers
io.on('connection', function(socket){  
  // socket.on('test', test.bind(this, socket));
  socket.on('disconnect', disconnect.bind(this, socket));
  socket.on('host-connected', HostConnection.hostConnected.bind(this, socket))
  socket.on('player-join-room', PlayerConnection.playerJoinRoom.bind(this, socket))
  socket.on('start-round', HostConnection.startRound.bind(this, socket))
  socket.on('player-buzz', PlayerConnection.playerBuzz.bind(this, socket))
});

function disconnect(socket){
	let rooms = socket.rooms
	console.log('rooms', rooms)
	Rooms.findOne({long: socket.id}, function(err, room){
		console.log('deleting the room')
		if (room) return room.remove()
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