//variables
const presupuestoUsuario = prompt('cual es tu presupuesto quincenal?');
const formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;

//clase de presupuesto
class presupuesto{
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }
    //metodo para ir restando del presupuesto actual
    presupuestoRestante(cantidad = 0){
        return this.restante -= Number(cantidad);
    }
}
//clase interfaz maneja todo lo relacionado al html

class Interfaz{
    insertarPresupuesto(cantidad){
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        //insertar al HTML
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }
    imprimirMensaje(mensaje , tipo){
        const divMensaje = document.createElement('div');
        //se agregan dos clases de boopstrap 
        divMensaje.classList.add('text-center', 'alert');
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }
        divMensaje.appendChild(document.createTextNode(mensaje));
        //insertar en el doom
        document.querySelector('.primario').insertBefore(divMensaje, formulario);
        //quitar el alert
        setTimeout(function(){
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        }, 3000);
    }
    //inserta los gastos a la lista
    agregarGastoListado(nombre, cantidad){
        const gastosListado = document.querySelector('#gastos ul');

        //crear un li
        const li = document.createElement('li');
        //todas son clases de boopstrap
        li.className = 'list-group-item d-flex justify-content-between aling-items-center';
        //insertar el gasto
        li.innerHTML = `${nombre}
        <span class="badge badge-primary basge-pill"> $ ${cantidad} </span>`;
        //insertar al HTML
        gastosListado.appendChild(li);
    }
}
//event Listeners
document.addEventListener('DOMContentLoaded' , function() {
    if(presupuestoUsuario === null || presupuestoUsuario === ''){
        window.location.reload();
    } else {
       //INICIAR UN PRESUPUESTO
        cantidadPresupuesto = new presupuesto(presupuestoUsuario);
        //Instanciar la clase de interfaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
});


formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Enviado');
    //leer del formulario de gastos
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;

    //instenciar la interfaz
    const ui = new Interfaz();

    //comprobar que los campos no esten vacios 

    if(nombreGasto === '' || cantidadGasto === ''){
        //console.log('hubo un error');
        ui.imprimirMensaje('Hubo un error', 'error');
    }else {
        //console.log('el gasto se agrego')
        //INSERTAR EN EL HTML
        ui.imprimirMensaje('Correcto', 'correcto')
        ui.agregarGastoListado(nombreGasto, cantidadGasto);
    }
});