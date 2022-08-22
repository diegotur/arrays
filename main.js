
const choferes = JSON.parse(localStorage.getItem("choferes")) ?? [];

let cantConsultasPuente = JSON.parse(localStorage.getItem ("cantConsultasPuente"))??0;
let cantConsultasTalar = JSON.parse(localStorage.getItem ("cantConsultasTalar"))??0;


async function ValidarChoferes (){

    await fetch("choferes.json")
    .then(response => response.json())
    .then(j =>{
        if (choferes.length != j.length){
            
            for (i=0;i<j.length;i++){
                choferes[i]=j[i];
            }
        }
    })
}
ValidarChoferes();

const turnos = [];
const talarTurnos = [];
let modeloCit = [];
let talarModeloCit = [];
const citSemana= [];
const talarCitSemana= [];



async function GenerarCitaciones (a, b, c, d, e){
    await fetch(a)
    .then(response => response.json())
    .then(j =>{
        b[0]=j[0];
        c[0]=j[1];

        let pte = j[0];
        let talar = j[1];
        
        for (i=0; i<pte.length-1; i++){
            let y = pte.at(i);
            let x =  b[i].map((n) => n);
            x.shift();
            x.push(y);
            b[i + 1] = x;
        }
        for (i=0; i<talar.length-1; i++){
            let y = talar.at(i);
            let x =  c[i].map((n) => n);
            x.shift();
            x.push(y);
            c[i + 1] = x;
        }
        let getIndice = Math.floor ((Math.random() * 10));
        let getPrimero = pte[getIndice];
        let getPrimeroTalar = talar[getIndice];
        const diaLunes = b.findIndex((el) => el.at(0) == getPrimero);
        const diaLunesTalar = c.findIndex((el) => el.at(0) == getPrimeroTalar);
        d[0]= b[diaLunes];
        e[0]= c[diaLunesTalar];

            for (i=0; i<b.length-1; i++){
                let y = d[0].at(i);
                let x = d[i].map((n) => n);
                x.shift();
                x.push(y);
                d[i + 1] = x;
                }
            for (i=0; i<c.length-1; i++){
                let y = e[0].at(i);
                let x = e[i].map((n) => n);
                x.shift();
                x.push(y);
                e[i + 1] = x;
                }
})
}

GenerarCitaciones ("parque.json", modeloCit, talarModeloCit, citSemana, talarCitSemana); 

let turnosAsignados = [];
let talarTurnosAsignados = [];

async function GenerarCitacionSemana (a, b, c, e){
    await fetch(b)
    .then(response => response.json())
    .then(j =>{
        let ind = 0;
        for (const elem of j){
            e[ind]= [elem.numeroDeTurno, elem.citacionTM, elem.citacionTT];
            ind++;
        }
        for (i=0;i<a.length;i++){
            e[i].push(a[i][0],a[i][1],a[i][2],a[i][3],a[i][4]);
        }
        for (const item of e){
            for (i=0; i<item.length; i++){
                let llenar = document.getElementById(c);
                const node = document.createElement("div");
                const textnode = document.createTextNode(item.at(i));
                node.classList.add('styleDiv');
                node.appendChild(textnode);
                llenar.appendChild(node);
            }
        }
    })
}

GenerarCitacionSemana(citSemana, "turnos.json", "citacionPuente", turnosAsignados);
GenerarCitacionSemana(talarCitSemana, "talarTurnos.json", "citacionTalar", talarTurnosAsignados);

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
            let cocheCitL = cab.findIndex ((el) => el.at(3) == coche);
            let cocheCitM = cab.findIndex ((el) => el.at(4) == coche);
            let cocheCitMM = cab.findIndex ((el) => el.at(5) == coche);
            let cocheCitJ = cab.findIndex ((el) => el.at(6) == coche);
            let cocheCitV = cab.findIndex ((el) => el.at(7) == coche);
            
            let turnoCitL = (turno == "Mañana")?cab[cocheCitL].at(1):cab[cocheCitL].at(2);
            let turnoCitM = (turno == "Mañana")?cab[cocheCitM].at(1):cab[cocheCitM].at(2);
            let turnoCitMM = (turno == "Mañana")?cab[cocheCitMM].at(1):cab[cocheCitMM].at(2);
            let turnoCitJ = (turno == "Mañana")?cab[cocheCitJ].at(1):cab[cocheCitJ].at(2);
            let turnoCitV = (turno == "Mañana")?cab[cocheCitV].at(1):cab[cocheCitV].at(2);
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
