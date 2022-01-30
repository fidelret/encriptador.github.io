"use strict"

/*------------------------------TEXTO ENTRADA-------------------------------*/
function entrada(){
     var input = document.querySelector("#textoCodDec");
     return input.value;
}

/*------------------------------TEXTO SALIDA-------------------------------*/
function salida(txtEncriptado){
      document.querySelector("#output").value = txtEncriptado;
}

/*------------------------------BOTÓN CODIFICAR-------------------------------*/
var botonCodif = document.querySelector("#botonCodificar");
        botonCodif.addEventListener("click",function(event){
        event.preventDefault(); 
        console.log("botón presionado")
    var texto = entrada();

                                    /*---------VALIDACIÓN CODIFICAR-----------*/
    var validacion = validarTexto(texto) 
       if (!validacion) {
           let txtEncriptado = encriptar(texto);
           salida(txtEncriptado);
       }else{
        alert("Por favor, sólo letras minúsculas y sin tilde");
       }      
});

/*------------------------------BOTÓN DECODIFICAR-------------------------------*/
var botonDeCodif = document.querySelector("#botonDecodificar");
        botonDeCodif.addEventListener("click",function(event){
        event.preventDefault(); 
        console.log("botón presionado")
    var texto = entrada();
                                   /*---------VALIDACIÓN DECODIFICAR-----------*/
    var validacion = validarTexto(texto)                         
       if (!validacion) {
           let txtDesencriptado = desEncriptar(texto);
           salida(txtDesencriptado);
       }else{
        alert("Por favor, sólo letras minúsculas y sin tilde");
       }      
});

/*---------------------------------VALIDACIÓN-------------------------------*/
function validarTexto(texto){
     var array = texto.split(''); 
     for(var i = 0; i < array.length; i++){
        if(array[i].codePointAt(0) != 32 && (array[i].codePointAt(0) < 97 || array[i].codePointAt(0) > 122)){   
            return true;
        }

     }
}

/*---------------------------------ENCRIPTAR-------------------------------*/
function encriptar(texto) {
    var array = texto.split(''); 
            for (var i = 0; i < array.length; i++) {
                if (array[i] == "a") {
                    array.splice(i, 1, "ai"); 
                } else if (array[i] == "e") {
                    array.splice(i, 1, "enter");
                } else if (array[i] == "i") {
                    array.splice(i, 1, "imes");
                } else if (array[i] == "o") {
                    array.splice(i, 1, "ober");
                } else if (array[i] == "u") {
                    array.splice(i, 1, "ufat");
                }
            }
    return array.join(""); 
}

/*---------------------------------DESENCRIPTAR-------------------------------*/
function desEncriptar(texto) {    
        var textDec = texto.replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ai/gi,'a').replace(/ober/gi,'o').replace(/ufat/gi,'u');              
        return textDec;
        }

/*---------------------------------BOTÓN COPIAR-------------------------------*/
 document.querySelector("#btn-copy").addEventListener("click",function (event){
    event.preventDefault();    
    var copiarText = document.querySelector("#output");
        copiarText.select();
        document.execCommand("copy");
}); 
    
