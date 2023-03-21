let option1 = "piedra";
let option2 = "papel";
let option3 = "tijeras";

function result (user, cpu) {
    if (user !== cpu){
        if (user === option1 && cpu === option3){
            console.log(`El usuario gano con ${option1}`)
        }else if (user === option2 && cpu === option1){
            console.log(`El usuario gano con ${option2}`)
        }else if (user === option3 && cpu === option2){
            console.log(`El usuario gano con ${option3}`)
        }else{
            console.log(`La cpu gano`)
        }
    }else{
        console.log(`EMPATE`)
    }

}

function validarSuscripcion (tipoDeSuscripcion){
    if (tipoDeSuscripcion === "Free"){
        console.log("Solo puedes tomar los cursos gratis");
    }else if (tipoDeSuscripcion === "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }else if (tipoDeSuscripcion === "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }else if (tipoDeSuscripcion === "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }else{
        console.log("Digite una sucripcion valida")
    }
}

