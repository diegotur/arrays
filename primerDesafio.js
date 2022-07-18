let primero;
let segundo;
let tercero;
let cuarto;
let admins = ["alberto", "pedro", "juan"];

do{
    primero = Math.floor ((Math.random() * 9));
    segundo = Math.floor ((Math.random() * 9));
    tercero = Math.floor ((Math.random() * 9));
    cuarto = Math.floor ((Math.random() * 9));
} while (primero == segundo || primero == tercero || primero == cuarto || segundo == tercero || segundo == cuarto || tercero == cuarto);

const diegoUserPin1 = [primero];
const diegoUserPin2 = [segundo];
const diegoUserPin3 = [tercero];
const diegoUserPin4 = [cuarto];

const diegoUserPin = diegoUserPin1 + diegoUserPin2 + diegoUserPin3 + diegoUserPin4;

let respuesta = (prompt ("desea obtener un pin?"));

if (respuesta == "no"){
    document.write ("oh, lo siento");
} else if (respuesta == "si"){
    let darPin = (prompt ("su PIN es " + diegoUserPin + ". Elija nombre de usuario" ));

    if (darPin == "diego"){
        let userPin = (prompt ("reingrese su PIN"));
        
            if (userPin === diegoUserPin){
                document.write ("bienvenido diego");

            } else {
                for ( let i = 0; i < admins.length; i++) {
                    document.write ("contáctese con el administrador " + admins[i] + "<br>");
                    }
            }
        }else {
            for ( let i = 0; i < admins.length; i++) {
                document.write ("contáctese con el administrador " + admins[i] + "<br>");
                }
    }

}    else{
    for ( let i = 0; i < admins.length; i++) {
        document.write ("contáctese con el administrador " + admins[i] + "<br>");
        }
}


///////////////////////////////////////


/* 
function RellenarTurnos(relleno){
    this.chofer = relleno.chofer;
    this.horaCitacionLunes = relleno.horaCitacionLunes;
    this.horaCitacionMartes = relleno.horaCitacionMartes;
    this.horaCitacionMiercoles = relleno.horaCitacionMiercoles;
    this.horaCitacionJueves = relleno.horaCitacionJueves;
    this.horaCitacionViernes = relleno.horaCitacionViernes;

    }

const asigTurnos1 = {
    chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
}    
let turnoChofer1 = new RellenarTurnos(asigTurnos1);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[0] && listadoDeChoferes[i].turno === ("Mañana")){
        turnoChofer1.chofer = listadoDeChoferes[i].legajo;
        turnoChofer1.horaCitacionLunes = listadoDeTurnos[0].citacionTM;
        turnoChofer1.horaCitacionMartes = listadoDeTurnos[1].citacionTM;
        turnoChofer1.horaCitacionMiercoles = listadoDeTurnos[2].citacionTM;
        turnoChofer1.horaCitacionJueves = listadoDeTurnos[3].citacionTM;
        turnoChofer1.horaCitacionViernes = listadoDeTurnos[4].citacionTM;
    }
}
const asigTurnos2 = {
    chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
}    
let turnoChofer2 = new RellenarTurnos(asigTurnos2);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[0] && listadoDeChoferes[i].turno === ("Tarde")){
        turnoChofer2.chofer = listadoDeChoferes[i].legajo;
        turnoChofer2.horaCitacionLunes = listadoDeTurnos[0].citacionTT;
        turnoChofer2.horaCitacionMartes = listadoDeTurnos[1].citacionTT;
        turnoChofer2.horaCitacionMiercoles = listadoDeTurnos[2].citacionTT;
        turnoChofer2.horaCitacionJueves = listadoDeTurnos[3].citacionTT;
        turnoChofer2.horaCitacionViernes = listadoDeTurnos[4].citacionTT;
    }
    }
    const asigTurnos3 = {
    chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
    }

let turnoChofer3 = new RellenarTurnos(asigTurnos3);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[1] && listadoDeChoferes[i].turno === ("Mañana")){
        turnoChofer3.chofer = listadoDeChoferes[i].legajo;
        turnoChofer3.horaCitacionLunes = listadoDeTurnos[1].citacionTM;
        turnoChofer3.horaCitacionMartes = listadoDeTurnos[2].citacionTM;
        turnoChofer3.horaCitacionMiercoles = listadoDeTurnos[3].citacionTM;
        turnoChofer3.horaCitacionJueves = listadoDeTurnos[4].citacionTM;
        turnoChofer3.horaCitacionViernes = listadoDeTurnos[0].citacionTM;
    }
    }
const asigTurnos4 = {
    chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
}    
let turnoChofer4 = new RellenarTurnos(asigTurnos4);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[1] && listadoDeChoferes[i].turno === ("Tarde")){
        turnoChofer4.chofer = listadoDeChoferes[i].legajo;
        turnoChofer4.horaCitacionLunes = listadoDeTurnos[1].citacionTT;
        turnoChofer4.horaCitacionMartes = listadoDeTurnos[2].citacionTT;
        turnoChofer4.horaCitacionMiercoles = listadoDeTurnos[3].citacionTT;
        turnoChofer4.horaCitacionJueves = listadoDeTurnos[4].citacionTT;
        turnoChofer4.horaCitacionViernes = listadoDeTurnos[0].citacionTT;
    }
    }
    const asigTurnos5 = {
    chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
    }
let turnoChofer5 = new RellenarTurnos(asigTurnos5);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[2] && listadoDeChoferes[i].turno === ("Mañana")){
        turnoChofer5.chofer = listadoDeChoferes[i].legajo;
        turnoChofer5.horaCitacionLunes = listadoDeTurnos[2].citacionTM;
        turnoChofer5.horaCitacionMartes = listadoDeTurnos[3].citacionTM;
        turnoChofer5.horaCitacionMiercoles = listadoDeTurnos[4].citacionTM;
        turnoChofer5.horaCitacionJueves = listadoDeTurnos[0].citacionTM;
        turnoChofer5.horaCitacionViernes = listadoDeTurnos[1].citacionTM;
    }
    }
const asigTurnos6 = {
    chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
}    
let turnoChofer6 = new RellenarTurnos(asigTurnos6);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[2] && listadoDeChoferes[i].turno === ("Tarde")){
        turnoChofer6.chofer = listadoDeChoferes[i].legajo;
        turnoChofer6.horaCitacionLunes = listadoDeTurnos[2].citacionTT;
        turnoChofer6.horaCitacionMartes = listadoDeTurnos[3].citacionTT;
        turnoChofer6.horaCitacionMiercoles = listadoDeTurnos[4].citacionTT;
        turnoChofer6.horaCitacionJueves = listadoDeTurnos[0].citacionTT;
        turnoChofer6.horaCitacionViernes = listadoDeTurnos[1].citacionTT;
    }
    }
    const asigTurnos7 = {
        chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
    }

let turnoChofer7 = new RellenarTurnos(asigTurnos7);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[3] && listadoDeChoferes[i].turno === ("Mañana")){
        turnoChofer7.chofer = listadoDeChoferes[i].legajo;
        turnoChofer7.horaCitacionLunes = listadoDeTurnos[3].citacionTM;
        turnoChofer7.horaCitacionMartes = listadoDeTurnos[4].citacionTM;
        turnoChofer7.horaCitacionMiercoles = listadoDeTurnos[0].citacionTM;
        turnoChofer7.horaCitacionJueves = listadoDeTurnos[1].citacionTM;
        turnoChofer7.horaCitacionViernes = listadoDeTurnos[2].citacionTM;
    }
    }
const asigTurnos8 = {
    chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
}    
let turnoChofer8 = new RellenarTurnos(asigTurnos8);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[3] && listadoDeChoferes[i].turno === ("Tarde")){
        turnoChofer8.chofer = listadoDeChoferes[i].legajo;
        turnoChofer8.horaCitacionLunes = listadoDeTurnos[3].citacionTT;
        turnoChofer8.horaCitacionMartes = listadoDeTurnos[4].citacionTT;
        turnoChofer8.horaCitacionMiercoles = listadoDeTurnos[0].citacionTT;
        turnoChofer8.horaCitacionJueves = listadoDeTurnos[1].citacionTT;
        turnoChofer8.horaCitacionViernes = listadoDeTurnos[2].citacionTT;
    }
    }
    const asigTurnos9 = {
        chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
    }
let turnoChofer9 = new RellenarTurnos(asigTurnos9);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[4] && listadoDeChoferes[i].turno === ("Mañana")){
        turnoChofer9.chofer = listadoDeChoferes[i].legajo;
        turnoChofer9.horaCitacionLunes = listadoDeTurnos[4].citacionTM;
        turnoChofer9.horaCitacionMartes = listadoDeTurnos[0].citacionTM;
        turnoChofer9.horaCitacionMiercoles = listadoDeTurnos[1].citacionTM;
        turnoChofer9.horaCitacionJueves = listadoDeTurnos[2].citacionTM;
        turnoChofer9.horaCitacionViernes = listadoDeTurnos[3].citacionTM;
    }
    }
const asigTurnos10 = {
    chofer: "",
    horaCitacionLunes: "",
    horaCitacionMartes: "",
    horaCitacionMiercoles: "",
    horaCitacionJueves: "",
    horaCitacionViernes: "",
}    
let turnoChofer10 = new RellenarTurnos(asigTurnos10);

for (i = 0; i < listadoDeChoferes.length; i++){
    if (listadoDeChoferes[i].cocheEfectivo === citacionLunes[4] && listadoDeChoferes[i].turno === ("Tarde")){
        turnoChofer10.chofer = listadoDeChoferes[i].legajo;
        turnoChofer10.horaCitacionLunes = listadoDeTurnos[4].citacionTT;
        turnoChofer10.horaCitacionMartes = listadoDeTurnos[0].citacionTT;
        turnoChofer10.horaCitacionMiercoles = listadoDeTurnos[1].citacionTT;
        turnoChofer10.horaCitacionJueves = listadoDeTurnos[2].citacionTT;
        turnoChofer10.horaCitacionViernes = listadoDeTurnos[3].citacionTT;
    }
    }

let turnosChoferes = [turnoChofer1, turnoChofer2, turnoChofer3, turnoChofer4, turnoChofer5, turnoChofer6, turnoChofer7, turnoChofer8, turnoChofer9, turnoChofer10 ]

let informarLegajo = (prompt ("cuál es su legajo? Legajos disponibles: 3100 / 3082 / 2738 / 3005 / 2939 / 2364 / 2936 / 2498 / 2749 / 2072"));

for (let i = 0; i<turnosChoferes.length; i++){
    if (informarLegajo === turnosChoferes[i].chofer){
        for (m = 0; m < listadoDeChoferes.length; m++){
            if (informarLegajo === listadoDeChoferes[m].legajo){
        document.write ("Bienvenido " + listadoDeChoferes[m].nombre + " " + listadoDeChoferes[m].apellido + "<br><br>" + "Sus citaciones para esta semana son:" + "<br>" + "Lunes: " + turnosChoferes[i].horaCitacionLunes + "<br>" + "martes: " + turnosChoferes[i].horaCitacionMartes + "<br>" + "Miercoles: " + turnosChoferes[i].horaCitacionMiercoles + "<br>" + "Jueves: " + turnosChoferes[i].horaCitacionJueves + "<br>" + "Viernes: " + turnosChoferes[i].horaCitacionViernes);
    }    
    }
    } 
} */
