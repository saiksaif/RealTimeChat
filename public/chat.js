var socket = io.connect("http://localhost:4000");

var message = document.querySelector('#message');
var username = document.querySelector('#username');
var output = document.querySelector('#output');
var send = document.querySelector('#send');

send.addEventListener('click', function(){
    socket.emit('sendingMessage ',{
        message: message.value,
        username: username.value
    });
});