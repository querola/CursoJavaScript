document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos(){
    //crear el objeto xmlhttprequest
    const xhr = new XMLHttpRequest();
    //abrir una conexion
    xhr.open('GET', 'datos.txt', true);

    //una vez que carga
    xhr.onload = function(){
        //200 : correcto | 403: prohibido
        if(this.status == 200){
            document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }
    //enviar el request
    xhr.send();
}