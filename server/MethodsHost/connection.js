const Rooms = require('../models/rooms')

exports.hostConnected = function(socket){

	function createUniqueRoomId(){
		let room = Math.random().toString(36).substr(2, 4).toUpperCase();
		Rooms.findOne({short: room}, function(err, result){
			if (result) return createUniqueRoomId()
			storeRoom(room)
		})
	}
	function storeRoom(room){
		console.log('storing room', room)
		Rooms.create({short: room, long: socket.id}, ()=> {
			socket.emit('room-code-generated', room)
		})
		
	}
	createUniqueRoomId()
}

exports.startRound = function(socket){
	console.log('starting round')
	socket.to(socket.id).emit('start-round');
}

