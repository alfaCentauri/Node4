console.log("Libreria de mensajes.");
let numeroMensaje = 1;

module.exports ={
    numeroMensaje: numeroMensaje,
    saludo: () => console.log("Hola mundo.") ,
    despedida: function(){
        numeroMensaje++;
        console.log("Hasta la próxima. Es el mensaje #%d.", numeroMensaje);
    },
}
