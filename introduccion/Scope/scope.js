let nombres = "Ernesto";
function fun (){
    var apellido = "Rosendo";
    console.log(`${nombres} ${apellido}`)
}
fun();
console.log(apellido)  //EN ESTE CASO SI INTENTO LLAMAR LA VARIABLE APELLIDO, AUNQUE ESTE DECLARADO CON VAR, SOLO EXISTE EN UN AMBITO LOCAL, POR LO QUE NO PUEDE SER LLAMADA AFUERA DE LA FUNCION
// EN ESTE CASO SI EL CONSOLE.LOG ESTUVIERA ADENTRO DE LA FUNCION ENTONCES LA VARIABLE SI PODRIA SER LLAMDA