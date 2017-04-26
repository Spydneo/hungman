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

//Objeto estadoLetra
var estadoLetra = {
    letter: "",
    letraOk: 0,
    posLetterFound: 0
};
//Relleno de  array DiscoveredWords
for (i = 0; i < palabra.length; i++) {
    discoveredArray[i] = "_"
}

//console.log("DiscoveredArray: " + discoveredArray);

//Function buscarLetra
function buscarLetra(letra, pos) {

    for (i = pos; i < palabra.length; i++) {
        if (letra == palabra[i]) {
            estadoLetra.letraOk = 1;
            estadoLetra.posLetterFound = i;
            estadoLetra.letter = letra;
            break;
        } else {
            estadoLetra.letraOk = 0;
            //estadoLetra.posLetterFound = i;
            //estadoLetra.letter = letra;
        }
    }

   // return estadoLetra;
}





//Actualización del array discoveredWords

function discoveredWords(objLetter) {

    if (objLetter.letraOk == 1) {
        discoveredArray[objLetter.posLetterFound] = objLetter.letter;
        console.log("Descubierta: " + discoveredArray);

    } else {
        console.log("Sin descubrir"+discoveredArray);
    }

}

/// Comprobación INicial
function comprobacionInicial() {
    if (estadoLetra.letter == letterUser) {
        buscarLetra(letterUser, estadoLetra.posLetterFound + 1);
    } else {
        buscarLetra(letterUser, 0);
    }
    console.log("Estado letra: "+estadoLetra);
    discoveredWords(estadoLetra);
}

comprobacionInicial();


//**** 2do paso Número de vidas y si ha ecncontrado la palabra completa