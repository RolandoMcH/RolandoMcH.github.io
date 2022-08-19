const entradaTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")
/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
function btnEncriptar(){
    const textoEncriptado = encriptar(entradaTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.background = "#ffffff";
    entradaTexto.value = "";
    
}
function btnDesencriptar(){
    const textoDes = desencriptar(entradaTexto.value);
    mensaje.value = textoDes;
        mensaje.style.background = "#ffffff";
    entradaTexto.value = "";
}


function encriptar(entrada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    entrada = entrada.toLowerCase();
    for(let i = 0; i <matrizCodigo.length; i++){
        if(entrada.includes(matrizCodigo[i][0])){
            entrada =entrada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return entrada;
}

function desencriptar(mensajeDes){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    mensajeDes = mensajeDes.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(mensajeDes.includes(matrizCodigo[i][0])){
            mensajeDes = mensajeDes.replaceAll
            (matrizCodigo[i][1],matrizCodigo[i][0])
        }

    }
    return mensajeDes;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value="";
    alert("Texto copiado");
    
}