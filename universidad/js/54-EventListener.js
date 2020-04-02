document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);

function ejecutarBoton(e){
    e.preventDefault();
    let elemento;
    elemento = e;
    elemento = e.target.id;


    console.log(elemento);
}