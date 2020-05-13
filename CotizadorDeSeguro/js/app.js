//constructor para segurp
function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;

}

//todo lo que se muestra
function Interfaz() { }

//eventListener
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    //leer la marca seleccionada del select
    console.log('presionado');
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    console.log(marcaSeleccionada);

    //leer el año seleccionado

    const anio = document.getElementById('anio');
    const anioSeleccionada = anio.options[anio.selectedIndex].value;
    console.log(anioSeleccionada);

    //lee el valor del radioButton
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    //crear una instancia de la interfaz
    const interfaz = new Interfaz();

    //revisamos que los campos no esten vacios
    if(marcaSeleccionada === '' || anioSeleccionada === ''|| tipo === ''){
        console.log('Faltan Datos');
    } else {
        //instanciar seguro y mostrar interfaz
        console.log('Todo Correcto');
    }

});


const max = new Date().getFullYear(),
    min = max - 20;

const selectAnios = document.getElementById('anio');
for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}