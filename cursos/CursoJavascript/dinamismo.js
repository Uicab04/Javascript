var num = 10;
var str = "texto";
var bol = true;
var und = undefined;
var nul = null;

// variables fexibles
num = str;
console.log( num )

// no hay limiter para guardar en un objeto(se llama cadena)
var obj = {
    numero: 10,
    texto: "Nuevo texto",
    objHijo: {
        numero2: 20,
        text2: "Nuevo texto 2"
    }
};

console.log( obj )