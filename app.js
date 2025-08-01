// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    // Capturar el valor ingresado en el campo de texto
    // Aniadir a la lista
    let campoTexto = document.getElementById('amigo');
    let titulo = document.querySelector('.section-title');
    if (esCampoVacio(campoTexto.value)) {
        titulo.innerHTML = "Por favor, inserte un nombre.";
    } else {
        listaAmigos.push(campoTexto.value);
        titulo.innerHTML = "Agregado correctamente";
        campoTexto.value = "";
        limpiarListaAmigosVisibles();
        mostrarAmigos();
    }
    console.log(listaAmigos);
}

function esCampoVacio(textoIngresado) {
    if (textoIngresado === '') {
        return true;
    }
    return false
}
function limpiarListaAmigosVisibles() {
    document.getElementById('listaAmigos').innerHTML = "";
}
// Funcionalidad para listar listaAmigos. Debe recorrer la lista y armar los elementos HTML para mostrarlos en pantalla.
function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    listaAmigos.forEach(element => {
        let elementoLi = document.createElement('li');
        elementoLi.textContent = element;
        lista.appendChild(elementoLi);
    });
}

// Funcionalidad para sortear un amigo.
function hayAmigos() {
    if (listaAmigos.length > 0) {
        return true;
    }
    return false;
}
function limpiarResultado() {
    document.querySelector('#resultado').innerHTML = "";
}
function sortearAmigo() {
    limpiarResultado();
    if (hayAmigos()) {
        let numeroSorteado = Math.floor(Math.random() * listaAmigos.length);
        let elementoUl = document.querySelector('#resultado');
        let resultado = document.createElement('li');
        resultado.innerHTML = listaAmigos[numeroSorteado];
        elementoUl.appendChild(resultado);
    } else {
        let titulo = document.querySelector('.section-title');
        titulo.innerHTML = "Debes agregar por lo menos 1 amigo.";
    }
}