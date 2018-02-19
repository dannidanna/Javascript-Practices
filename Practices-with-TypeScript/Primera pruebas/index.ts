function helloWorld(name){
    return "Hello world!!! my name is "+name;
}

var nameUser = "Danny";
var result = helloWorld(nameUser);
var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML = result;

//VARIABLES Y TIPOS DE DATOS
var nombre:string = "Danny";
var edad:number = 23;
var isProgrammer: boolean = true;
var lenguajes: Array<string> = ["PHP", "JAVA"];
etiqueta.innerHTML = "Mss. "+nombre+" edad "+edad;

var number:any = 34;
number = "Maria";

//DIFERENCIAS ENTRE LET Y VAR
var a = 7;
var b = 12;
console.log("ANTES DEL IF A-> "+a+" B-> "+b);
if(a === 7){
    let a = 5;
    var b = 1;
    console.log("DENTRO DEL IF A-> "+a+" B-> "+b);
}
console.log("DESPUES DEL IF A-> "+a+" B-> "+b);

//FUNCIONES Y TIPADO
function devolverNum(num:number){
    return num;
}

function isTrue():boolean{
    let istrue = false;
    return istrue;
}

alert(isTrue());