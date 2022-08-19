
const choferes = JSON.parse(localStorage.getItem("choferes")) ?? [];

let cantConsultasPuente = JSON.parse(localStorage.getItem ("cantConsultasPuente"))??0;
let cantConsultasTalar = JSON.parse(localStorage.getItem ("cantConsultasTalar"))??0;



if (choferes.length == 0){
    fetch("choferes.json")
    .then(response => response.json())
    .then(j =>{
    
    for (i=0;i<j.length;i++){
        choferes[i]=j[i];
        
}
})
}
console.log(choferes);
    
const turnos = [];
const talarTurnos = [];


const cantidadDeCoches = ["1","2","3","4","5","7","8","10","11","12","14"];
let modeloCit = [];
modeloCit[0] = cantidadDeCoches;

const talarCantidadDeCoches = ["6","9","16","32","33","36","38","39","47","49","57"];
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

let turnosAsignados = [];
let talarTurnosAsignados = [];

let citacionPuente = document.getElementById("citacionPuente");
let citacionTalar = document.getElementById("citacionTalar");

async function GenerarCitacionSemana (a, b, c, d){
    await fetch(b)
    .then(response => response.json())
    .then(j =>{
    
    for (i=0;i<a.length;i++){
        for (p=0;p<a[i].length;p++){
            c[p] = {
                ...j[p],
                cocheLunes: a[0].at(p),
                cocheMartes: a[1].at(p),
                cocheMiercoles: a[2].at(p),
                cocheJueves: a[3].at(p),
                cocheViernes: a[4].at(p)
        }
     } 
}
})

for (const item of c){
    let {numeroDeTurno, citacionTM, citacionTT, cocheLunes, cocheMartes, cocheMiercoles, cocheJueves, cocheViernes} = item; 
    
        let llenar = d;
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

GenerarCitacionSemana(citSemana, "turnos.json", turnosAsignados, citacionPuente);
GenerarCitacionSemana(talarCitSemana, "talarTurnos.json", talarTurnosAsignados, citacionTalar);




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
