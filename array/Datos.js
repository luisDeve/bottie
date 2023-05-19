let saludos = ["Hola", "hola", "Holaaa", "como estas", "Como estas"];
export{saludos}
let hora = ['hora',"dame la hora",'DAME LA HORA','HORA'];
export{hora}
let fecha = ["dame la fecha",'fecha'];
export{fecha}
let chiste=["Cuentame un chiste","cuentame un chiste"]
export {chiste}

let annette=["Annette","annette"]
export{annette}

let maydeli=["Maydeli","maydeli"]
export{maydeli}
let dulce=["Dulce","dulce"]
export{dulce}

let perla=['Perla','perla']
export{perla}

let edith=['edith','Edith']
export {edith}
function Mes(){
    this.diaCompleto= new Date()
}
export{Mes}



class Deportista{
    constructor(nombre,apellido){
        this.nombre=nombre
        this.apellido=apellido
    }
}
//subclase
class Futbolista extends Deportista{
    constructor(nombre,apellido,goles){
        super(nombre,apellido)
        this.goles=goles
    }
}
let nuevoFutbolista=new Futbolista('Luis','Apolinar',50)
console.log(nuevoFutbolista)