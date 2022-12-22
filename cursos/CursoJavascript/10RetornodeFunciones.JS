function obtenerAleatorio(){
    return Math.random();
}


function obtenerNombre(){
    return "Juan";
}

function esMayor05(){
    if( obtenerAleatorio() > 0.5 ){
        return true;
    }else{
        return false;
    }
 
}

if( esMayor05() ){
    console.log("Es mayor a 0.5");
}else{
    console.log("es menor a 0.5");
}


function crearPersona( nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
    
}
var persona = crearPersona("manuel","paz");
console.log( persona.nombre );
console.log( persona.apellido );

// funciones que regresan funiones
function crearFuncion() {
    return function( nombre ){
        console.log("Me creo " + nombre );
        return function(){
            console.log("seguda funcion")
            return function() {
                console.log("holaa");
            }

        }
    }
    
}

var nuevaFuncion = crearFuncion();
var segundaFuncion = nuevaFuncion( persona.nombre );
segundaFuncion();
// base
var terceraFuncion = segundaFuncion();
terceraFuncion()
// cada vez que se invoca se ejecuta una ves sobre otra en la funcion hasta llegar a la ves que se ejecuto y se ejecuta esa funcion las veces que se iso ese sera la funcion
