const Rooms = require('../models/rooms')
// console.log(Rooms)
exports.playerJoinRoom = function(socket, playerData){
	console.dir(playerData.room.short)
	Rooms.findOne({short: playerData.room}, function(err, result){
		if (err){
			console.log('error player joining', err)	
			return socket.emit('error-joining-room')
		} else if (result) {

			socket.join(result.long)
			socket.broadcast.to(result.long).emit('player-joined', playerData);
			result.player = playerData
			socket.emit('success-joining-room', result)
		} else {
			console.log('no result')
			return socket.emit('error-joining-room')
		}
	})
}

exports.playerBuzz = function(socket, data){
	console.log('playerBuzz', data)
	socket.to(data.room).emit('player-responded', data);
}