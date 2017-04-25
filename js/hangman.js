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



//*******   Lógica


var palabra = ["a", "n", "i", "m", "a", "l", ]


var estadoLetra = {
    letraOk: 0,
    posLetterFound: 0
};

function buscarLetra(letra, pos) {
    
    for (i=pos; i<palabra.length; i++) {
        if (letra == palabra[i]) {
            estadoLetra.letraOk = 1;
            estadoLetra.posLetterFound = i;
            break;
        } else {
            estadoLetra.letraOk = 0;
        }
    }

    return estadoLetra;
}

//**** 2do paso Número de vidas y si ha ecncontrado la palabra completa

function discoveredWords(letra, pos){
    discoveredWords = [];
}





