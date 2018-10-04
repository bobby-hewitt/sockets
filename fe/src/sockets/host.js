import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:9000');

function subscribeToHostEvents(self, cb) {
	console.log('here')
	socket.emit('host-connected');
	socket.on('room-code-generated', roomCodeGenerated.bind(this, cb))
  	socket.on('player-joined', playerJoined.bind(this, cb))
  	socket.on('start-round', startRound.bind(this, self))
  	socket.on('player-responded', playerResponded.bind(this, self))
}

function roomCodeGenerated(cb, data){
	console.log('setting roomcode', data)
	cb('setRoomCode', data)
}

function startRound(self){
	self.props.startRound()
}

function playerJoined(cb, data){
	console.log('player joined', data)
	cb('addPlayer', data)
	// console.log('player joined', data)
}

function startRound(self, cb){
	socket.emit('start-round');
}

function playerResponded(self, data){
	console.log('player response')
	self.props.setResponses(data)

}

export { 
	subscribeToHostEvents,
	startRound
};