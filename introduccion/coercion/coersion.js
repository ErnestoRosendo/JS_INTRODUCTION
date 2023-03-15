//La coerción implícita consiste en la transformación de tipos mediante la ayuda de JavaScript. Esto ocurre en operaciones de diferentes tipos, ya que es un lenguaje débil y dinámicamente tipado.
console.log(4 + "7") //--> 47
console.log(4 * "7") //--> 28
console.log(true + 1) //--> 2
console.log(false - 3) //--> -3


//La coerción explícita es la transformación de tipos de datos que controlamos el resultado. Para realizar estas transformaciones utiliza las funciones Number(), String() y Boolean(), para convertir a tipo número, string y lógico, respectivamente.
Number("47") // 47
String(51) // "51"
Boolean(1) // true

let a = 20;
let b = a + "";

//Ó

let c = String(a)

// ParseInt vs Number

// ParseInt: Analiza la cadena desde el primer dígito, hasta que encuentre algo que no sea dígito y devuelve lo que haya analizado.
// Ejemplo:
// parseInt(“123hui”) //123
//AUNQUE SI EN EL STRING VIENEN PRIMERO LAS LETRAS parseInt(“hui123”) EL RESULTADO SERA //NaN
// Number: Busca convertir toda la cadena en un número, por lo que al encontrarse con un elemento que no sea diginto nos dara como resultado NAN.
// Ejemplo:
// Number(“123hui”) //NaN
//SI EL CASO ES 