var Coche = /** @class */ (function () {
    function Coche() {
        this.color = "";
        this.marca = "";
        this.velocidad = 0;
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getMarca = function () {
        return this.marca;
    };
    Coche.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
//CREACION DE OBJETOS A PARTIR DE LA CLASE COCHE
var coche = new Coche();
coche.setColor("VERDE PACAY");
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("El color del coche cero es: " + coche.getColor());
console.log("La velocidad  del coche cero es: " + coche.getVelocidad());
coche.frenar();
console.log("La velocidad  del coche cero es: " + coche.getVelocidad());
var cocheUno = new Coche();
cocheUno.setColor("ROSA PALO");
console.log("El color del coche es: " + cocheUno.getColor());
var cocheDos = new Coche();
cocheDos.setColor("MOSTAZA");
console.log("El color del coche es: " + cocheDos.getColor());
