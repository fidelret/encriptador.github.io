
/*--------------------------------ENCRIPTAR MENSAJE-------------------------------*/
document.querySelector("#btn-encriptar").addEventListener("click",function(event){ 
    event.preventDefault();
     var texto = document.querySelector("#input-texto").value;      
     var textCodif = texto.replace(/e/gi,'enter').replace(/i/gi,'imes').replace(/a/gi,'ai').replace(/o/gi,'ober').replace(/u/gi,'ufat');
         document.querySelector("#msg").value = textCodif;     
});

/*------------------------------DESENCRIPTAR MENSAJE-------------------------------*/
document.querySelector("#btn-desencriptar").addEventListener("click",function(event){ 
     event.preventDefault();
     var texto = document.querySelector("#input-texto").value;          
     var textDecod = texto.replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ai/gi,'a').replace(/ober/gi,'o').replace(/ufat/gi,'u');      
          document.querySelector("#msg").value = textDecod;
         
});

/*---------------------------------BOTÓN COPIAR-------------------------------*/
 document.querySelector("#btn-copy").addEventListener("click",function (event){
     event.preventDefault();    
     var copiarText = document.querySelector("#msg");
         copiarText.select();
         document.execCommand("copy");
}); 



 
