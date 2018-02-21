class Programa{
    private name:string;
    private version:number;

    public getName(){
        return this.name;
    }

    public setName(name:string){
        this.name = name;
    }

    public getVersion(){
        return this.version;
    }
    
    public setVersion(version:number){
        this.version = version;
    }
}
//HERENCIA CLASE HIJA
class EditorVideo extends Programa{
    private timeline:number;

    public getTimeline(){
        return this.timeline;
    }
    
    public setTimeline(timeline:number){
        this.timeline = timeline;
    }

    public allData():string{
        return this.getName()+" - "+ this.getVersion()+" - "+ this.getTimeline();
    }
}

var editor = new EditorVideo();
editor.setName("My editor ");
editor.setVersion(4.0);
editor.setTimeline(3984893);
console.log(editor.allData());

//LOGICA PROGRAMA

var programas = [];

function save(){
    var name = (<HTMLInputElement>document.getElementById("name")).value.toString();
    var program = new Programa();
    program.setName(name);
    programas.push(program);
    var list = "";
    for(var i=0; i<programas.length; i++){
        list = list + "<li>" + programas[i].getName()+"</li>";
    }
    var listado = <HTMLElement> document.getElementById("listado");
    listado.innerHTML= list;

    (<HTMLInputElement>document.getElementById("name")).value = "";
}

