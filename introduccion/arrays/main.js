//El índice es la forma en que accedemos a los elementos de los arrays. En JavaScript, los índices empiezan desde 0, es decir, la primera posición es el índice 0. Un array se inicia mediante la sintaxis de corchetes [] y es tipo de dato objeto. 
//LA POSICION Y EL INDICE SON COSAS DIFERENTES


//Un array es una estructura de datos que permite almacenar una serie de datos localizados por índices y separados por comas.

let frutas = ["Manzana", "Platano", "Cereza", "Sandia"];
console.log(frutas)
console.log(frutas.length) //Me dice la longitud, cuantos elementos tiene, en este caso, 4
console.log(frutas[0]) //Llamas la posicion 1 mediante su indice 0


//METODOS
//Mutar los arrays
//La mutabilidad hace referencia a la capacidad de una estructura de datos a cambiar. Esto permite cambiar los valores de los elementos de un array cuando accedemos a sus elementos mediante un índice.
let masFrutas = frutas.push("Uvas"); //Es un metodo que agrega mas elementos al array al ÚLTIMO en este caso uvas se agregaria al final

let siempreNo = frutas.pop(); //Método para eleminar el ÚLTIMO elemento, en este caso uvas, que es el ultimo, seria eliminado

let mejorSi = frutas.unshift("Uvas"); //Método para agregar un nuevo elemento al INICIO, en este caso agrega uvas al inicio

let nahMejorNo = frutas.shift(); //Elimina el PRIMER elemento, elimina uvas por estar al inicio

let posicion = frutas.indexOf("Cereza"); //Método que ayuda a saber el indice del elemento que le pasemos, en este caso sería el indice 2


//Por ejemplo, cambiemos el segundo elemento con índice 1 al valor de “Platzi”:

let nombres = ["Andres", "Ramiro", "Silvia"]
// Accedemos y mutamos el segundo elemento
nombres[1] = "Platzi"

console.log(nombres) // ["Andres", "Platzi", "Silvia"]
