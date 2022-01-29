const libreriaMensajes = require('./libreria');
const request = require('request');
const argv = require('yargs').argv;

console.log("Ejemplo #4: Utilizando request desde nodejs.");
libreriaMensajes.saludo;

let direccion = argv.direccion;
let apikey = "";
let url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+direccion+'&key='+apikey;

request({
    url: url,
    json: true
}, (error, response, body ) =>{ 
    console.log( JSON.stringify(body, undefined, 1) ); 
});
