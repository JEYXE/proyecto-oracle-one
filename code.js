let mensaje = "hola mundo";

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
    let indice=0
    while (indice>=0){
    indice = mensaje.indexOf('ober');
    console.log(indice);
    mensaje[indice]
}

}
codificar(mensaje);