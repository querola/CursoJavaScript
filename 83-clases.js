class Cliente{
    constructor(nombre, apellido , saldo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }
    ImprimirSaldo(){
        return `hola ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }
    tipoCliente() {
        let tipo;
        if(this.saldo > 10000){
            tipo = 'gold';
        }else if (this.saldo > 5000){
            tipo = 'platinum';
        }else {
            tipo = 'normal';
        }
        return tipo	;

    }
}

const maria = new Cliente('maria', 'Perez', 10000);

console.log(maria.tipoCliente());