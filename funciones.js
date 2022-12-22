
document.write("<br>");
// guarda una funcion completa de ejecucion de codigos y les ejecuta solo imvocandolo

function saludar() {
respuesta = prompt("hola que tal tu dia?");
if (respuesta == "bien") {
    alert("me alegro")
} else {
    alert("una pena")
}
}
saludar()

// RETURN, retorna el valor para que lo tega
   //termina de ejeccutar la funcion si se pone antes del alert    
function mostrar() {
    alert("hola");
    return 3;
}

let ver = mostrar();
document.write(ver);

document.write("<br>");

// parametros,

  //lo usamos para sumar cualquier numeros
  //los parametros son lo las variables que se declaran en una funcion    
function suma(num1,num2){
    let res= num1 + num2;
    document.write(res);
    document.write("<br>");
}

suma(23,11)
suma(22,55)

// funcion saludo
document.write("<br>");
function saludar2(nombre5){
    let frase5 = `¡hola ${nombre5}! ¿como estas?`;
    document.write(frase5)
}

saludar2("Anastacio")

// me quede en el video 3:26:44

// el scoope s cuando declaramos let en la variable dentro de la funcion para que la variable que esta dentro no tenga un alcanse gloval en el programa
// otra forma de hacer funciones es las funciones flecha
document.write("<br>"); 


const salud = (neim)=>{
    document.write("hola como etas?" + neim)
} 

salud("esequiel")

document.write("<br>")

// 
