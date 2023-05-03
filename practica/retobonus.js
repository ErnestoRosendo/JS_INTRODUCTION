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

function devolverSuscripcion(suscripcion){
    if (tiposDeSuscripciones[suscripcion]){
        return tiposDeSuscripciones[suscripcion]
    }
    console.warn("Ese tipo de suscripcion no existe")
}



const arrayDeSuscripcion =[
    "Free" ,"Solo puedes tomar los cursos gratis",
    "Basic" ,"Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Expert" ,"Puedes tomar casi todos los cursos de Platzi durante un año",
    "ExpertPlus","Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
  ]

  function devolversub(suscripcion){
    let pos = arrayDeSuscripcion.indexOf(suscripcion);
    if (pos != -1){
      console.log(arrayDeSuscripcion[pos+1])
      return
    }
    console.warn("Esa suscripcion no existe")
}
  