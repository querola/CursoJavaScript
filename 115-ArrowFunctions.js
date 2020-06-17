let aprendiendo;

aprendiendo = function(){
    console.log('aprendiendo Javascript')
}
//Misma forma pero con arrow

aprendiendo = () => {
    console.log('Aprendiendo JavaScript')
}
//se puede hacer inclusive en una linea sin llaves
aprendiendo = () => console.log('aprendiendo Javascript');
//retornando un valor sin return
aprendiendo = () => 'Aprendiendo JavaScript';
//retornando un objeto
aprendiendo = () => ({aprendiendo: 'hola'});
//pasar 1 parametros
aprendiendo = tecnologia => console.log(`aprendiendo ${tecnologia}`);
//pasar 2 o mas parametros
aprendiendo = (tecn1 , tecn2) => console.log(`aprendiendo ${tecn1} y ${tecn2}`);

const productos = ['Disco', 'Camisa', 'Guitarra']

const letrasProductos = productos.map(function (producto){
    return producto.length
});

const letrasProductos = productos.map(producto => producto.length);

console.log(letrasProductos)

//con forEach

productos.forEach(producto => console.log(producto));
