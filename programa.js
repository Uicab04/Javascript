
// programa que no deja pasar menores de18 y si son las 2 am entre gratis

let free = false;
const validarCliente = (time)=>{
    let edad = prompt("¿cual es tu edad?");
    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("puedes pasar gratis eres el priero que viene");
            free = true;
        
        } else {
            alert(`son las ${time}:00Hs y pudes pasar,pero tienes que pagar`);

        }

    } else {
        alert("mira papu, sos menor de edad por ende no vas a etrar");
    }
}
validarCliente(17);
// otra practica 3:56:55