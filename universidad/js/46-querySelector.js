//con querySelector puedo seleccionar tambien clases no solo id
//si quieres seleccionar una clase que enga muchos elementos se utiliza querySelectorAll
let enlace;
const encabezado = document.querySelector('.encabezado');
// const encabezado = document.querySelector('#encabezado');

enlace = document.querySelector('#principal a:first-child');
enlace = document.querySelector('#principal a:nth-child(3)');
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.textContent = "hola";

console.log(enlace);