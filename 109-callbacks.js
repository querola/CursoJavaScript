//callbacks es una funcion que corre dentro de otra funcion
//callback en foreach
const ciudades = ['Londres', 'NewYork', 'Madrid' , 'Paris', 'Venecia'];

//Inline Callback

ciudades.forEach(function(ciudad){
    console.log(ciudad);
});

//con la funcion definida
function callback(ciudad){
    console.log(ciudad);
}
ciudades.forEach(callback);

//lsitado de paises
const paises = ['francia', 'mexico', 'España'];
//se agrega un nuevo pais despues de 2 segundos
function nuevoPais(pais, callback){
    setTimeout(function() {
        paises.push(pais);
        callback();
    }, 2000);
}
function mostrarPaises(){
    setTimeout(function(){
        let html = '';
        paises.forEach(function(pais){
            html += `<li>${pais}</li>
            `;
        });
        document.getElementById('app').innerHTML = html;

    }, 1000);
}   
//Agregar nuevo pais
nuevoPais('Alemania', mostrarPaises);

//Mostrar los paises
mostrarPaises();