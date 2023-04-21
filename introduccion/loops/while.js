//Para el ciclo while no conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones. Aunque también se puede acoplar para que realice un determinado número de repeticiones.
//En este caso la condición es una expresión lógica a evaluar, si es verdadero repite el bloque de código, si es falso el ciclo termina. Debido a esto, necesitas cambiar la variable de la condición, para que no existe un bucle infinito.
let estudiantes = ["Don pepe", "Juan", "Mario", "Greta"];

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}


//Aqui lo que hace es que cada repeticion va sacando un valor del array y se lo asigna a una variable, la condicion deja de cumplirse cuando el array se queda vacio 
while (estudiantes.length > 0) {
    console.log(estudiantes)
    let estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
    
}


//lo mismo pero con do while
do {
    let estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
} while (estudiantes.length > 0)





// Por ejemplo, generemos los números del 1 al 10, ahora con el bucle while.

// La estructura es la siguiente:

let numero = 1

while ( numero <= 10 ){
    console.log(numero)
    numero++
}
//Esto se leería como: “Mientras (while) la variable numero sea menor o igual que 10 (numero <= 10) ejecuta una o varias instrucciones (console.log); finalmente, aumenta la variable en uno (numero++) para que no exista un bucle infinito”.




//Otro ejemplo, tenemos un programa únicamente para estudiantes, queremos controlar que un usuario ingrese una edad menor de 18 (y mayor que 0 porque no existe edades negativas). Entonces utilizamos while debido a que no conocemos cuántas veces se equivocará el usuario.
let edad = Number(prompt("Ingrese un valor: "))

while (edad > 18 || edad <= 0){
  edad = Number(prompt("Ingrese un valor correcto: "))
}

console.log("Gracias por ingresar al programa")




