//creo base de datos de choferes

// utilizo un operador ??

const choferes = JSON.parse(localStorage.getItem("choferes")) ?? [];

let cantConsultasPuente = JSON.parse(localStorage.getItem ("cantConsultasPuente"))??0;
let cantConsultasTalar = JSON.parse(localStorage.getItem ("cantConsultasTalar"))??0;


// Con un if consulto si ya existe el array "choferes". Si no existe, lo creo.

if (choferes.length == 0){
    class Chofer {
        constructor(apellido, nombre, legajo, turno, coche, cabecera, consulta){
            this.apellido = apellido;
            this.nombre = nombre;
            this.legajo = legajo;
            this.turno = turno;
            this.coche = coche;
            this.cabecera = cabecera;
            this.consulta = 0;
        }
    }
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
}

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

/* const talarTurnos = [];

talarTurnos.push(["3", "04:06", "11:25"]);
talarTurnos.push(["5", "04:22", "11:51"]);
talarTurnos.push(["8", "04:48", "12:28"]);
talarTurnos.push(["9", "04:52", "12:49"]);
talarTurnos.push(["12", "05:15", "13:25"]);
talarTurnos.push(["13", "05:18", "13:55"]);
talarTurnos.push(["15", "05:26", "14:50"]);
talarTurnos.push(["16", "05:30", "13:13"]);
talarTurnos.push(["17", "05:32", "12:45"]);
talarTurnos.push(["18", "05:35", "12:57"]); */

const cantidadDeCoches = ["1","2","3","4","5","7","8","10","11","12"];
let modeloCit = [];
modeloCit[0] = cantidadDeCoches;

const talarCantidadDeCoches = ["6","9","16","32","33","36","38","39","47","49" ];
let talarModeloCit = [];
talarModeloCit[0] = talarCantidadDeCoches;

//Creo un array con modelos de citaciones posibles


function GenerarCitaciones (a, b){
for (i=0; i<a.length-1; i++){
    let y = a.at(i);
    let x =  b[i].map((n) => n);
    x.shift();
    x.push(y);
    b[i + 1] = x;
}
}
GenerarCitaciones (cantidadDeCoches, modeloCit);
GenerarCitaciones (talarCantidadDeCoches, talarModeloCit);

//elijo al azar el primer coche para el lunes

const citSemana= [];
const talarCitSemana= [];

function GenerarPrimerCoche (a,b,c){
    let getIndice = Math.floor ((Math.random() * 10));
    let getPrimero = a[getIndice];
    const diaLunes = b.findIndex((el) => el.at(0) == getPrimero);
    c[0]= b[diaLunes];
    for (i=0; i<4; i++){
        let y = c[0].at(i);
        let x = c[i].map((n) => n);
        x.shift();
        x.push(y);
        c[i + 1] = x;
        }
}

GenerarPrimerCoche (cantidadDeCoches, modeloCit, citSemana);
GenerarPrimerCoche (talarCantidadDeCoches, talarModeloCit, talarCitSemana);


// Agrego al array turnos los coches que están citados para cada uno, de lunes a viernes

let turnosAsignados = [];
let talarTurnosAsignados = [];

let citacionPuente = document.getElementById("citacionPuente");
let citacionTalar = document.getElementById("citacionTalar");

//aplico un spread de un objeto, pero me parece un poco inutil ya que me asigna un numero a las propiedades sin nombre, y luego no las puedo desestructurar, por lo que tuve que agregarles manualmente nombre de propiedad y valor.

function GenerarCitacionSemana (a, b, c){
    fetch(b)
    .then(response => response.json())
    .then(j =>{
        
    for (i=0;i<a.length;i++){
        for (p=0;p<a[i].length;p++){
            c[p] = {
                //...b[p],
                numeroDeTurno: j[p].numeroDeTurno,
                citacionTM: j[p].citacionTM,
                citacionTT: j[p].citacionTT,
                cocheLunes: a[0].at(p),
                cocheMartes: a[1].at(p),
                cocheMiercoles: a[2].at(p),
                cocheJueves: a[3].at(p),
                cocheViernes: a[4].at(p)
            }
        }
    }
})
}

//GenerarCitacionSemana(citSemana, turnos, turnosAsignados);
GenerarCitacionSemana(talarCitSemana, "talarTurnos.json", talarTurnosAsignados);

console.log (talarTurnosAsignados);

function RellenarCitacion (a,b){
    
//aplico una destructuración de un objeto para cumplir con el desafio

    for (const item of a){
        let {numeroDeTurno, citacionTM, citacionTT, cocheLunes, cocheMartes, cocheMiercoles, cocheJueves, cocheViernes} = item; 
        
            let llenar = b;
            const node = document.createElement("div");
            const textnode = document.createTextNode(numeroDeTurno);
            node.classList.add('styleDiv');
            node.appendChild(textnode);
            llenar.appendChild(node);
            const node1 = document.createElement("div");
            const textnode1 = document.createTextNode(citacionTM);
            node1.classList.add('styleDiv');
            node1.appendChild(textnode1);
            llenar.appendChild(node1);
            const node2 = document.createElement("div");
            const textnode2 = document.createTextNode(citacionTT);
            node2.classList.add('styleDiv');
            node2.appendChild(textnode2);
            llenar.appendChild(node2);
            const node3 = document.createElement("div");
            const textnode3 = document.createTextNode(cocheLunes);
            node3.classList.add('styleDiv');
            node3.appendChild(textnode3);
            llenar.appendChild(node3);
            const node4 = document.createElement("div");
            const textnode4 = document.createTextNode(cocheMartes);
            node4.classList.add('styleDiv');
            node4.appendChild(textnode4);
            llenar.appendChild(node4);
            const node5 = document.createElement("div");
            const textnode5 = document.createTextNode(cocheMiercoles);
            node5.classList.add('styleDiv');
            node5.appendChild(textnode5);
            llenar.appendChild(node5);
            const node6 = document.createElement("div");
            const textnode6 = document.createTextNode(cocheJueves);
            node6.classList.add('styleDiv');
            node6.appendChild(textnode6);
            llenar.appendChild(node6);
            const node7 = document.createElement("div");
            const textnode7 = document.createTextNode(cocheViernes);
            node7.classList.add('styleDiv');
            node7.appendChild(textnode7);
            llenar.appendChild(node7);
    }
}
RellenarCitacion (turnosAsignados, citacionPuente ); 
RellenarCitacion (talarTurnosAsignados, citacionTalar ); 

function VerCitacion (a,b,c,d){
    a.style.visibility = "visible";
    b.style.visibility = "hidden";
    c = JSON.parse(localStorage.getItem (d))??0;
    c++;
    localStorage.setItem (d, JSON.stringify (c));
}
document.getElementById("citacionPuenteLink").addEventListener("click", ()=> {VerCitacion(citacionPuente, citacionTalar, cantConsultasPuente, "cantConsultasPuente")});
document.getElementById("citacionTalarLink").addEventListener("click", ()=> {VerCitacion(citacionTalar, citacionPuente, cantConsultasTalar, "cantConsultasTalar")});

document.getElementById("estadisticaButton").addEventListener("click", VerEstadistica);

//Acomodo el array Choferes con un sort, para que me informe los legajos más consultados.

function VerEstadistica(){
    
    choferes.sort((a , b)=>{
        if (a.consulta < b.consulta){
            return 1;
        }
        if (a.consulta > b.consulta){
            return -1;
        }
        });

    for (i=0;i<5;i++){
        const estadisticaChofer = ({legajo, apellido, consulta}) => {
            x = document.getElementsByClassName("estChofer");
            x[i].innerHTML = `<h5>${legajo} - ${apellido}: se consultó ${consulta} veces <br><h5>`
        } 
        estadisticaChofer(choferes[i]);
    }
        document.getElementById("infoEstadistica").innerHTML = `<h3>Consultas de Cabecera P. Uriburu: ${JSON.parse(localStorage.getItem ("cantConsultasPuente"))??0}</h3><br>
        <h3>Consultas de Cabecera Talar: ${JSON.parse(localStorage.getItem ("cantConsultasTalar"))??0}</h3><br>
        <h4>Legajos de choferes más consultados:</h4> <br>`; 
    } 
    
    document.getElementById("inputButton").addEventListener("click",()=> {MostrarCitChofer()});
    
    function MostrarCitChofer(){
        let inputLegajo = document.getElementById("inputLegajo").value;
        if (choferes.some ((el) => el.legajo == inputLegajo) == true){
            document.getElementById("citacionPorChofer").style.visibility = "visible";
            let getIn = choferes.findIndex ((el) => el.legajo == inputLegajo);
            let {nombre, apellido, turno, coche, cabecera} = choferes[getIn];
            let cab = (cabecera == "Puente Uriburu")?turnosAsignados:talarTurnosAsignados;
            let cocheCitL = cab.findIndex ((el) => el.cocheLunes == coche);
            let cocheCitM = cab.findIndex ((el) => el.cocheMartes == coche);
            let cocheCitMM = cab.findIndex ((el) => el.cocheMiercoles == coche);
            let cocheCitJ = cab.findIndex ((el) => el.cocheJueves == coche);
            let cocheCitV = cab.findIndex ((el) => el.cocheViernes == coche);
            let turnoCitL = (turno == "Mañana")?cab[cocheCitL].citacionTM:cab[cocheCitL].citacionTT;
            let turnoCitM = (turno == "Mañana")?cab[cocheCitM].citacionTM:cab[cocheCitM].citacionTT;
            let turnoCitMM = (turno == "Mañana")?cab[cocheCitMM].citacionTM:cab[cocheCitMM].citacionTT;
            let turnoCitJ = (turno == "Mañana")?cab[cocheCitJ].citacionTM:cab[cocheCitJ].citacionTT;
            let turnoCitV = (turno == "Mañana")?cab[cocheCitV].citacionTM:cab[cocheCitV].citacionTT;
            choferes[getIn].consulta++;
            localStorage.setItem ("choferes", JSON.stringify (choferes));
            
            let infoChofer = `${nombre} ${apellido}`;
            let informeHorario = `Sus citaciones para esta semana son:`;
            
            document.getElementById("idChofer").innerText = infoChofer;
            document.getElementById("infoChofer").innerText = informeHorario;

            let index = document.getElementsByClassName("rowCit");
            index[0].innerText = turnoCitL;
            index[1].innerText = turnoCitM;
            index[2].innerText = turnoCitMM;
            index[3].innerText = turnoCitJ;
            index[4].innerText = turnoCitV;
        } else {
            document.getElementById("citacionPorChofer").style.visibility = "hidden";
            idChofer.innerText = "";
            document.getElementById("infoChofer").innerHTML = "<h3>El legajo que ingresó no se encuentra en nuestra base de datos.<br><br>Intente nuevamente.</h3>";

        }
    }
    
document.getElementById("resetBtn").addEventListener("click", Validar);

function Validar(){

    swal({
        title: "Estás seguro?",
        text: "Borrarás toda la estadística",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((confirm) => {
        if (confirm) {
            ResetEstadistica();
        } 
    });
}

function ResetEstadistica(){
    
    for (const elem of choferes){
        elem.consulta = "0";
    }
    localStorage.setItem ("choferes", JSON.stringify (choferes));

    cantConsultasPuente = "0";
    cantConsultasTalar = "0";
    localStorage.setItem ("cantConsultasPuente", JSON.stringify (cantConsultasPuente));
    localStorage.setItem ("cantConsultasTalar", JSON.stringify (cantConsultasTalar));
    VerEstadistica();
    swal({
        icon: "success",
        title: "Estadística borrada",
    });
}
