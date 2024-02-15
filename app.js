/* Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

let inputEntrada = document.querySelector(".input-encriptar");
let encriptarArreglo = {e:"enter",i:"imes",a:"ai",o:"ober",u:"ufat"};
let desencriptarArreglo = {enter:"e",imes:"i",ai:"a",ober:"o",ufat:"u"};

function encriptar(){
    var encriptar = inputEntrada.value.replace(/e|i|a|o|u/g,function(remplazar){
        return encriptarArreglo[remplazar];
    });
    document.querySelector(".input-desencriptar").value = encriptar;
    limpiarCaja();      
}

function desencriptar() {
    var desencriptar = inputEntrada.value.replace(/enter|imes|ai|ober|ufat/g,function(remplazar){
        return desencriptarArreglo[remplazar];
    });
    document.querySelector(".input-desencriptar").value = desencriptar;
    limpiarCaja();    
}

function limpiarCaja(){
        document.querySelector('.input-encriptar').value = '';
}

desencriptar()
encriptar();