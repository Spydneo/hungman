//**** Generar Buttons

function generateButton(text) {
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode(text);
    btn.appendChild(t);

    return btn;
}


function addElement(element, id) {
    document.getElementById(id).appendChild(element);
}


function crearBotones() {

}


generateButton("Letra")
addElement(generateButton("Letra"), "botones");


document.body.appendChild(generateButton("BotonBody"));



//**************************   Lógica

//****Variables a utilizar
var palabra = ["a", "n", "i", "m", "a", "l", ]
var discoveredArray = [];
var letterUser = "a";
var wordComplete = 0;
//Objeto estadoJuego
var estadoJuego = {
    vidas: 0,
    letraOk: 0,
};
//Relleno de  array DiscoveredWords
for (i = 0; i < palabra.length; i++) {
    discoveredArray[i] = "_"
}

//console.log("DiscoveredArray: " + discoveredArray);

//Function buscarLetra
function buscarLetra(letra) {

    for (i = 0; i < palabra.length; i++) {
        if (letra == palabra[i]) {
            estadoJuego.letraOk = 1;
            discoveredArray[i] = letra;
        } else {
            estadoJuego.letraOk = 0;

        }
    }
   ///
        var estado = discoveredArray.indexOf("_");
        if (estado == -1) {
            wordComplete = 1;
            console.log("Palabra completada");
        }

    return wordComplete;
}


//Actualización del array discoveredWords


/// Comprobación INicial
function comprobacionInicial(letra) {
   
        if (estadoJuego.vidas <= 5) {
            ++estadoJuego.vidas
            buscarLetra(letra);
        } else {
            console.log("Vidas Teminadas");
        }
    //console.log("Estado Juego: "+estadoJuego);
    console.log("arrayDescubierto hasta el momento: " + discoveredArray);
}

comprobacionInicial(letterUser);


//**** 2do paso Número de vidas y si ha ecncontrado la palabra completa