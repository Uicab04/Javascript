var a = 10;
var b = a;

console.log("a: ", a);
console.log("b: ", b);
a = 20;

console.log("a: ", a);
console.log("b: ", b);

var c = {
    nombre: "juana"
}
var d = c;

console.log("c: ", c);
console.log("d: ", d);

c.nombre = "maria";
console.log("c: ", c);
console.log("d: ", d);

d.nombre = "Pedro";
console.log("c: ", c);
console.log("d: ", d);
