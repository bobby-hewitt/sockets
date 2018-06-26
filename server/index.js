var cors = require('cors')

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(cors)

var PORT = process.env.PORT || 9000
console.log('')
io.on('connection', function(socket){
  
  console.log('a user connected');
  
  socket.on('test', test.bind(this, socket));
  socket.on('disconnect', disconnect.bind(this, socket));

});


function disconnect(socket){
	console.log(socket.id)
}
function test(socket, message){
	
	console.log('testing', message, socket.id)
}





http.listen(PORT, function(err){
	if (err){
		console.log(err)
		return
	} else {
		console.log('listening on', PORT);
	}
  
});