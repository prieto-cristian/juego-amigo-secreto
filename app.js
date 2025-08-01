let listaAmigos = [];

function agregarAmigo() {
    // Capturar el valor ingresado en el campo de texto
    // Aniadir a la lista
    let campoTexto = document.getElementById('amigo');
    if (esCampoVacio(campoTexto.value)) {
        asignarTexto('.section-title', "Por favor, inserte un nombre.");
    } else {
        listaAmigos.push(campoTexto.value);
        asignarTexto('.section-title', "Agregado correctamente");
        campoTexto.value = "";
        limpiarContenido('#listaAmigos');
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
function limpiarContenido(selector) {
    document.querySelector(selector).innerHTML = "";
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
function sortearAmigo() {
    limpiarContenido("#resultado");
    if (hayAmigos()) {
        let numeroSorteado = Math.floor(Math.random() * listaAmigos.length);
        let elementoUl = document.querySelector('#resultado');
        let resultado = document.createElement('li');
        resultado.innerHTML = listaAmigos[numeroSorteado];
        elementoUl.appendChild(resultado);
    } else {
        asignarTexto('.section-title', "Debes agregar por lo menos 1 amigo.")
    }
}

// Funcion para asignar texto
function asignarTexto(nombreElemento, texto) {
    document.querySelector(nombreElemento).innerHTML = texto;
}