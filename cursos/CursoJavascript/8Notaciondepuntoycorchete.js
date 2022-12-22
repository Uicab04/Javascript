
var persona = {
    nombre: "juana",
    apellido: "herrera",
    edad: 25,
    direccion: {
        pais: "mexico",
        ciudad: "san jose",
        edificio:{
            nombre: "edificio principal",
            telefono: "9842044835" 
        }

    }

};
// consultar lugar del objeto
console.log(  persona.direccion.pais  );
console.log(  persona.direccion  );
// agregamos una nueva propiedad
persona.direccion.zipcode = 11101;
console.log( persona.direccion.zipcode ); 
console.log(  persona.direccion.edificio.telefono ); //consulta
// 
// agregar al objeto
var edificio = persona.direccion.edificio;
edificio.nopiso = "8vo piso";
console.log( persona );

// hacerlo dinamico
var campo = "edad";//lo que se busca en el objeto
console.log(persona[campo] );
// si no existe arroja indefinido
console.log ( persona.edad2 );