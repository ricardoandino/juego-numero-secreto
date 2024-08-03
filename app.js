let numeroSecreto = 0;
let numeroIntentos = 0;  
let ListaNumeroSorteado = [];
let NumeroMaximo = 10;

function AsignarTextoElemento(elemento, texto){
    let ElementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento() {
    //Para buscar el input por su id.
    let numeroDeUsuario = parseInt(document.getElementById("ValorUsuario").value);
    /*console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    //El triple igual es para decirle al programa que los numeros comparados tienen que ser iguales en valor y en tipo de dato.
    console.log(numeroDeUsuario === numeroSecreto);*/
    
    if (numeroDeUsuario === numeroSecreto){
        //Operador ternario '? -> If' y ': -> else'
        AsignarTextoElemento("P", `Acertaste el número secreto en ${numeroIntentos} ${(numeroIntentos === 1) ? "intento" : "intentos"} `);
        //Habilitar el boton de "Nuevo Juego"
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if(numeroDeUsuario > numeroSecreto){
            AsignarTextoElemento("p", "El número secreto es menor");
        } else {
            AsignarTextoElemento("p", "El número secreto es mayor");
        }
        numeroIntentos++;
        LimpiarCaja();
    }
    return;
}

function LimpiarCaja(){
    document.querySelector("#ValorUsuario").value = "";
}

//Función recursiva = Se retorna asi misma 
function GenerarNumeroSecreto() {
    let NumeroGenerado = Math.floor(Math.random()*NumeroMaximo)+1;
    
    console.log(NumeroGenerado);
    console.log(ListaNumeroSorteado);
    
    if (ListaNumeroSorteado.length == NumeroMaximo){
        AsignarTextoElemento("P", "Ya se sortearon todos los números posibles");
    } else {
        if(ListaNumeroSorteado.includes(NumeroGenerado)){
            return GenerarNumeroSecreto();
        } else{
            ListaNumeroSorteado.push(NumeroGenerado);
            return NumeroGenerado;   
        }
    }    
}

function CondicionesIniciales(){
    AsignarTextoElemento("h1", "Juego del número secreto");
    AsignarTextoElemento("p", `Selecciona un número entre 1 y ${NumeroMaximo}`);
    numeroSecreto = GenerarNumeroSecreto();
    numeroIntentos = 1;     
}

function ReiniciarJuego(){
    //Limpiar la caja 
    LimpiarCaja();

    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos   
    CondicionesIniciales();

    //Dashabilitar el boton de nuvo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

CondicionesIniciales();