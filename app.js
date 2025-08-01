// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // Capturar el valor ingresado en el campo de texto
    // Aniadir a la lista
    let campoTexto = document.getElementById('amigo');
    let titulo = document.querySelector('.section-title');
    if(esCampoVacio(campoTexto.value)){
        titulo.innerHTML = "Por favor, inserte un nombre.";
    }else{
        amigos.push(campoTexto.value);
        titulo.innerHTML = "Agregado correctamente";
        campoTexto.value = "";
    }
    console.log(amigos);
}

function esCampoVacio(textoIngresado) {
    if(textoIngresado === ''){
        return true;
    }
    return false
}
