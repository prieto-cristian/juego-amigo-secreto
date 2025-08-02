let listaAmigos = [];
const listaEmojis = ['🫵​','🫶​','​🎁​','⭐​','🔥','💫​','👀​', '🥳​'];
const mensajeUltimoGanador = "Ultimo ganador:";
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
        elementoLi.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'bg-danger-subtle');
        elementoLi.textContent = element;
        let botonEliminar = document.createElement('button');
        botonEliminar.classList.add('btn','btn-lg', 'btn-close');
        elementoLi.appendChild(botonEliminar);
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
        let emojiAleatorio = Math.floor(Math.random() * listaEmojis.length);
        let elementoUl = document.querySelector('#resultado');
        let resultado = document.createElement('li');
        resultado.classList.add('fs-1', 'd-flex', 'justify-content-center', 'align-items-center');
        resultado.innerHTML = `${listaEmojis[emojiAleatorio]} ${listaAmigos[numeroSorteado]} ${listaEmojis[emojiAleatorio]}`;
        elementoUl.appendChild(resultado);
        // Colocar el ultimo ganador en la etiqueta p
        document.querySelector('#textoUltimoGanador').innerHTML = `${mensajeUltimoGanador} ${listaAmigos[numeroSorteado]}`;
    } else {
        asignarTexto('.section-title', "Debes agregar por lo menos 1 amigo.")
    }
}

// Funcion para asignar texto
function asignarTexto(nombreElemento, texto) {
    document.querySelector(nombreElemento).innerHTML = texto;
}