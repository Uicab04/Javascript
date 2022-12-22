

numeroParaSumar = 0;
if (numeroParaSumar < 10) {
    document.write("es menor que 10" + "<br>");
}

// se le suma 1 anumero
// cada vez que pasa por nuero++;

let numero = 0;
if (numero < 10){
    numero++;
    numero++;
    numero++;

    document.write(numero)
}

//bucle while, mientras que.. sumar 1

let numero3 = 0;
while (numero3 <= 6) {
    numero3++;
    document.write(numero3 + "<br>")
}


// bucle do while primero ejecuta la variable
let numero4 = 0;
do {
    document.write(numero4 + "<br>");
    numero4++;
}

while (numero4 < 6)

// terminar el programa en determinado teimpo

let uicab = 0;
while(uicab < 1000) {
    uicab++;
    document.write(uicab);
    if (uicab == 15) {
        break;
    }
}

// sentencia for
// declara la variable y ejecuta las codiciones

for (let i = 0; i < 6; i++) {
    document.write(i + "<br>")
}

//con numeros invertidos

for (let i = 6; i > 0; i--) {
    document.write(i + "<br>")
}

// saltarse el numero que queramos

for (let i = 0; i < 5; i++) {
    if (i==3) {
        continue;
    }
    document.write(i + "<br>");
}


// for in y for of

let uic = "for in y for of"; {
    document.write(uic)
}
document.write("<br>");

// aqui muestra solo indices de la variable
let animales = ["gato","perro","tiranosauriorex"];
  // propiedad
  animales.edad = 20;
for (animal in animales){
    document.write(animal + "<br>");
}

document.write("<br>");
// aqui muestra nombres de lo que contiene
for (animal of animales){
    document.write(animal + "<br>");
}
   // propiedad con detalle
document.write(animales.edad)

document.write("<br>");
// arrays
    //recorre 2 variables y junta sus contenidos    
array1 = ["maria","joefa","robeta"];
array2 = ["pedro","marcelo",array1];

for (let array in array2) {
    if (array == 2) {
        for(let array of array1){
            document.write(array + "<br>");
        }
    } else {
        document.write(array2[array] + "<br>");

    }
}

document.write("<br>");
     //recorre el bucle y omite una variable con sus contenidos 
array1 = ["maria","joefa","robeta"];
array2 = ["pedro","marcelo",array1,"mario"];
forRancio:
for (let array in array2) {
    if (array == 2) {
        for(let array of array1){
            continue forRancio;
            document.write(array + "<br>");
        }
    } else {
        document.write(array2[array] + "<br>");

    }
}

