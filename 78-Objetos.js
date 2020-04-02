function  Cliente(nombre, saldo){
    this.nombre = nombre;

    this.saldo = saldo;
    this.tipoCliente = function(edad){
        let tipo;

        if(this.saldo > 1000){
            tipo = 'Gold';
        }else if (this.saldo > 500){
            tipo = 'Platinum';
        }else {
            tipo = 'normal';
        }
        return tipo;
    }
}

const persona = new Cliente('Rodrigo', 20000);
const persona2 = new Cliente('Alejandro', 600);

console.log(persona2.tipoCliente());