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

class Turno {
    constructor(numero, citacionTM, citacionTT){
        this.numero = numero;
        this.citacionTM = citacionTM;
        this.citacionTT = citacionTT;
        this.legajoLunesTM = [];
        this.legajoLunesTT = [];
        this.legajoMartesTM = [];
        this.legajoMartesTT = [];
        this.legajoMiercolesTM = [];
        this.legajoMiercolesTT = [];
        this.legajoJuevesTM = [];
        this.legajoJuevesTT = [];
        this.legajoViernesTM = [];
        this.legajoViernesTT = [];

    }
}
const turnos = [];

turnos.push(new Turno("1", "00:20", "12:34"));
turnos.push(new Turno("2", "00:54", "12:53"));
turnos.push(new Turno("3", "01:33", "13:00"));
turnos.push(new Turno("4", "02:07", "13:20"));
turnos.push(new Turno("5", "02:39", "13:25"));

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



getPrimero = Math.floor ((Math.random() * 5 + 1));

const citSemana = citaciones.findIndex((el) => el.primerCoche == getPrimero);

let primero;
let segundo;
let tercero;
let cuarto;
let quinto;

switch (citSemana){
case 0:
    primero = citaciones[0];
    segundo = citaciones[1];
    tercero = citaciones[2];
    cuarto = citaciones[3];
    quinto = citaciones[4];
break;
case 1:
    primero = citaciones[1];
    segundo = citaciones[2];
    tercero = citaciones[3];
    cuarto = citaciones[4];
    quinto = citaciones[0];
break;
case 2:
    primero = citaciones[2];
    segundo = citaciones[3];
    tercero = citaciones[4];
    cuarto = citaciones[0];
    quinto = citaciones[1];
break;
case 3:
    primero = citaciones[3];
    segundo = citaciones[4];
    tercero = citaciones[0];
    cuarto = citaciones[1];
    quinto = citaciones[2];
break;
case 4:
    primero = citaciones[4];
    segundo = citaciones[0];
    tercero = citaciones[1];
    cuarto = citaciones[2];
    quinto = citaciones[3];
break;
}
let numCoche = [primero, segundo, tercero, cuarto, quinto];
        
for (citacion of choferes){

    for (i=0; i<numCoche.length;i++){

        if (citacion.turno == "Mañana"){
            if (citacion.coche == numCoche[i].primerCoche){
                turnos[i].legajoLunesTM.push(citacion.legajo);
            }
            else if (citacion.coche == numCoche[i].segundoCoche){
                turnos[i].legajoMartesTM.push(citacion.legajo);
            }
            else if (citacion.coche == numCoche[i].tercerCoche){
                turnos[i].legajoMiercolesTM.push(citacion.legajo);
            }
            else if (citacion.coche == numCoche[i].cuartoCoche){
                turnos[i].legajoJuevesTM.push(citacion.legajo);
            }
            else if (citacion.coche == numCoche[i].quintoCoche){
                turnos[i].legajoViernesTM.push(citacion.legajo);
            }
        }
    }  
}
for (citacion of choferes){

    for (i=0; i<numCoche.length;i++){

        if (citacion.turno == "Tarde"){
            if (citacion.coche == numCoche[i].primerCoche){
                turnos[i].legajoLunesTT.push(citacion.legajo);
            }
            else if (citacion.coche == numCoche[i].segundoCoche){
                turnos[i].legajoMartesTT.push(citacion.legajo);
            }
            else if (citacion.coche == numCoche[i].tercerCoche){
                turnos[i].legajoMiercolesTT.push(citacion.legajo);
            }
            else if (citacion.coche == numCoche[i].cuartoCoche){
                turnos[i].legajoJuevesTT.push(citacion.legajo);
            }
            else if (citacion.coche == numCoche[i].quintoCoche){
                turnos[i].legajoViernesTT.push(citacion.legajo);
            }
        }
    }  
}

//turnos[0].legajoLunesTM[0]

let informarLegajo = (parseInt(prompt ("Cuál es su legajo")));
const indexLegajo = choferes.findIndex ((el) => el.legajo == informarLegajo);

const indexTurno = turnos.findIndex ((el) => el.legajoLunesTM == informarLegajo || el.legajoLunesTM == informarLegajo);




console.log ("Bienvenido " + choferes[indexLegajo].nombre + " " + choferes[indexLegajo].apellido); 
console.log ("citaciones: " + "Lunes: " + turnos[indexTurno].citacionTM);