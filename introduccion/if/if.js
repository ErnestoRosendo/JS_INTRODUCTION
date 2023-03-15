if (true){
    console.log ("Holas")
}

// Por ejemplo, un cliente solicita un descuento según el número de artículos que ha comprado, la tienda ofrece 3 descuentos: 10% si ha comprado más de 5 artículos, 15% si son más de 10 artículos, y todo por encima de 15 artículos recibe un 20% de descuento.
let precio = 10 
if (articulos >= 5 && articulos < 10){
   precio = precio * (1-0.10)
} else if (articulos >= 10 && articulos < 15){
    precio = precio * (1-0.15)
} else {
    precio = precio * (1-0.20)
}

let edad = 18;
if (edad === 18){
    console.log("Felicidades, es tu primera vez votando")
}else if (edad > 18){
    console.log("Puedes votar");
}else{
    console.log("Aun no puedes votar");
}

//Operador ternario
// El operador ternario consiste en evaluar si una expresión es verdadera o falsa. Parecido a un condicional, pero en una línea de código. Esto sirve para evaluar una condición de manera rápida. La estructura que sigue es la siguiente y se lee como: "La condición es verdadera (?), si es así ejecuta el “Bloque verdadero”, caso contrario (:), ejecuta el “Bloque falso”.
condition ? true : false;
//EJEMPLO:
function esPar(numero){
    return numero % 2 === 0 ? "Es par" : "No es par"
}

esPar(2) // "Es par"
esPar(3) // "No es par"


function totalapagar(articulos){
    let precio = 10 
if (articulos >= 5 && articulos < 10){
   precio = precio * (1-0.10)
   return `El total a pagar por ${articulos} articulos es: ${articulos * precio}`
} else if (articulos >= 10 && articulos < 15){
    precio = precio * (1-0.15)
    return `El total a pagar por ${articulos} articulos es: ${articulos * precio}`
} else if(articulos >=15){
    precio = precio * (1-0.20)
    return `El total a pagar por ${articulos} articulos es: ${articulos * precio}`
} else{
    return `El total a pagar por ${articulos} articulos es: ${articulos * precio}`
}
}

