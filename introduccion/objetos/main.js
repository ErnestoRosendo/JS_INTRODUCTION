// Un objeto es una estructura de datos que permite almacenar valores mediante propiedad - valor a través de la sintaxis de llaves ({}) y separados por comas.

// En las propiedades del objeto es opcional colocar las comillas. En el caso de que haya espacios, es obligatorio.
// Excepto por los primitivos y las funciones, todo es un objeto en JavaScript.


let miAuto = {
    marca: "Toyota", //marca es un atributo y Toyota es el valor
    modelo: "Toyota",
    año: 2020,
    detallesDelAuto: function(){    //La propiedad detalles es un metodo del objeto
        console.log(`Auto ${this.modelo} ${this.año}`);  //this hace referencia al objeto global en este caso
    }
}



// forma de acceder a los datos
miAuto.marca
miAuto.detallesDelAuto() //en el caso de la funcion se manda llamar igual que normalmente; con sus parentesis


//En programación orientada a objetos, un objeto es una representación de la realidad, en el cual sus características propias se definen como atributos y sus acciones se definen como métodos.
//En otras palabras, los atributos son las variables y los métodos son las funciones propias de cada objeto.


// Para añadir propiedades de un objeto, utilizamos la notación de corchetes o de punto con la nueva propiedad, asignándole su respectivo valor.
miAuto["color"] = "rojo"
// o 
miAuto.color = "rojo"

console.log(miAuto)
/* {
  marca: 'Toyota',
  modelo: 'Corolla',
  'año': 2020,
  detalle: ƒ detalle(),
  color: 'rojo'  <---- nueva propiedad
} */

//PARA MODIFICAR PROPIEDADES DE UN OBJETO ES EXACTAMENTE LA MISMA DINAMICA QUE PARA AÑADIR
//Para eliminar propiedades de un objeto, utilizamos la palabra reservada delete seguido de la propiedad del objeto.

delete miAuto["marca"]
// o 
delete miAuto.marca

console.log(miAuto)
/* { 
  modelo: 'Corolla', <--- No existe la propiedad marca
  'año': 2020,
  detalle: ƒ detalle(),
} */