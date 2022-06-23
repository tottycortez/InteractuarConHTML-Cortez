let titulo = document.getElementById('titulo');
let nombre = prompt('Ingrese su nombre:');
titulo.innerText +=' '+nombre+'!';

let numero = +prompt('Elija entre el 0 y 1: ');

let azar = Math.random();
azar = Math.round(azar);

while (numero != azar) {
    numero = +prompt('Fallaste! El numero era '+azar+' y elejiste '+numero+'. Intentá de nuevo entre el 0 y 1: ');
}

let tituloSecundario = document.createElement('h3');
tituloSecundario.innerHTML = 'Elejiste '+azar+' GANASTE!!!';
document.body.append(tituloSecundario);