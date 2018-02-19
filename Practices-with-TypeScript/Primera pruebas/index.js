function helloWorld(name) {
    return "Hello world!!! my name is " + name;
}
var nameUser = "Danny";
var result = helloWorld(nameUser);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = result;
//VARIABLES Y TIPOS DE DATOS
var nombre = "Danny";
var edad = 23;
var isProgrammer = true;
var lenguajes = ["PHP", "JAVA"];
etiqueta.innerHTML = "Mss. " + nombre + " edad " + edad;
var number = 34;
number = "Maria";
//DIFERENCIAS ENTRE LET Y VAR
var a = 7;
var b = 12;
console.log("ANTES DEL IF A-> " + a + " B-> " + b);
if (a === 7) {
    var a_1 = 5;
    var b = 1;
    console.log("DENTRO DEL IF A-> " + a_1 + " B-> " + b);
}
console.log("DESPUES DEL IF A-> " + a + " B-> " + b);
//FUNCIONES Y TIPADO
function devolverNum(num) {
    return num;
}
function isTrue() {
    var istrue = false;
    return istrue;
}
alert(isTrue());
