$(document).ready(function(){
    
     
    
    function generateButton(letra){
        var $newButton = $("<button>");
        $newButton.text(letra);
        $newButton.click(function(){
           tratarClick($(this));
        });
        //var r= $('<input type="button" value="new button"/>');
        //$("#w3s").attr("href", "https://www.w3schools.com/jquery");
        $("#divButtons").append($newButton);    
    }

    
    console.log(alphabet);
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    function createButtons(){
        for(i=0; i<alphabet.length; i++){
            generateButton(alphabet[i]);
        }
    }
    
    createButtons();
    
    
    /*
    /// EJRCCIOS CLASE
    $("img").addClass("image-center");
    //$("article p:nth-child(5)").remove();
    $("article p:eq(5)").remove();	
    
    //Añadir li
    var $newLi = $("<li>");
    $newLi.text("Nuevo Item");
    $("ol").append($newLi);
   
    //3 inputs
    $("input").click(function(){
        $("body").css("background","green");
    });
    
    $("img").click(function(){
       $(this).hide(); 
    });
    
    */
    
    
    function tratarClick(button){
        console.log("Boton pulsado: "+button.text());
        
         
    }
    
    
   
    
});

//**************************   Lógica ************************

//****Variables a utilizar
var palabra = ["a", "n", "i", "m", "a", "l", ]
var discoveredArray = [];
var letterUser = "a";
var wordComplete = 0;
//Objeto estadoJuego
var estadoJuego = {
    vidas: 0,
    //letraOk: 0,
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
          //  estadoJuego.letraOk = 1;
            discoveredArray[i] = letra;
        } else {
          //  estadoJuego.letraOk = 0;

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
    console.log("arrayDescubierto hasta el momento: " + discoveredArray);
}

comprobacionInicial(letterUser);


//**** 2do paso Número de vidas y si ha ecncontrado la palabra completa