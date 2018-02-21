interface CocheBase{
    getColor():string;
    getMarca():string;
}

class Coche implements CocheBase{
    private color:string;
    private marca:string;
    private velocidad:number;

    public constructor(color:string=null){
        this.color = color;
        this.marca = "";
        this.velocidad = 0;
        if(color == null){
            this.color = "WHITE GENERIC";
        }else{
            this.color = color;
        }
    }

    public getColor():string{
        return this.color;
    }

    public setColor(color:string){
        this.color = color;
    }

    public getMarca():string{
        return this.marca;
    }

    public setMarca(marca:string){
        this.marca = marca;
    }

    public getVelocidad(){
        return this.velocidad;
    }

    public setVelocidad(velocidad:number){
        this.velocidad = velocidad;
    }

    public acelerar(){
        this.velocidad++;
    }

    public frenar(){
        this.velocidad--;
    }
    
}
//CREACION DE OBJETOS A PARTIR DE LA CLASE COCHE
var coche = new Coche("WHITE");
//coche.setColor("VERDE PACAY");
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("El color del coche cero es: "+coche.getColor());
console.log("La velocidad  del coche cero es: "+coche.getVelocidad());
coche.frenar();
console.log("La velocidad  del coche cero es: "+coche.getVelocidad());


var cocheUno = new Coche();
cocheUno.setColor("ROSA PALO");
console.log("El color del coche es: "+cocheUno.getColor());

var cocheDos = new Coche();
cocheDos.setColor("MOSTAZA");
console.log("El color del coche es: "+cocheDos.getColor());