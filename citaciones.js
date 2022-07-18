function Chofer(datosDelChofer){
    this.apellido = datosDelChofer.apellido;
    this.nombre = datosDelChofer.nombre;
    this.legajo = datosDelChofer.legajo;
    this.turno = datosDelChofer.turno;
    this.cocheEfectivo = datosDelChofer.cocheEfectivo;
}

const choferCoche1TurnoM = {
    apellido: "Alfonso",
    nombre: "Franco",
    legajo: "3100",
    turno: "Mañana",
    cocheEfectivo: 1
}
const chofer1 = new Chofer(choferCoche1TurnoM);

const choferCoche2TurnoM = {
    apellido: "Alfonso",
    nombre: "Franco",
    legajo: "3100",
    turno: "Mañana",
    cocheEfectivo: 2
}
const chofer2 = new Chofer(choferCoche2TurnoM);

const choferCoche3TurnoM = {
    apellido: "Soto",
    nombre: "Ariel",
    legajo: "2939",
    turno: "Mañana",
    cocheEfectivo: 3
}
const chofer3 = new Chofer(choferCoche3TurnoM);

const choferCoche1TurnoT = {
    apellido: "Torrez",
    nombre: "Kevin",
    legajo: "3082",
    turno: "Tarde",
    cocheEfectivo: 1
}
const chofer4 = new Chofer(choferCoche1TurnoT);

const choferCoche2TurnoT = {
    apellido: "Barboza",
    nombre: "Ezequiel",
    legajo: "3005",
    turno: "Tarde",
    cocheEfectivo: 2
}
const chofer5 = new Chofer(choferCoche2TurnoT);

const choferCoche3TurnoT = {
    apellido: "Montesino",
    nombre: "Juan",
    legajo: "2364",
    turno: "Tarde",
    cocheEfectivo: 3
}
const chofer6 = new Chofer(choferCoche3TurnoT);

const choferCoche4TurnoM = {
    apellido: "Pared",
    nombre: "Fabián Andrés",
    legajo: "2936",
    turno: "Mañana",
    cocheEfectivo: 4
}
const chofer7 = new Chofer(choferCoche4TurnoM);

const choferCoche4TurnoT = {
    apellido: "Orue",
    nombre: "Salvador",
    legajo: "2498",
    turno: "Tarde",
    cocheEfectivo: 4
}
const chofer8 = new Chofer(choferCoche4TurnoT);

const choferCoche5TurnoM = {
    apellido: "Guibondot",
    nombre: "Hernán",
    legajo: "2749",
    turno: "Mañana",
    cocheEfectivo: 5
}
const chofer9 = new Chofer(choferCoche5TurnoM);

const choferCoche5TurnoT = {
    apellido: "Rodriguez",
    nombre: "Johnny",
    legajo: "2072",
    turno: "Tarde",
    cocheEfectivo: 5
}
const chofer10 = new Chofer(choferCoche5TurnoT);

function Turno(datosDelTurno){
    this.numero = datosDelTurno.numero;
    this.citacionTM = datosDelTurno.citacionTM;
    this.citacionTT = datosDelTurno.citacionTT;
}

const turno1 = {
    numero: 1,
    citacionTM: "00:20",
    citacionTT: "12:34"
}
const primerTurno = new Turno(turno1);

const turno2 = {
    numero: 2,
    citacionTM: "00:54",
    citacionTT: "12:53"
}
const segundoTurno = new Turno(turno2);

const turno3 = {
    numero: 3,
    citacionTM: "01:33",
    citacionTT: "13:00"
}
const tercerTurno = new Turno(turno3);

const turno4 = {
    numero: 4,
    citacionTM: "02:07",
    citacionTT: "13:20"
}
const cuartoTurno = new Turno(turno4);

const turno5 = {
    numero: 5,
    citacionTM: "02:39",
    citacionTT: "13:25"
}
const quintoTurno = new Turno(turno5);

let listadoDeChoferes = [chofer1, chofer2, chofer3, chofer4, chofer5, chofer6, chofer7, chofer8, chofer9, chofer10];

let listadoDeTurnos = [primerTurno, segundoTurno, tercerTurno, cuartoTurno, quintoTurno];

let diaTanda = ["lunes","martes","miercoles","jueves","viernes"];

let citacion1 = [1,2,3,4,5];
let citacion2 = [2,3,4,5,1];
let citacion3 = [3,4,5,1,2];
let citacion4 = [4,5,1,2,3];
let citacion5 = [5,4,3,2,1];

let citCoches = [citacion1, citacion2, citacion3, citacion4, citacion5];



let infoCoche = (parseInt(prompt ("Informe cual será el primer coche el día lunes")));

let citacionCoches;

let primerCoche = (infoCoche);

function GenerarCitacion (){

            for (let i = 0; i < citCoches.length; i++){
        if ( primerCoche=== i + 1){
            citacionCoches = citCoches[i];
            break;
        }else{
            continue;
        }
}
}
GenerarCitacion();



let citacionLunes; 
let citacionMartes;
let citacionMiercoles;
let citacionJueves;
let citacionViernes;

let citaciones = [citacionLunes, citacionMartes, citacionMiercoles, citacionJueves, citacionViernes];

for (i = 0; i < citaciones.length; i++){
    
function RellenarTurnos(relleno){
    this.chofer = relleno.chofer;
    this.turnoAsignado = relleno.turnoAsignado;
    this.horaCitacion = relleno.horaCitacion;
    }

const asigTurnos1 = {
    chofer: "",
    turnoAsignado: "",
    horaCitacion: "",
}    
let turnoChofer1 = new RellenarTurnos(asigTurnos1);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionCoches[0] && listadoDeChoferes[i].turno === ("Mañana")){
        turnoChofer1.legajo = listadoDeChoferes[i].legajo;
        turnoChofer1.turnoAsignado = primerTurno.numero;
        turnoChofer1.horaCitacion = primerTurno.citacionTM;
    }
    
const asigTurnos2 = {
    chofer: "",
    turnoAsignado: "",
    horaCitacion: "",
}    
let turnoChofer2 = new RellenarTurnos(asigTurnos2);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionCoches[0] && listadoDeChoferes[i].turno === ("Tarde")){
        turnoChofer2.legajo = listadoDeChoferes[i].legajo;
        turnoChofer2.turnoAsignado = primerTurno.numero;
        turnoChofer2.horaCitacion = primerTurno.citacionTT;
    } 
    }
    const asigTurnos3 = {
        chofer: "",
        turnoAsignado: "",
        horaCitacion: "",
    }

let turnoChofer3 = new RellenarTurnos(asigTurnos3);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionCoches[1] && listadoDeChoferes[i].turno === ("Mañana")){
        turnoChofer3.legajo = listadoDeChoferes[i].legajo;
        turnoChofer3.turnoAsignado = segundoTurno.numero;
        turnoChofer3.horaCitacion = segundoTurno.citacionTM;
    } 
    }
const asigTurnos4 = {
    chofer: "",
    turnoAsignado: "",
    horaCitacion: "",
}    
let turnoChofer4 = new RellenarTurnos(asigTurnos4);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionCoches[1] && listadoDeChoferes[i].turno === ("Tarde")){
        turnoChofer4.legajo = listadoDeChoferes[i].legajo;
        turnoChofer4.turnoAsignado = segundoTurno.numero;
        turnoChofer4.horaCitacion = segundoTurno.citacionTT;
    } 
    }
    const asigTurnos5 = {
        chofer: "",
        turnoAsignado: "",
        horaCitacion: "",
    }
let turnoChofer5 = new RellenarTurnos(asigTurnos5);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionCoches[2] && listadoDeChoferes[i].turno === ("Mañana")){
        turnoChofer5.legajo = listadoDeChoferes[i].legajo;
        turnoChofer5.turnoAsignado = tercerTurno.numero;
        turnoChofer5.horaCitacion = tercerTurno.citacionTM;
    } 
    }
const asigTurnos6 = {
    chofer: "",
    turnoAsignado: "",
    horaCitacion: "",
}    
let turnoChofer6 = new RellenarTurnos(asigTurnos6);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionCoches[2] && listadoDeChoferes[i].turno === ("Tarde")){
        turnoChofer6.legajo = listadoDeChoferes[i].legajo;
        turnoChofer6.turnoAsignado = tercerTurno.numero;
        turnoChofer6.horaCitacion = tercerTurno.citacionTT;
    } 
    }
    const asigTurnos7 = {
        chofer: "",
        turnoAsignado: "",
        horaCitacion: "",
    }

let turnoChofer7 = new RellenarTurnos(asigTurnos7);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionCoches[3] && listadoDeChoferes[i].turno === ("Mañana")){
        turnoChofer7.legajo = listadoDeChoferes[i].legajo;
        turnoChofer7.turnoAsignado = cuartoTurno.numero;
        turnoChofer7.horaCitacion = cuartoTurno.citacionTM;
    } 
    }
const asigTurnos8 = {
    chofer: "",
    turnoAsignado: "",
    horaCitacion: "",
}    
let turnoChofer8 = new RellenarTurnos(asigTurnos8);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionCoches[3] && listadoDeChoferes[i].turno === ("Tarde")){
        turnoChofer8.legajo = listadoDeChoferes[i].legajo;
        turnoChofer8.turnoAsignado = cuartoTurno.numero;
        turnoChofer8.horaCitacion = cuartoTurno.citacionTT;
    } 
    }
    const asigTurnos9 = {
        chofer: "",
        turnoAsignado: "",
        horaCitacion: "",
    }
let turnoChofer9 = new RellenarTurnos(asigTurnos9);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionCoches[4] && listadoDeChoferes[i].turno === ("Mañana")){
        turnoChofer9.legajo = listadoDeChoferes[i].legajo;
        turnoChofer9.turnoAsignado = quintoTurno.numero;
        turnoChofer9.horaCitacion = quintoTurno.citacionTM;
    } 
    }
const asigTurnos10 = {
    chofer: "",
    turnoAsignado: "",
    horaCitacion: "",
}    
let turnoChofer10 = new RellenarTurnos(asigTurnos10);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionCoches[4] && listadoDeChoferes[i].turno === ("Tarde")){
        turnoChofer10.legajo = listadoDeChoferes[i].legajo;
        turnoChofer10.turnoAsignado = quintoTurno.numero;
        turnoChofer10.horaCitacion = quintoTurno.citacionTT;
    } 
    }
    citaciones[i] = [turnoChofer1, turnoChofer2, turnoChofer3, turnoChofer4, turnoChofer5, turnoChofer6, turnoChofer7, turnoChofer8, turnoChofer9, turnoChofer10];
    }
}

console.log (citacionMartes.length);



/* let informarLegajo = (prompt ("cuál es su legajo?"));

for (let i = 0; i<listadoDeChoferes.length; i++){
    if (informarLegajo === listadoDeChoferes[i].legajo){
        let seleccionarDia = (prompt ("Bienvenido " + listadoDeChoferes[i].nombre + " " + listadoDeChoferes[i].apellido + ". Infórmenos día de citación solicitada (lunes, martes, etc)"));
            if (seleccionarDia ==="lunes"){
                for (d = 0; d < citacionLunes.length; d++);{
                    if (citacionLunes[d].legajo === listadoDeChoferes[i].legajo) {
                        console.log (citacionLunes[d].horaCitacion);
                    }
                }
            }
    }
}
 */



