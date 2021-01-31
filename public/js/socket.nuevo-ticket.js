var socket = io();

var label = $('#lblNuevoTicket');

// on para escuchar sucesos
socket.on('connect',function (){
    console.log('Conectado al servidor');
});

socket.on('disconnect',function (){
    console.log('Perdimos conexion con servidor');
});

// escuchar información
socket.on('estadoActual', function(estadoActual){
    console.log('Estado: ', estadoActual.actual);
    label.text(estadoActual.actual);
})

$('button').on('click', function(){
    socket.emit('siguienteTicket',null,function(siguienteTicket){
        console.log(siguienteTicket);
        label.text(siguienteTicket);
        
    });
})