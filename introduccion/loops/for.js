//Un bucle (loop) o ciclo repetitivo es una estructura de control que te permite realizar una o varias instrucciones mientras una condición sea verdadera.

//Para el ciclo for conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones.
//Por ejemplo, si queremos los 10 primeros números, sabemos que el ciclo se repetirá 10 veces. Si accedemos a los elementos de un array, sabemos que el ciclo se repetirá length veces.
let estudiantes = ["Javier", "Miranda", "Alexa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`)
}

// La condición consta de tres partes:

// Inicio: se debe inicializar una variable que será evaluada en la expresión a comparar. Esta variable puede ser declarada dentro o fuera de la condición.
// Comparación: es una expresión que debe cumplir la variable inicial, cuando no se cumpla, el ciclo termina.
// Pasos: son los intervalos que cambiará la variable inicial, mientras cumpla con la expresión de comparación.
// Cada una de las partes debe estar separada por un punto y coma ( ;).

for (let i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}


//for of. En este caso lo que hace es inicializar una variable en singular por cada elemento del array, estudiante toma el valor del index del array
for (let estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}




//for que cuenta de 1 a 10
for (let i = 1; i <= 10; i++){
    console.log(i)
}


// Limitaciones del ciclo for … of
// El ciclo for ... of solo accede al valor de cada uno de los elementos del array. Por consiguiente, si quieres cambiar el array original, no podrás, porque necesitas su índice para acceder y cambiar su valor.

// Por ejemplo, si quieres duplicar el valor de cada elemento del array, necesitarás su índice.
var numbers = [5, 4, 3, 2, 1]

// ❌ No cambia el array original
for (var number of numbers) {
  number = number * 2
}

console.log(numbers) // [5, 4, 3, 2, 1]

// ✅ Cambia el array original
for(var i=0; i < numbers.length; i++){
    numbers[i] = numbers[i] * 2
}

console.log(numbers) // [ 10, 8, 6, 4, 2 ]

// Sin embargo, esto no es malo, depende del problema que estés afrontando. Una forma de solucionar el anterior problema utilizando for ... of, es creando otro array vacío para llenarlo con los nuevos valores, de esta manera no cambiará el array original.

var numbers = [5, 4, 3, 2, 1]
var duplicates = []

for (var number of numbers) {
  duplicates.push(number * 2)
}

console.log(duplicates) // [ 10, 8, 6, 4, 2 ]


