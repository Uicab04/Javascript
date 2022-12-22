class animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color
        this.info = `soy ${this.especie}, tengo ${this.edad} años
        y soy de color ${this.color}`;
    } 
    
    verInfo(){
        document.write(this.info + "<br>")
    }
    // agregar ua opcion descriptiva que los demas no pueden hacer y solo uno(polimorfismo)
    ladrar(){
        if (this.especie == "perro") {
            document.write("¡Waaw!!<br>");
        } else{
            document.write("no puede ladrar este" + this.especie + "<br>")
        }
    }
}
// // eredar clase(herencia) 04:34:00
// class Perro extends Animal {
//     constructor(especie,edad,color,raza){
//         super(especie,edad,color);
//         this.raza = raza;
//     }
//     ladrar(){
//         alert("WAWWW???");
//     }
// }

let perro = new animal("perro",5,"marrón");
let gato = new animal("gato",2,"negro");
let pajaro = new animal("pajaro",1,"azul");

// document.write(perro.info)
// document.write("<br>")

// document.write(pajaro.color)


// 4:16:59

perro.verInfo();
gato.verInfo();
pajaro.verInfo();

document.write("<br>");

perro.ladrar();
gato.ladrar();
pajaro.ladrar()