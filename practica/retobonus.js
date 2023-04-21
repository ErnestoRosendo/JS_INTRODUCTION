//Replicar comportamiento de if, else y else if usando un solo if y arrays y objetos
const tiposDeSuscripciones = {
    free: "Solo puedes tomar cursos gratis",
    basic: "Puedes tomar casi todos los cursos de PLatzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de PLatzi durante un año",
    expertduo: "Tu y alguien mas puede tomar todos los cursos de PLatzi durante un año",
}
//Podemos asignarle a una variable el nombre de un elemento de un objeto y posteriormente llamarlo con la variable
const elemento = "free"
tiposDeSuscripciones[elemento]

//Asi llamamos al valor que tiene asignado ese elemento
tiposDeSuscripciones.free
tiposDeSuscripciones["free"]