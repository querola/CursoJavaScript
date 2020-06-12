//promises

const esperando = new Promise(function(resolver , reject){
    setTimeout(function(){
        resolver('se ejecuto');
    }, 5000);
});

esperando.then(function(mensaje){
    console.log(mensaje);
})

const aplicarDescuento = new Promise(function(resolve, reject){
    const descuento = true;
    if(descuento){
        resolve('Descuento Aplicado');
    } else {
        reject('No se puede aplicar el descuento');
    }
});

aplicarDescuento.then(function(resultado){
    console.log(resultado);
}).catch(function(error){
    console.log(error);
});