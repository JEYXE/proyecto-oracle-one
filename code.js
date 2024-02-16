let mensaje = "carlos carlos";

console.log(mensaje);

function codificar(mensaje) {
    let tamaño_mensaje= mensaje.length;
    console.log(tamaño_mensaje);
    let mensaje_codificado = "";
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
    console.log(mensaje_codificado);
    decodificar(mensaje_codificado);
    return;
}

function decodificar(mensaje){
   
    while(mensaje.indexOf("ober") !== -1){
        mensaje=mensaje.replace("ober","o");
    }
    while(mensaje.indexOf("enter") !== -1){
        mensaje=mensaje.replace("enter","e");
    }
    while(mensaje.indexOf("imes") !== -1){
        mensaje=mensaje.replace("imes","i");
    }
    while(mensaje.indexOf("ai") !== -1){
        mensaje=mensaje.replace("ai","a");
    }
    while(mensaje.indexOf("ufat") !== -1){
        mensaje=mensaje.replace("ufat","u");
    }

    console.log(mensaje);
    return;

}
codificar(mensaje);
