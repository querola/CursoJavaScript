function Cliente(nombre, saldo){
    this.nombre =  nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;
    if(this.saldo > 1000){
        tipo = 'Gold';
    } else if(this.saldo > 500){
        tipo = 'Platinum';
    } else {
        tipo = 'nomal'
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, tu saldo es de ${this.saldo},
    y tu tipo de cliente es  ${this.tipoCliente() }`;
}
Cliente.prototype.retiraSaldo = function(retiro){
    return this.saldo -= retiro;
}

function Empresa(nombre, saldo, telefono, tipo){
    Cliente.call(this, nombre , saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}

Empresa.prototype = Object.create(Cliente.prototype);

const empresa = new Empresa('Udemy', 100000 ,19299298, 'Educacion');

const cliente1 = new Cliente('pedro', 100);
const cliente2 = new Cliente('Juan', 600);
const cliente3 = new Cliente('Alejandra', 1200);

cliente2.retiraSaldo(300);

Console.log(empresa.nombreClienteSaldo());
console.log(cliente1.nombreClienteSaldo());
console.log(cliente2.nombreClienteSaldo());
console.log(cliente3.nombreClienteSaldo());