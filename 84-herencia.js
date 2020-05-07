class Cliente{
    constructor(nombre , saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    ImprimirSaldo(){
        return `hola ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }
    static bienvenida(){
        return `´bienvenida al cajero`
    }
}
class Empresa extends Cliente {
    constructor(nombre , saldo , telefono , tipo){
        //va hacia el constructor padre
        super(nombre, saldo)
        this.telefono = telefono;
        this.tipo = tipo;

    }
}
const empresa = new Empresa ('Empresa 1', 10000, 192992900 , 'construccion');
console.log(empresa.ImprimirSaldo());
