//La estructura switch es otra manera de evaluar condiciones, la diferencia con if es que las condiciones deben ser iguales a un caso o algo específico.
//Deberías utilizar switch cuando tengas una gran cantidad de casos, que con el condicional if produciría más cantidad de código. El problema con switch es que no es muy utilizado y todo se resuelve con if. Sin embargo, conocer esta estructura te puede permitir escribir código más legible en ciertos casos.
function dayofweek (day){
    switch (day){
        case 0:
            return `Hoy es Domingo`;
            break;
        case 1:
            return `Hoy es Lunes`;
            break;
        case 2:
            return `Hoy es Martes`;
            break;
        case 3:
            return `Hoy es Miércoles`;
            break;
        case 4:
            return `Hoy es Jueves`;
            break;
        case 5:
            return `Hoy es Viernes`;
            break;
        case 6:
            return `Hoy es Sábado`;
            break;
        default:
            return `El día no existe`;
    }
}




//Switch dentro de una funcion con dos parametros
let option1 = "piedra";
let option2 = "papel";
let option3 = "tijera";
function game (user, cpu){
    
    switch(true){
        case (user === option1 && cpu === option3):
            console.log(`Has ganado con ${option1}`)
            break;
        case (user === cpu):
            console.log(`Es un empate`)
            break;
        case (user === option2 && cpu === option1):
            console.log(`Has ganado con ${option2}`)
            break;
        case (user === option3 && cpu === option2):
            console.log(`Has ganado con ${option3}`)
            break;
        default:
            console.log(`Has perdido`);
    }
}





let pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
let user = pregunta.toLowerCase();    //Aqui lo que hace es convertir las letras del usuario a minusculas 
let options = ["piedra", "papel", "tijera"]; //Aqui define las opciones
let machine = options[Math.floor(Math.random() * 3)]; //Aqui accede a las opciones anteriores y hace que la maquina elija una al azar entre 3 posibles

//con true los casos van a pasar 
switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        console.log('Ganaste')
        break;
    case (machine === 'papel'  && user === 'tijera'):
        console.log('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        console.log('Ganaste')
        break;
    default:
        console.log('¡Perdiste!');       
}







function semaforo(color) {
    switch (color) {
      case "verde": {
        console.log("¡Sigue!")
        break
      }
      case "amarillo": {
        console.log("¡Detente!")
        break
      }
      case "rojo": {
        console.log("¡No puedes avanzar!")
        break
      }
      default: {
        console.log("¡No reconozco ese color! :(")
      }
    }
  }
  
  semaforo("verde") //'¡Sigue!'

//EN ESTE CASO NO ES NECESARIO USAR EL BREAK DEBIDO A LA PRESENCIA DEL RETURN QUE AUNTOMATICAMENTE RETORNA EN CUANTO SE CUMPLE LA CONDICION
function solution(article) {
    switch (article) {
      case "computadora":
        return "Con mi computadora puedo programar usando JavaScript";
      case "celular":
        return "En mi celular puedo aprender usando la app de Platzi";
      case "cable":
        return "¡Hay un cable en mi bota!";
      default:
        return "Artículo no encontrado"
      
    }
  }