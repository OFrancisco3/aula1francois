// variables
let numeroMaximoPosible = 10;
let Totalnumeros = parseInt(prompt("indicar el total de numeros a adivinar"))
let numeroSecreto = Math.round(Math.random()*numeroMaximoPosible);
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces  ='vez';
let maximosIntentos = 6;


while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un numero por favor: entre el 1 y el ${numeroMaximoPosible}`)); 
    
    console.log(numeroUsuario);    
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el numero es ${numeroSecreto} y lo hiciste en ${intentos} ${intentos == 1 ? 'vez':'veces'}	`);
    }else{
        if(numeroUsuario>numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert('El numero secreto es mayor')
        }
        intentos++;
        //palabraVeces='veces';        
        if(intentos>maximosIntentos){
            alert(`llegaste al maximo de intentos de ${maximosIntentos}`);
            break;
        }
        console.log(intentos)
    }
}
