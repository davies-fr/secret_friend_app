let amigos = [];

function adicionarAmigo() {
    let digiteAmigo = document.getElementById('amigo');
    let nomeAmigo = digiteAmigo.value;


if (!nomeAmigo) {
    alert("Digite o nome do amigo!");
    return;
    }
    amigos.push(nomeAmigo);
    digiteAmigo.value = "";
    digiteAmigo.focus();
    refreshAmigos();
}

function refreshAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for( let i = 0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("É necessário adicionar amigos para sortear!");
        return;
    }
    let amigoSorteadoIndex = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[amigoSorteadoIndex];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O seu amigo sorteado foi: ${amigoSorteado}`;
}