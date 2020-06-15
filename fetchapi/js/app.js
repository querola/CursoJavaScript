document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarRest);
function cargarTXT(){
    fetch('datos.txt')
        .then(function(res){
            return res.text();
        })
        .then(function(empleados){
            console.log(empleados);
            document.getElementById('resultado').innerHTML = empleados;
        })
        .catch(function(error){
            console.log(error);
        });
}

function cargarJSON(){
    fetch('empleados.json')
        .then(function(resultado){
            return resultado.json();
        })
        .then(function(datos){
            let html = '';
            datos.forEach(function(empleado) {
                html += `
                    <li>${empleado.nombre} ${empleado.puesto}</li>
                `;
            });
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error){
            console.log(error);
        });
}

function cargarRest() {
    fetch('https://picsum.photos/list').then(function(res){
        return res.json();
    }).then(function(imagenes){
        //console.log(imagenes);
        let html = '';
        imagenes.forEach(function(imagen){
            html += `
                <li>
                    <a target= "_blank" href="${imagen.post_url}"> Ver Imagen </a>
                </li>
            `;
        });
        document.getElementById('resultado').innerHTML = html;
    })
}