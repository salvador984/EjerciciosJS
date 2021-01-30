class Factura {
    constructor(cliente, elementos) {
      this.cliente = cliente;
      this.elementos = elementos;
      this.informacion = {
        baseImponible: 0,
        iva: 21,
        total:0,
        formaPago: "contado"
      }

      this.calculoTotal =function() {
         for (var i=0; i< this.elementos.length; i++){
             this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio; 
         } 
         this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100));
      }

      this.muestraTotal = function () {
        this.calculoTotal();
        alert("El total de los productos es = " + this.informacion.total + " euros");
        }
    }
}

class Cliente {
    constructor(nombre, direccion, telefono, nif) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
}
      
class Elemento {
    constructor(descripcion, cantidad, precio) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

const primerCliente = new Cliente("Cliente 1. Juana Mari", "Madrid", "911", "123456789");
const arrayElementos = [new Elemento("elemento1", 1, 5), new Elemento("elemento2", 2, 12)];
const facturaDelTotal = new Factura(primerCliente, arrayElementos);
facturaDelTotal.muestraTotal();
