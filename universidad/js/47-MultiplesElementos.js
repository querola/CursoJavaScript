let enlaces = document.getElementsByClassName('enlace')[3];

enlaces.style.background = '#333';
enlaces.textContent = 'Nuevo enlace';
console.log(enlaces);


//se puede combinar

const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');

console.log(listaEnlaces);

const links = document.getElementsByTagName('a');

let enlaces2 = Array.from(links);

enlaces2.forEach(function(enlaces2){
    console.log(enlaces2.textContent)
});