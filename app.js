
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else{
        if ( numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es Menor');
        }else{
            asignarTextoElemento('p','El numero secreto es Mayor');
        }
        intentos++;
        LimpiarCaja(); 
    }
    return numeroUsuario;
}

function LimpiarCaja() {
 document.getElementById('valorUsuario').value = '';
}

function generarNumeroAleatorio() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
     //Si ya agotamos la cantidad maxima de numeros generados
     if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles")
     } else {
        //Si el numero generado esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroAleatorio();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesInciales() {
asignarTextoElemento("h1","Juego del numero secreto");
asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroAleatorio();
intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    LimpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar intentos
    condicionesInciales();
    //Deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    
    
}

condicionesInciales();