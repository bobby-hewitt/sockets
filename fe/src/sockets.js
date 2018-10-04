// import openSocket from 'socket.io-client';
// const  socket = openSocket('http://localhost:9000');

// function subscribeToSocketEvents(self, cb) {
// 	console.log('subscribed')
// 	socket.on('success-joining-room', successJoiningRoom.bind(this, self))
// 	socket.on('error-joining-room', errorJoiningRoom.bind(this))
	
// }

// function successJoiningRoom(self, room){
// 	console.log('success joining room')
// 	self.props.push('waiting')
// 	window.localStorage.room = room
// }
// function errorJoiningRoom(){
// 	console.log('error joining room')
// }


// // emit

// function joinRoom(data){
// 	// console.log('joining')
// 	// console.log(roomCode)
// 	data.id = socket.id
// 	emit('player-join-room', data)
// }

// function emit(action, data){
// 	// data.room = window.localStorage.room
// 	socket.emit(action, data)
// }





// export { 
// 	subscribeToSocketEvents,
// 	joinRoom
// };