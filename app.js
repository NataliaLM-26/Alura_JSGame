//Variables
//optimización del código DESAFIO

let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces= 'vez';
let maximosIntentos = 2;


let limite=prompt("Indica el límite para adivinar el número: de 1 a _");

let numeroSecreto = Math.floor(Math.random()*limite)+1;
console.log(numeroSecreto);

while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${limite}  por favor:`));

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto){
        //Correcto
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if(numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        }else{
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos++;//+=1
        //palabraVeces='veces';
        if(intentos > maximosIntentos){
            alert('Llegaste al número máximo de ' +maximosIntentos + ' intentos');
            break;
        }
        //La condición no se cumple
        //alert('Lo siento, no acertaste el número')
    }
}