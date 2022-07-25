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
choferes.push(new Chofer("Villalba", "Diego", "2774", "Mañana","7"));
choferes.push(new Chofer("Lopez", "Nicolás", "3058", "Tarde","7"));
choferes.push(new Chofer("Quijano", "Alejandro", "2449", "Mañana","8"));
choferes.push(new Chofer("Santomé", "Julio", "2786", "Tarde","8"));
choferes.push(new Chofer("Lopez", "Christian", "2801", "Mañana","10"));
choferes.push(new Chofer("Ramirez", "Juan", "3095", "Tarde","10"));
choferes.push(new Chofer("Maidana", "Juan", "2437", "Mañana","11"));
choferes.push(new Chofer("Roqueiro", "Walter", "2689", "Tarde","11"));
choferes.push(new Chofer("Flores", "Feliciano", "2065", "Mañana","12"));
choferes.push(new Chofer("Borda", "Eduardo", "2802", "Tarde","12"));


//creo base de datos de turnos 

const turnos = [];

turnos.push(["1", "00:20", "12:34"]);
turnos.push(["2", "00:54", "12:53"]);
turnos.push(["3", "01:33", "13:00"]);
turnos.push(["4", "02:07", "13:20"]);
turnos.push(["5", "02:39", "13:25"]);
turnos.push(["6", "02:48", "15:26"]);
turnos.push(["7", "02:57", "14:25"]);
turnos.push(["8", "03:13", "13:57"]);
turnos.push(["9", "03:27", "13:29"]);
turnos.push(["11", "03:37", "13:39"]);


let modeloCit = [];
const cantidadDeCoches = ["1","2","3","4","5","7","8","10","11","12"];

modeloCit[0] = cantidadDeCoches;

//Creo un array con modelos de citaciones posibles

for (i=0; i<cantidadDeCoches.length-1; i++){
    let y = cantidadDeCoches.at(i);
    let x =  modeloCit[i].map((n) => n);
    x.shift();
    x.push(y);
    modeloCit[i + 1] = x;
}

//elijo al azar el primer coche para el lunes

getIndice = Math.floor ((Math.random() * 10));

getPrimero = cantidadDeCoches[getIndice];

const citSemana= [];

const diaLunes = modeloCit.findIndex((el) => el.at(0) == getPrimero);

citSemana[0]= modeloCit[diaLunes];

//creo otro array con las citaciones ordenadas segun primer coche del lunes

for (i=0; i<4; i++){
    let y = citSemana[0].at(i);
    let x =  citSemana[i].map((n) => n);
    x.shift();
    x.push(y);
    citSemana[i + 1] = x;
}

let getLegajo;

//pido legajo por prompt y obtengo sus horarios de toda la semana

do{
    getLegajo = (parseInt(prompt ("Cuál es su legajo?")));

    if (choferes.some ((el) => el.legajo == getLegajo) == true){
const getIn = choferes.findIndex ((el) => el.legajo == getLegajo);

const getNombre = choferes[getIn].nombre;

const getApellido = choferes[getIn].apellido;

const getCoche = choferes[getIn].coche;

let horariosChofer = [];

for (i=0; i<citSemana.length;i++){

let getTurno = citSemana[i].findIndex ((el) => el == getCoche);

if (choferes[getIn].turno == "Mañana"){
    let hora = turnos[getTurno].at(1);
    horariosChofer[i] = hora;
} else{
    let hora = turnos[getTurno].at(2);
    horariosChofer[i] = hora;
}
}
informeHorario = 
`<h3>Bienvenido ${getNombre} ${getApellido}<h3>
<h5>Sus citaciones para esta semana son:<h5>
Lunes: ${horariosChofer[0]}<br>
Martes: ${horariosChofer[1]}<br>
Miercoles: ${horariosChofer[2]}<br>
Jueves: ${horariosChofer[3]}<br>
Viernes: ${horariosChofer[4]}`

break;

} else{
    alert ("El legajo que ingresó no se encuentra en nuestra base de datos. Intente nuevamente.");
    
}
}while (choferes.some ((el) => el.legajo == getLegajo) == false);

document.write (informeHorario);