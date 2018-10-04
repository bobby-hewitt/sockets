import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:9000');

function subscribeToPlayerEvents(self, cb) {
	socket.on('success-joining-room', successJoiningRoom.bind(this, self))
	socket.on('error-joining-room', errorJoiningRoom.bind(this))
	socket.on('start-round', startRound.bind(this, self))
}

function successJoiningRoom(self, data){
	console.log('success joining room')
	self.props.push('player/waiting')
	// console.log(data)
	self.props.setPlayerRoom(data)
	// window.localStorage.room = data
}
function errorJoiningRoom(){
	console.log('error joining room')
}

function startRound(self){
	console.log('starting round')
	self.props.push('player/buzzer')
}

function buzz(self){
	console.log('self', self.props)
	let data = {
		room: self.props.room.long,
		player: self.props.self,
		time: (new Date).getTime()
	}
	emit('player-buzz', data)
	self.props.push('player/waiting')
	
}


// emit

function joinRoom(data, self){
	// console.log('joining')
	// console.log(roomCode)
	data.id = socket.id
	self.props.setSelf(data)
	emit('player-join-room', data)
}

function emit(action, data){
	// data.room = window.localStorage.room
	socket.emit(action, data)
}

export { 
	subscribeToPlayerEvents,
	joinRoom,
	buzz
};