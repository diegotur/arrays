//creo base de datos de choferes

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

//creo base de datos de turnos con parámetros vacíos para rellenar una vez que se asigne primer coche del día lunes

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


//creo las citaciones rotativas que dependen del numero random (primer coche del lunes)

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

// genero nuevos objetos para reacomodar la citación acorde al número random y los agrego al array numCoche

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

 
// Utilizo un "forEach" para completar los párametros vacíos de "turnos" 

choferes.forEach ((citacion) => {

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
})

//Una vez obtenido el legajo del chofer, utilizo el findIndex para informarle sus horarios

//Agregué menu principal para consultar todos los turnos de la semana, o turnos por legajo

let informarLegajo;


let menu;

do{
    menu = (parseInt(prompt ("CONSULTA CITACIONES POR COCHE (INGRESE 1) / CONSULTA CITACIONES POR LEGAJO (INGRESE 2)")));
    
    if (menu == "1" || menu == "2"){
        if (menu == 1){
            document.write ("TURNO - CIT TM - CIT TT - LUNES - MARTES - MIERCOLES - JUEVES - VIERNES" + "<br>" + "---- 1 ------ 00:20 ----- 12:34 " + "-------"+ numCoche [0].primerCoche + " --------- " + numCoche [0].segundoCoche + " -------------- " + numCoche [0].tercerCoche + " -------------- " + numCoche [0].cuartoCoche + " ----------- " + numCoche [0].quintoCoche + "<br>" + "---- 2 ------ 00:54 ----- 12:53 " + "-------"+ numCoche [1].primerCoche + " --------- " + numCoche [1].segundoCoche + " -------------- " + numCoche [1].tercerCoche + " -------------- " + numCoche [1].cuartoCoche  + " ----------- " + numCoche [1].quintoCoche + "<br>" + "---- 3 ------ 01:33 ----- 13:00 "+ "-------" + numCoche [2].primerCoche + " --------- " + numCoche [2].segundoCoche + " -------------- " + numCoche [2].tercerCoche + " -------------- " + numCoche [2].cuartoCoche + " ----------- " + numCoche [2].quintoCoche + "<br>" + "---- 4 ------ 02:07 ----- 13:20 " + "-------"+ numCoche [3].primerCoche + " --------- " + numCoche [3].segundoCoche + " -------------- " + numCoche [3].tercerCoche + " -------------- " + numCoche [3].cuartoCoche + " ----------- " + numCoche [3].quintoCoche + "<br>" + "---- 5 ------ 02:39 ----- 13:25 " + "-------"+ numCoche [4].primerCoche + " --------- " + numCoche [4].segundoCoche + " -------------- " + numCoche [4].tercerCoche + " -------------- " + numCoche [4].cuartoCoche + " ----------- " + numCoche [4].quintoCoche + "<br>");
            break;
        } else if (menu == 2){
            do{
                informarLegajo = (parseInt(prompt ("Cuál es su legajo? Legajos disponibles: 2072 - 2364 - 2498 - 2738 - 2749 - 2936 - 2939 - 3005 - 3082 - 3100")));
                
                if (choferes.some ((el) => el.legajo == informarLegajo)==true){
                    const indexLegajo = choferes.findIndex ((el) => el.legajo == informarLegajo);

                    const citLunes = turnos.findIndex ((el) => el.legajoLunesTM == informarLegajo || el.legajoLunesTT == informarLegajo);
                    const citMartes = turnos.findIndex ((el) => el.legajoMartesTM == informarLegajo || el.legajoMartesTT == informarLegajo);
                    const citMiercoles = turnos.findIndex ((el) => el.legajoMiercolesTM == informarLegajo || el.legajoMiercolesTT == informarLegajo);
                    const citJueves = turnos.findIndex ((el) => el.legajoJuevesTM == informarLegajo || el.legajoJuevesTT == informarLegajo);
                    const citViernes = turnos.findIndex ((el) => el.legajoViernesTM == informarLegajo || el.legajoViernesTT == informarLegajo);

                    const findTurno = choferes.some ((el) => el.turno == "Mañana" && el.legajo == informarLegajo);

                    if (findTurno == true){
                    document.write ("Bienvenido " + choferes[indexLegajo].nombre + " " + choferes[indexLegajo].apellido + "<br>"); 
                    document.write ("citacion Lunes: " + turnos[citLunes].citacionTM + "<br>");
                    document.write ("citacion Martes: " + turnos[citMartes].citacionTM + "<br>");
                    document.write ("citacion Miercoles: " + turnos[citMiercoles].citacionTM + "<br>");
                    document.write ("citacion Jueves: " + turnos[citJueves].citacionTM + "<br>");
                    document.write ("citacion Viernes: " + turnos[citViernes].citacionTM + "<br>");
                    } else if (findTurno == false){
                    document.write ("Bienvenido " + choferes[indexLegajo].nombre + " " + choferes[indexLegajo].apellido + "<br>"); 
                    document.write ("citacion Lunes: " + turnos[citLunes].citacionTT + "<br>");
                    document.write ("citacion Martes: " + turnos[citMartes].citacionTT + "<br>");
                    document.write ("citacion Miercoles: " + turnos[citMiercoles].citacionTT + "<br>");
                    document.write ("citacion Jueves: " + turnos[citJueves].citacionTT + "<br>");
                    document.write ("citacion Viernes: " + turnos[citViernes].citacionTT + "<br>");
                    }; 
                    break;
                } else{
                    alert ("El legajo que ingresó no se encuentra en nuestra base de datos. Intente nuevamente.");
                }
            } while (choferes.some ((el) => el.legajo == informarLegajo) == false);
            break;
        } else {
            alert ("Error. Seleccione una opción del menú.");
        }
    }
}while (menu != "1" || menu != "2");