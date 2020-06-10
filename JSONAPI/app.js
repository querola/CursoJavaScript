const cargarPost = document.querySelector('#cargar').addEventListener('click', cargarAPI);

function cargarAPI(){
    //crear el objeto
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20' , true);
    console.log('hola')
    xhr.onload = function() {
        if(this.status === 200) {
            console.log(JSON.parse(this.responseText));
            const respuesta = JSON.parse(this.responseText);
            let contenido = '';
            respuesta.forEach(function(post) {
                contenido += `
                <h3>${post.name}</h3>
                <p>${post.url}</p>
                `;
            });
            document.getElementById('listado').innerHTML = contenido;
        }
    }
    //enviar al servidor
    xhr.send();

}