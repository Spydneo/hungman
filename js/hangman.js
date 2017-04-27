$(document).ready(function () {



    function generateButton(letra) {
        var $newButton = $("<button>");
        $newButton.text(letra);
        $newButton.click(function () {
            tratarClick($(this));
        });
        //var r= $('<input type="button" value="new button"/>');
        //$("#w3s").attr("href", "https://www.w3schools.com/jquery");
        
        return $newButton;
        
       // $("#divButtons").append($newButton);
    }


    console.log(alphabet);
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    function createButtons() {
        for (i = 0; i < alphabet.length; i++) {
            $("#divButtons").append(generateButton(alphabet[i]));
        }
    }
    createButtons();
    
    function fillMatches(){
        $("#idWins").text("Hola");
        $("#idLost").text(estadoJuego.matchesLost);

    }

    fillMatches();
    
    function tratarClick(button) {
        console.log("***Boton pulsado: " + button.text());
        comprobacionInicial(button.text());
        updateLives();
        endGame();
        showDiscoveredArray();

    }

    function showDiscoveredArray() {
        $("#arrayWord").text(discoveredArray.join(" "));
    }

    function updateLives() {
        $("#pLifes").text("You have " + estadoJuego.vidas + " lives");
    }

    function endGame() {
        if (estadoJuego.endGame == true) {
            if (estadoJuego.wordComplete == true) {
                ++estadoJuego.matchesWon;
                $("#pLifes").text("***You Win**** "+estadoJuego.matchesWon);
                $("button").attr("disabled", "disabled")
            } else {
                ++estadoJuego.matchesLost;
                $("#pLifes").text("***You lost**** "+estadoJuego.matchesLost);
                $("button").attr("disabled", "disabled")
            }
            
            fillMatches();

        }
    }

});
//**************************   Lógica ************************

//****Variables a utilizar
var palabra = ["a", "n", "i", "m", "a", "l", ]
var discoveredArray = [];
var letterUser = "a";
//Objeto estadoJuego
var estadoJuego = {
    vidas: 5,
    endGame: false,
    wordComplete: false,
    matchesWon: 0,
    matchesLost: 0
};
//Relleno de  array DiscoveredWords
for (i = 0; i < palabra.length; i++) {
    discoveredArray[i] = "_"
}

//console.log("DiscoveredArray: " + discoveredArray);

//********* Function buscarLetra
function buscarLetra(letra) {

    for (i = 0; i < palabra.length; i++) {
        if (letra == palabra[i]) {
            discoveredArray[i] = letra;
        }
    }
    //Fin del juego?
    if (estadoJuego.vidas == 0) {
        console.log("**Vidas Teminadas");
        estadoJuego.endGame = true;
        console.log("**End game?: " + estadoJuego.endGame);
    }
    ///
    var estado = discoveredArray.indexOf("_");
    if (estado == -1) {
        estadoJuego.wordComplete = true;
        console.log("Palabra completada");
    }

    //return wordComplete;
}


///***** Comprobación INicial. CORREGIR: Ultima vida y letra pulsada correcta, 
// no actualiza el array descubierto.
function comprobacionInicial(letra) {
    if (estadoJuego.vidas > 0) {
        --estadoJuego.vidas
        buscarLetra(letra);
    }
    console.log("arrayDescubierto hasta el momento: " + discoveredArray);
}

//comprobacionInicial(letterUser);


//**** 2do paso Número de vidas y si ha ecncontrado la palabra completa