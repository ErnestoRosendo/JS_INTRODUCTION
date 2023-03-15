// declarativas
// function miFuncion (){
//     return 3;
// }

// //Las funciones declarativas se utilizan cuando se desea que la función esté disponible antes de que se ejecute el código, es decir, que se cargue en memoria antes de ejecutarse. Un ejemplo práctico de una función declarativa es una función que se utiliza como constructor de objetos.


// //Expresion ((((son anonimas
// var miFuncion = function(a, b){
//     return a + b; 
// }

// miFuncion();

// las funciones declarativas tienen un nombre y pueden ser llamadas desde cualquier parte del código, mientras que las funciones de expresión son anónimas y solo pueden ser llamadas a través de la variable a la que se asignaron.

// function saludarEstudiante(estudiante){
//     console.log(`Hola ${estudiante}`);
// }

// saludarEstudiante("Ernesto");

function sumar(a,b){
    return a + b;
}

sumar(4,6);

//La invocación sirve para emplear una función con diferentes argumentos y guardarlos en una variable.

let resultado1 = sumar(7,8)
let resultado2 = sumar(11,2)
let resultado3 = sumar(21,7)

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)


