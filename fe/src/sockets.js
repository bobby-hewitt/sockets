import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:9000');

function subscribeToSocketEvents(cb) {
	console.log('subscribed')
	// socket.emit('tv-connected');
	socket.on('success-joining-room', successJoiningRoom.bind(this))
	socket.on('error-joining-room', errorJoiningRoom.bind(this))
	
}

function successJoiningRoom(room){
	console.log('success joining room')
	window.localStorage.room = room
}
function errorJoiningRoom(){
	console.log('error joining room')
}


// emit

function joinRoom(roomCode){
	console.log('joining')
	let data = {room: roomCode}
	emit('player-join-room', data)
}

function emit(action, data){
	data.room = window.localStorage.room
	socket.emit(action, data)
}





export { 
	subscribeToSocketEvents,
	joinRoom
};