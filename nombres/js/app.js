document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);
//llamado ajax e imprimir resultados
function cargarNombres(e){
    e.preventDefault();

    //leer variables
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;
    
    const cantidad = document.getElementById('numero').value;
    let url = '';

    url += 'http://uinames.com/api/?'; 
    //si hay origen agregarlo a la url
    //!== no es igual
    if(origenSeleccionado !== ''){
        //aperson para agregar mas a la concatenacion
        url += `region=${origenSeleccionado}&`
    }
    //si hay un genero agregarlo a la url
    if(generoSeleccionado !== ''){
        //aperson para agregar mas a la concatenacion
        url += `gender=${generoSeleccionado}&`
    }
    if(cantidad !== ''){
        //aperson para agregar mas a la concatenacion
        url += `amount=${cantidad}&`
    }
    //conectar con ajax
    //iniciar X
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function(){
        if(this.status === 200){
            const nombres = JSON.parse(this.responseText);
            //GENERAR EL HTML
            let htmlNombres = '<h2>Nombres Generados</h2>';

            htmlNombres += '<ul class="lista">';
            nombres.forEach(function(nombre){
                htmlNombres += `
                    <li>${nombre.name}
                `;
            })
            htmlNombres += '</ul>';
            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    }
    //enviar el request
    xhr.send();

}