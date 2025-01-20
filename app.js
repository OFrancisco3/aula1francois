// variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces  ='vez';


while(numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("Me indicas un numero por favor:");
    
    console.log(numeroUsuario);    
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el numero es ${numeroSecreto} y lo hiciste en ${intentos} ${palabraVeces}	`);
    }else{
        if(numeroUsuario>numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert('El numero secreto es mayor')
        }
        intentos++;
        palabraVeces='veces';
        if(intentos>3){
            alert('llegaste al maximo de intentos');
            break;
        }
        console.log(intentos)
    }
}
