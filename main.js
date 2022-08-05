//creo base de datos de choferes

class Chofer {
    constructor(apellido, nombre, legajo, turno, coche, cabecera){
        this.apellido = apellido;
        this.nombre = nombre;
        this.legajo = legajo;
        this.turno = turno;
        this.coche = coche;
        this.cabecera = cabecera;
    }
}
const choferes = [];    

choferes.push(new Chofer("Alfonso", "Franco Roberto", "3100", "Mañana","1", "Puente Uriburu"));
choferes.push(new Chofer("Jimenez", "Leonardo Ezequiel", "2738", "Mañana","2", "Puente Uriburu"));
choferes.push(new Chofer("Soto", "Ariel Abel", "2939", "Mañana","3", "Puente Uriburu"));
choferes.push(new Chofer("Pared", "Ricardo Fabián", "2936", "Mañana","4", "Puente Uriburu"));
choferes.push(new Chofer("Guibondot", "Hernán Antonio", "2749", "Mañana","5", "Puente Uriburu"));
choferes.push(new Chofer("Torrez", "Kevin Luis", "3082", "Tarde","1", "Puente Uriburu"));
choferes.push(new Chofer("Barboza", "Axel Walter", "3005", "Tarde","2", "Puente Uriburu"));
choferes.push(new Chofer("Lopez Montecino", "Víctor", "2364", "Tarde","3", "Puente Uriburu"));
choferes.push(new Chofer("Orue", "Salvador Ángel", "2498", "Tarde","4", "Puente Uriburu"));
choferes.push(new Chofer("Rodriguez Carbajal", "Johnny", "2072", "Tarde","5", "Puente Uriburu"));
choferes.push(new Chofer("Villalba", "Diego Alejandro", "2774", "Mañana","7", "Puente Uriburu"));
choferes.push(new Chofer("Lopez", "Nicolás Martín", "3058", "Tarde","7", "Puente Uriburu"));
choferes.push(new Chofer("Quijano", "Jorge Alejandro", "2449", "Mañana","8", "Puente Uriburu"));
choferes.push(new Chofer("Santomé", "Néstor Oscar", "2786", "Tarde","8", "Puente Uriburu"));
choferes.push(new Chofer("Lopez", "Christian Antonio", "2801", "Mañana","10", "Puente Uriburu"));
choferes.push(new Chofer("Ramirez", "Sergio Eliseo", "3095", "Tarde","10", "Puente Uriburu"));
choferes.push(new Chofer("Maidana", "Juan Alberto", "2437", "Mañana","11", "Puente Uriburu"));
choferes.push(new Chofer("Roqueiro", "Walter Darío", "2689", "Tarde","11", "Puente Uriburu"));
choferes.push(new Chofer("Flores", "Victoriano", "2065", "Mañana","12", "Puente Uriburu"));
choferes.push(new Chofer("Borda", "Héctor Eduardo", "2802", "Tarde","12", "Puente Uriburu"));
choferes.push(new Chofer("Ferreyra", "Hugo Ariel", "3006", "Mañana","6", "Talar"));
choferes.push(new Chofer("Velichco", "Miguel Ángel", "2902", "Tarde","6", "Talar"));
choferes.push(new Chofer("Ojeda", "Juan Pablo", "2706", "Mañana","9", "Talar"));
choferes.push(new Chofer("Andino", "Mario Sebastián", "2875", "Tarde","9", "Talar"));
choferes.push(new Chofer("Mosse", "Federico Matías", "2980", "Mañana","16", "Talar"));
choferes.push(new Chofer("Dragomir", "Ernesto Fidel", "2624", "Tarde","16", "Talar"));
choferes.push(new Chofer("Ledesma", "Jesús Feliciano", "2733", "Mañana","32", "Talar"));
choferes.push(new Chofer("Benitez", "Carlos Matías", "2815", "Tarde","32", "Talar"));
choferes.push(new Chofer("Gauna", "Gustavo Andrés", "2788", "Mañana","33", "Talar"));
choferes.push(new Chofer("Sanchez", "Alfredo José", "2512", "Tarde","33", "Talar"));
choferes.push(new Chofer("Idalgo", "Claudio Norberto", "2898", "Mañana","36", "Talar"));
choferes.push(new Chofer("García", "Ezequiel", "3016", "Tarde","36", "Talar"));
choferes.push(new Chofer("Paez", "Cristian Edgardo Nicolás", "3046", "Mañana","38", "Talar"));
choferes.push(new Chofer("Rodriguez", "Miguel Eduardo", "2526", "Tarde","38", "Talar"));
choferes.push(new Chofer("Romero", "Enrique Daniel", "2649", "Mañana","39", "Talar"));
choferes.push(new Chofer("Ruiz", "Adolfo Martín", "2825", "Tarde","39", "Talar"));
choferes.push(new Chofer("Strefechi", "Ivan Alejandro", "3036", "Mañana","47", "Talar"));
choferes.push(new Chofer("Albarracín", "Hernán Diego", "2685", "Tarde","47", "Talar"));
choferes.push(new Chofer("Nuñez", "Luis Omar", "2822", "Mañana","49", "Talar"));
choferes.push(new Chofer("Avendaño", "Marcos César", "2592", "Tarde","49", "Talar"));


//creo base de datos de turnos 

const turnos = [];

turnos.push(["1", "00:20", "12:34"]);
turnos.push(["2", "00:54", "12:53"]);
turnos.push(["3", "01:33", "13:00"]);
turnos.push(["4", "02:07", "13:20"]);
turnos.push(["5", "02:39", "13:25"]);
turnos.push(["6", "02:48", "13:26"]);
turnos.push(["7", "02:57", "14:25"]);
turnos.push(["8", "03:13", "13:57"]);
turnos.push(["9", "03:27", "13:29"]);
turnos.push(["11", "03:37", "13:39"]);

const talarTurnos = [];

talarTurnos.push(["3", "04:06", "11:25"]);
talarTurnos.push(["5", "04:22", "11:51"]);
talarTurnos.push(["8", "04:48", "12:28"]);
talarTurnos.push(["9", "04:52", "12:49"]);
talarTurnos.push(["12", "05:15", "13:25"]);
talarTurnos.push(["13", "05:18", "13:55"]);
talarTurnos.push(["15", "05:26", "14:50"]);
talarTurnos.push(["16", "05:30", "13:13"]);
talarTurnos.push(["17", "05:32", "12:45"]);
talarTurnos.push(["18", "05:35", "12:57"]);


const cantidadDeCoches = ["1","2","3","4","5","7","8","10","11","12"];
let modeloCit = [];
modeloCit[0] = cantidadDeCoches;

const talarCantidadDeCoches = ["6","9","16","32","33","36","38","39","47","49" ];
let talarModeloCit = [];
talarModeloCit[0] = talarCantidadDeCoches;

//Creo un array con modelos de citaciones posibles

for (i=0; i<cantidadDeCoches.length-1; i++){
    let y = cantidadDeCoches.at(i);
    let x =  modeloCit[i].map((n) => n);
    x.shift();
    x.push(y);
    modeloCit[i + 1] = x;
}
for (i=0; i<talarCantidadDeCoches.length-1; i++){
    let y = talarCantidadDeCoches.at(i);
    let x =  talarModeloCit[i].map((n) => n);
    x.shift();
    x.push(y);
    talarModeloCit[i + 1] = x;
}

//elijo al azar el primer coche para el lunes

getIndice = Math.floor ((Math.random() * 10));
talarGetIndice = Math.floor ((Math.random() * 10));

getPrimero = cantidadDeCoches[getIndice];

talarGetPrimero = talarCantidadDeCoches[talarGetIndice];

const citSemana= [];
const talarCitSemana= [];

const diaLunes = modeloCit.findIndex((el) => el.at(0) == getPrimero);
const talarDiaLunes = talarModeloCit.findIndex((el) => el.at(0) == talarGetPrimero);

citSemana[0]= modeloCit[diaLunes];
talarCitSemana[0]= talarModeloCit[talarDiaLunes];

//creo otro array con las citaciones ordenadas segun primer coche del lunes

for (i=0; i<4; i++){
    let y = citSemana[0].at(i);
    let x =  citSemana[i].map((n) => n);
    x.shift();
    x.push(y);
    citSemana[i + 1] = x;
}


for (i=0; i<4; i++){
    let y = talarCitSemana[0].at(i);
    let x =  talarCitSemana[i].map((n) => n);
    x.shift();
    x.push(y);
    talarCitSemana[i + 1] = x;
}

let getLegajo;

let arrCitacion = [];
let talarArrCitacion = [];

for (i=0;i<=9;i++){
    arrCitacion[i] = "columna"+i;
    talarArrCitacion[i] = "talarColumna"+i;   
}


let arrFilas = [];
let talarArrFilas = [];

for (i=0;i<=6;i++){
    arrFilas[i] = "row"+i;
    talarArrFilas[i] = "talarRow"+i;

}
for (i=0;i<=6;i++){
    arrFilas[i] = "row"+i;
    talarArrFilas[i] = "talarRow"+i;

}

let rellenoTurnos=[];

for (x=0;x<=turnos.length;x++){

    let llenar = document.getElementById("citacionPuente");

    
    for (i=0;i<=2;i++){
        let createDiv = document.createElement("div");
        let createTextDiv = document.createTextNode(turnos[x].at(i));
        createDiv.classList.add('styleDiv');
        createDiv.appendChild(createTextDiv);
        
        rellenoTurnos[i]=createDiv;
        //console.log (createDiv);
        //llenar.appendChild(createDiv);
        
    } 
    for (f=4;f<=8;f++){
        let w = 0;
        let createDiv = document.createElement("div");
        let createTextDiv = document.createTextNode(citSemana[w].at(x));
        createDiv.classList.add('styleDiv');
        createDiv.appendChild(createTextDiv) ;
        rellenoTurnos[f]=createDiv;
        w++;
        console.log (rellenoTurnos);
    }
    /* const node = document.createElement("div");
    const textnode = document.createTextNode(turnos[x].at(0));
    const node1 = document.createElement("div");
    const textnode1 = document.createTextNode(turnos[x].at(1));
    const node2 = document.createElement("div");
    const textnode2 = document.createTextNode(turnos[x].at(2));
    const node3 = document.createElement("div");
    const textnode3 = document.createTextNode(citSemana[0].at(x));
    const node4 = document.createElement("div");
    const textnode4 = document.createTextNode(citSemana[1].at(x));
    const node5 = document.createElement("div");
    const textnode5 = document.createTextNode(citSemana[2].at(x));
    const node6 = document.createElement("div");
    const textnode6 = document.createTextNode(citSemana[3].at(x));
    const node7 = document.createElement("div");
    const textnode7 = document.createTextNode(citSemana[4].at(x));
    node.classList.add('styleDiv');
    node1.classList.add('styleDiv');
    node2.classList.add('styleDiv');
    node3.classList.add('styleDiv');
    node4.classList.add('styleDiv');
    node5.classList.add('styleDiv');
    node6.classList.add('styleDiv');
    node7.classList.add('styleDiv');
    node.appendChild(textnode);
    node1.appendChild(textnode1);
    node2.appendChild(textnode2);
    node3.appendChild(textnode3);
    node4.appendChild(textnode4);
    node5.appendChild(textnode5);
    node6.appendChild(textnode6);
    node7.appendChild(textnode7);
    llenar.appendChild(node);
    llenar.appendChild(node1);
    llenar.appendChild(node2);
    llenar.appendChild(node3);
    llenar.appendChild(node4);
    llenar.appendChild(node5);
    llenar.appendChild(node6);
    llenar.appendChild(node7); */
}
for (x=0;x<=turnos.length;x++){

    let llenar = document.getElementById("citacionTalar");
    const node = document.createElement("div");
    const textnode = document.createTextNode(talarTurnos[x].at(0));
    const node1 = document.createElement("div");
    const textnode1 = document.createTextNode(talarTurnos[x].at(1));
    const node2 = document.createElement("div");
    const textnode2 = document.createTextNode(talarTurnos[x].at(2));
    const node3 = document.createElement("div");
    const textnode3 = document.createTextNode(talarCitSemana[0].at(x));
    const node4 = document.createElement("div");
    const textnode4 = document.createTextNode(talarCitSemana[1].at(x));
    const node5 = document.createElement("div");
    const textnode5 = document.createTextNode(talarCitSemana[2].at(x));
    const node6 = document.createElement("div");
    const textnode6 = document.createTextNode(talarCitSemana[3].at(x));
    const node7 = document.createElement("div");
    const textnode7 = document.createTextNode(talarCitSemana[4].at(x));
    node.classList.add('styleDiv');
    node1.classList.add('styleDiv');
    node2.classList.add('styleDiv');
    node3.classList.add('styleDiv');
    node4.classList.add('styleDiv');
    node5.classList.add('styleDiv');
    node6.classList.add('styleDiv');
    node7.classList.add('styleDiv');
    node.appendChild(textnode);
    node1.appendChild(textnode1);
    node2.appendChild(textnode2);
    node3.appendChild(textnode3);
    node4.appendChild(textnode4);
    node5.appendChild(textnode5);
    node6.appendChild(textnode6);
    node7.appendChild(textnode7);
    llenar.appendChild(node);
    llenar.appendChild(node1);
    llenar.appendChild(node2);
    llenar.appendChild(node3);
    llenar.appendChild(node4);
    llenar.appendChild(node5);
    llenar.appendChild(node6);
    llenar.appendChild(node7);
}

let mostrarPuente = document.getElementById("citacionPuenteLink");
let mostrarTalar = document.getElementById("citacionTalarLink");

    mostrarPuente.addEventListener("click", mostrar);
    function mostrar (){
        document.getElementById("citacionPuente").style.visibility = "visible";
        document.getElementById("citacionTalar").style.visibility = "hidden";
        
    }
    mostrarTalar.addEventListener("click", mostrar2);
    function mostrar2 (){
        document.getElementById("citacionPuente").style.visibility = "hidden";
        document.getElementById("citacionTalar").style.visibility = "visible";
    }

let mostrarLegajo = document.getElementById("inputButton");

let inputLegajo = parseInt(document.getElementById("inputLegajo").value);

let textModal = document.getElementById("infoChofer")

let mjeWelcome = document.getElementById("staticBackdropLabel")

let idChofer = document.getElementById("idChofer");

mostrarLegajo.addEventListener("click", mostrar3);

let getIn;
let getNombre;
let getApellio;
let getCoche;
let horariosChofer = [];
let getTurno;
let informeHorario;
let welcome;
let citChoferPorDia = [];
let llenar2;

for (i=0;i<=4;i++){
    citChoferPorDia[i] = "rowCit"+i;
}


function mostrar3 (){
    let inputLegajo = document.getElementById("inputLegajo").value;
    document.getElementById("citacionPorChofer").style.visibility = "visible";
    if (choferes.some ((el) => el.legajo == inputLegajo) == true){
        getIn = choferes.findIndex ((el) => el.legajo == inputLegajo);
        getNombre = choferes[getIn].nombre;
        getApellido = choferes[getIn].apellido;
        getCoche = choferes[getIn].coche;
        getCabecera = choferes[getIn].cabecera;

       
        
        if (getCabecera=="Puente Uriburu"){
        for (i=0; i<citSemana.length;i++){
    
            getTurno = citSemana[i].findIndex ((el) => el == getCoche);
            
            if (choferes[getIn].turno == "Mañana"){
                let hora = turnos[getTurno].at(1);
                horariosChofer[i] = hora;
            } else{
                let hora = turnos[getTurno].at(2);
                horariosChofer[i] = hora;
            }
        }
        }else if(getCabecera=="Talar"){
            for (i=0; i<talarCitSemana.length;i++){
    
                getTurno = talarCitSemana[i].findIndex ((el) => el == getCoche);
                
                if (choferes[getIn].turno == "Mañana"){
                    let hora = talarTurnos[getTurno].at(1);
                    horariosChofer[i] = hora;
                } else{
                    let hora = talarTurnos[getTurno].at(2);
                    horariosChofer[i] = hora;
                }
            }
        }
            
            welcome = `Bienvenido`;   
            infoChofer = `${getNombre} ${getApellido}`;
            informeHorario = `Sus citaciones para esta semana son:`;

            
            mjeWelcome.innerText = welcome;
            idChofer.innerText = infoChofer;
            textModal.innerText = informeHorario;

            
            for (const item of citChoferPorDia){
                let x = citChoferPorDia.indexOf(item);
                document.getElementById(item).innerText = horariosChofer[x];
                
            }  
        } else {
            document.getElementById("citacionPorChofer").style.visibility = "hidden";
            mjeWelcome.innerText = "ERROR";
            textModal.innerHTML = "<h3>El legajo que ingresó no se encuentra en nuestra base de datos.<br><br>Intente nuevamente.</h3>";

        }
}