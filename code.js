function codificar() {
    let mensaje = document.getElementById('mensaje_input').value;
    let tamaño_mensaje= mensaje.length;
    let mensaje_codificado = "";
    for (let i = 0; i < tamaño_mensaje; i++) {
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
      document.getElementById("mensaje_output").value = mensaje_codificado;
      document.getElementById("mensaje_input").value = "";
      document.querySelector('#copiar').disabled = false;
      activacion();
    return ;
}

function decodificar(){
    let mensaje_decodificado = document.getElementById('mensaje_input').value;
    mensaje_decodificado=mensaje_decodificado.replaceAll("ai","a");
    mensaje_decodificado=mensaje_decodificado.replaceAll("enter","e");
    mensaje_decodificado=mensaje_decodificado.replaceAll("imes","i");
    mensaje_decodificado=mensaje_decodificado.replaceAll("ober","o");
    mensaje_decodificado=mensaje_decodificado.replaceAll("ufat","u");
    document.getElementById("mensaje_output").value =mensaje_decodificado;
    document.getElementById("mensaje_input").value = "";
    document.querySelector('#copiar').disabled = false;
    activacion();
    return;
}

document.getElementById('mensaje_input').addEventListener('input', activacion);

function activacion()  {
    if (document.querySelector('#mensaje_input').value === '') {
        document.querySelector('#codificar').disabled = true;
        document.querySelector('#decodificar').disabled = true;
      } else {
        document.querySelector('#codificar').disabled = false;
        document.querySelector('#decodificar').disabled = false;
        }
    return;
}


async function copiarAlPortapapeles() {
    try {
        await navigator.clipboard.writeText(document.querySelector('#mensaje_output').value);
        console.log('Contenido copiado al portapapeles');
        /* Resuelto - texto copiado al portapapeles con éxito */
      } catch (err) {
        console.error('Error al copiar: ', err);
        /* Rechazado - fallo al copiar el texto al portapapeles */
      }
    document.getElementById("mensaje_output").value = "";
    document.querySelector('#copiar').disabled = true;
}

