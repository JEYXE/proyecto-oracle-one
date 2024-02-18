function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function codificar() {
    let mensaje = document.getElementById('mensaje').value;
    mensaje=mensaje.toLowerCase()
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
      document.getElementById("mensaje").value = "";
      document.querySelector('#copiar').disabled = false;
      activacion();

    return ;
}

function decodificar(){
    let mensaje_decodificado = document.getElementById('mensaje').value;
    mensaje_decodificado=mensaje_decodificado.toLowerCase()
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
    document.getElementById("mensaje").value = "";
    document.querySelector('#copiar').disabled = false;
    activacion();
    return;

}

document.getElementById('mensaje').addEventListener('input', activacion);


function activacion(){
    if (document.querySelector('#mensaje').value === '') {
        document.querySelector('#codificar').disabled = true;
        document.querySelector('#decodificar').disabled = true;
      } else {
        document.querySelector('#codificar').disabled = false;
        document.querySelector('#decodificar').disabled = false;
        }
    return;
}

function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }