
class Chofer {
    constructor(apellido, nombre, legajo, turno, coche){
        this.apellido = apellido;
        this.nombre = nombre;
        this.legajo = legajo;
        this.turno = turno;
        this.coche = coche;
    }
}
const choferes = [];

choferes.push(new Chofer("Alfonso", "Franco", "3100", "Mañana","1"));
choferes.push(new Chofer("Jimenez", "Leonardo", "2738", "Mañana","2"));
choferes.push(new Chofer("Soto", "Ariel", "2939", "Mañana","3"));
choferes.push(new Chofer("Pared", "Fabián", "2936", "Mañana","4"));
choferes.push(new Chofer("Guibondot", "Hernán", "2749", "Mañana","5"));
choferes.push(new Chofer("Torrez", "Kevin", "3082", "Tarde","1"));
choferes.push(new Chofer("Barboza", "Ezequiel", "3005", "Tarde","2"));
choferes.push(new Chofer("Montesino", "José", "2364", "Tarde","3"));
choferes.push(new Chofer("Orue", "Salvador", "2498", "Tarde","4"));
choferes.push(new Chofer("Rodriguez", "Johnny", "2072", "Tarde","5"));



let turno1 = ["1", "00:20", "12:34"];
let turno2 = ["2", "00:54", "12:53"];
let turno3 = ["3", "01:33", "13:00"];
let turno4 = ["4", "02:07", "13:20"];
let turno5 = ["5", "02:39", "13:25"];


class Citacion {
    constructor(primerCoche, segundoCoche, tercerCoche, cuartoCoche, quintoCoche){
        this.primerCoche = primerCoche;
        this.segundoCoche = segundoCoche;
        this.tercerCoche = tercerCoche;
        this.cuartoCoche = cuartoCoche;
        this.quintoCoche = quintoCoche;
            }
}
const citaciones= [];

citaciones.push(new Citacion("1", "2", "3", "4", "5"));
citaciones.push(new Citacion("2", "3", "4", "5", "1"));
citaciones.push(new Citacion("3", "4", "5", "1", "2"));
citaciones.push(new Citacion("4", "5", "1", "2", "3"));
citaciones.push(new Citacion("5", "1", "2", "3", "4"));


let turnoAsignado = [];

primero = Math.floor ((Math.random() * 5 + 1));


for (citacion of choferes){
    if (citacion.coche == primero){
        turnoAsignado[0] = turno1.concat(citacion.legajo); 
    }
    if (citacion.quintoCoche == primero){
        turnoAsignado[1] = turno2.concat(citacion.legajo);
    }
    if (citacion.cuartoCoche == primero){
        turnoAsignado[2] = turno3.concat(citacion.legajo);
    }
    if (citacion.tercerCoche == primero){
        turnoAsignado[3] = turno4.concat(citacion.legajo);
    }
    if (citacion.segundoCoche == primero){
        turnoAsignado[4] = turno5.concat(citacion.legajo);
    }
}

console.log(turnoAsignado[0]);

/* for (citacion of citaciones){
    if (citacion.primerCoche == primero){
        turnoAsignado[0] = turno1.concat(citacion.primerCoche, citacion.segundoCoche, citacion.tercerCoche, citacion.cuartoCoche, citacion.quintoCoche); 
    }
    if (citacion.quintoCoche == primero){
        turnoAsignado[1] = turno2.concat(citacion.primerCoche, citacion.segundoCoche, citacion.tercerCoche, citacion.cuartoCoche, citacion.quintoCoche);
    }
    if (citacion.cuartoCoche == primero){
        turnoAsignado[2] = turno3.concat(citacion.primerCoche, citacion.segundoCoche, citacion.tercerCoche, citacion.cuartoCoche, citacion.quintoCoche);
    }
    if (citacion.tercerCoche == primero){
        turnoAsignado[3] = turno4.concat(citacion.primerCoche, citacion.segundoCoche, citacion.tercerCoche, citacion.cuartoCoche, citacion.quintoCoche);
    }
    if (citacion.segundoCoche == primero){
        turnoAsignado[4] = turno5.concat(citacion.primerCoche, citacion.segundoCoche, citacion.tercerCoche, citacion.cuartoCoche, citacion.quintoCoche);
    }
} */




/* 
let informarLegajo = (parseInt(prompt ("Cuál es su legajo")));

const indexLegajo = choferes.findIndex ((el) => el.legajo == informarLegajo);

const cocheLegajo = choferes[indexLegajo].coche;

const cocheTurno = choferes[indexLegajo].turno;

const 

const citSemana = [] 

console.log ("Bienvenido " + choferes[indexLegajo].nombre + " " + choferes[indexLegajo].apellido); */

