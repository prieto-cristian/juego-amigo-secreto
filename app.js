let listaAmigos = [];
const listaEmojis = ['🫵​', '🫶​', '​🎁​', '⭐​', '🔥', '💫​', '👀​', '🥳​'];
const mensajeUltimoGanador = "Ultimo ganador:";
const mensajeNumeroParticipantes = "Nro de participantes:"

function agregarAmigo() {
    // Capturar el valor ingresado en el campo de texto
    // Aniadir a la lista
    let campoTexto = document.getElementById('amigo');
    if (esCampoVacio(campoTexto.value)) {
        crearAlerta("El campo esta vacio, por favor rellene el campo.");
    } else {
        if (esRepetido(campoTexto.value)) {
            crearAlerta("No se permiten participantes repetidos");
        } else {
            let alerta = document.querySelector("#posiblesErrores");
            alerta.classList.add('d-none');
            listaAmigos.push(campoTexto.value);
            campoTexto.value = "";
            // actualizar el numero de participantes
            actualizarLaCantidadDeParticipantes();
            limpiarContenido('#listaAmigos');
            mostrarAmigos();
        }
    }
}
function actualizarLaCantidadDeParticipantes(){
    document.getElementById('textoNumeroParticipantes').innerHTML = `${mensajeNumeroParticipantes} ${listaAmigos.length}`;
}
function crearAlerta(mensaje) {
    let alerta = document.querySelector("#posiblesErrores");
    alerta.classList.remove('d-none');
    alerta.textContent = mensaje;
}
function esRepetido(textoIngresado) {
    return listaAmigos.includes(textoIngresado);
}
function esCampoVacio(textoIngresado) {
    return textoIngresado === '';
}
function limpiarContenido(selector) {
    document.querySelector(selector).innerHTML = "";
}
// Funcionalidad para listar listaAmigos. Debe recorrer la lista y armar los elementos HTML para mostrarlos en pantalla.
function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    listaAmigos.forEach((element, index) => {
        let elementoLi = document.createElement('li');
        elementoLi.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'bg-info-subtle', `participante-${index}`);
        elementoLi.textContent = element;
        let botonEliminar = document.createElement('button');
        botonEliminar.classList.add('btn', 'btn-lg', 'btn-close', `participante-boton-${index}`);
        botonEliminar.addEventListener("click", function(){
            const li = this.parentElement;
            const indiceParticipante = listaAmigos.indexOf(li.textContent);
            listaAmigos.splice(indiceParticipante, 1);
            li.remove();
            actualizarLaCantidadDeParticipantes();
        });
        elementoLi.appendChild(botonEliminar);
        lista.appendChild(elementoLi);
    });
}
// Funcionalidad para sortear un amigo.
function hayAmigos() {
    if (listaAmigos.length > 1) {
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
        crearAlerta("No hay suficientes participantes para realizar el sorteo. Se necesitan al menos 2 participantes");
    }
}

// Funcion para asignar texto
function asignarTexto(nombreElemento, texto) {
    document.querySelector(nombreElemento).innerHTML = texto;
}