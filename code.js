function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function codificar() {
    let mensaje = document.getElementById('mensaje').value;
    let tamaño_mensaje= mensaje.length;
    let mensaje_codificado = "";
    console.log(mensaje);
    console.log(tamaño_mensaje);
    for (let i = 0; i < tamaño_mensaje; i++) {
        console.log(mensaje[i]);
        if (mensaje[i]=="e"){
            mensaje_codificado += "enter";
        } else if(mensaje[i]=="i"){
            mensaje_codificado += "imes";
        } else if(mensaje[i]=="a"){
            mensaje_codificado += "ai";
        } else if(mensaje[i]=="o"){
            mensaje_codificado += "ober";
        } else if(mensaje[i]=="u"){
            mensaje_codificado += "ufat";
        } else {
            mensaje_codificado += mensaje[i] 
        }
        
      }
      asignarTextoElemento('p',mensaje_codificado);
    return ;
}

function decodificar(){
    let mensaje_decodificado = document.getElementById('mensaje').value;
    while(mensaje_decodificado.indexOf("ober") !== -1){
        mensaje_decodificado=mensaje_decodificado.replace("ober","o");
    }
    while(mensaje_decodificado.indexOf("enter") !== -1){
        mensaje_decodificado=mensaje_decodificado.replace("enter","e");
    }
    while(mensaje_decodificado.indexOf("imes") !== -1){
        mensaje_decodificado=mensaje_decodificado.replace("imes","i");
    }
    while(mensaje_decodificado.indexOf("ai") !== -1){
        mensaje_decodificado=mensaje_decodificado.replace("ai","a");
    }
    while(mensaje_decodificado.indexOf("ufat") !== -1){
        mensaje_decodificado=mensaje_decodificado.replace("ufat","u");
    }
    asignarTextoElemento('p',mensaje_decodificado);
    return;

}



