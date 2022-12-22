
//condicionales
dineroCofla = prompt("cuanto dinero tienes cofla?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("cofla; comprate el elado de agua");
    alert("y te sobran" + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("cofla; comprate el helad decrema");
    alert("y te sobran" + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("cofla; comprate un helado de heladix");
    alert("y te sobran" + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("cofla; comprate un helado de heladovich");
    alert("y te sobran" + (dineroCofla - 1.7));
} else {
    alert("lo siento cofla, pobreton :3");
}

//arreglos
frutas = ["banana", "manzana", "pera",];

document.write(frutas)

//Areglos para llamar datos de otro lugar

document.write("<br>")
let pc1 = {
    nombre: "UICAB_PC",
    procesador: "Intel core I7",
    ram: "16GB",
    espacio: "1TB"
};

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

frase = `el nombre es: <b>${nombre}</b> <br>
         el procesador es: <b>${procesador}</b> <br>
         la memoria: <b>${ram}</b> <br>
         el espacio en disco es de: <b>${espacio}</b>`;

document.write(frase);
