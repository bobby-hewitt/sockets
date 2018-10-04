import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:9000');

function subscribeToSocketEvents(cb) {
	console.log('here')
	socket.emit('tv-connected');
	socket.on('room-code-generated', roomCodeGenerated.bind(this, cb))
  	socket.on('player-joined', playerJoined.bind(this, cb))
}

function roomCodeGenerated(cb, data){
	cb('setRoomCode', data)
}

function playerJoined(cb, data){
	console.log('player joined', data)
	cb('addPlayer', data)
	// console.log('player joined', data)
}

export { subscribeToSocketEvents };